<template>
  <div id="app">
    <v-btn @click="goBack" color="primary">뒤로가기</v-btn>
    <h1>티앤티 스튜디오 예약 현황</h1>
    <calendar-view
      :show-date="showDate"
      @click-item="handleDateClick"
      :items="events"
      :enableDragDrop="true"
      class="theme-default holiday-us-traditional holiday-us-official"
    >
      <template #header="{ headerProps }">
        <calendar-view-header
          :header-props="headerProps"
          @input="setShowDate"
        />
      </template>
    </calendar-view>
    <div v-if="modalVisible" class="modal-overlay" @click="closeModal">
      <div
        class="modal-content"
        style="min-width: 320px; font-family: 'Pretendard-Regular'"
      >
        <h3>예약 현황</h3>
        <hr style="margin: 0px 0px 12px 0px" />
        <div v-if="selectedDate">
          <p>성함 : {{ selectedDate.originalItem.title }}</p>
          <p>예약 날짜 : {{ selectedDate.originalItem.startDate }}</p>
          <p>스튜디오 : {{ selectedDate.originalItem.studioName }}</p>
          <p>인원수 : {{ selectedDate.originalItem.peopleNum }}명</p>
          <p>
            시간 : {{ selectedDate.originalItem.startTime }}:00 -
            {{ selectedDate.originalItem.endTime }}:00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import "vue-simple-calendar/dist/css/default.css";
import "vue-simple-calendar/dist/css/holidays-us.css";

import $ from "jquery";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    CalendarView,
    CalendarViewHeader,
  },
  computed: {
    ...mapGetters(["hostAddressName"]),
  },
  data() {
    return {
      showDate: new Date(),
      modalVisible: false,
      events: [],
      selectedDate: "",
      formDataArray: [],
    };
  },
  component: {
    "calendar-view": window.CalendarView,
  },
  mounted() {
    $.ajax({
      /* 요청 시작 부분 */
      url: this.hostAddressName + "/studio/reserve/CalendarReservate",
      method: "GET",
      type: "get", //전송 타입
      dataType: "json",

      /* 응답 확인 부분 */
      success: (response) => {
        console.log(response);
        this.getForm(response);
      },

      /* 에러 확인 부분 */
      error: function (xhr) {
        // alert("전송 실패");
        console.log("");
        console.log("[Error] : [error] : " + xhr);
        console.log("");
      },

      /* 완료 확인 부분 */
      complete: function (xhr, textStatus) {
        console.log("");
        console.log("[server] : [complete] : " + textStatus);
        console.log("");
      },
    });
  },
  methods: {
    getForm(response) {
      for (var i = 0; i < response.length; i++) {
        this.formDataArray.push(response[i]);
      }
      console.log(this.formDataArray);
      this.insertData(this.formDataArray);
    },

    insertData(form) {
      if (form[0] === null) {
        return;
      }
      for (var i = 0; i < form.length; i++) {
        if (form[i].state > 0) {
          const event = {
            id: i,
            startDate: form[i].date,
            title: form[i].userName,
            peopleNum: form[i].peopleNum,
            studioName: form[i].studioName,
            startTime: form[i].startTime,
            endTime: form[i].endTime,
            state: form[i].state,
          };
          if (i > 0) {
            if (
              form[i - 1].date === form[i].date &&
              form[i - 1].title === form[i].title &&
              form[i - 1].regdate === form[i].regdate
            ) {
              console.log("중복");
            } else {
              this.events.push(event);
            }
          }
          if (i == 0) {
            this.events.push(event);
          }
        }
      }
    },
    goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1); // Vue Router를 사용한 경우
    },
    setShowDate(d) {
      this.showDate = d;
    },

    handleDateClick(date) {
      this.selectedDate = date;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.selectedDate = null;
    },
  },
};
</script>
  <style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  height: 67vh;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
.cv-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}
.cv-wrapper,
.cv-wrapper div {
  box-sizing: border-box;
  line-height: 1em;
  font-size: 1em;
}
.cv-header-days {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  flex-flow: row nowrap;
  border-width: 0 0 0 1px;
}
.cv-header-day {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-width: 1px 1px 0 0;
}
.cv-weeks {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  flex-flow: column nowrap;
  border-width: 0 0 1px 1px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.cv-weeknumber {
  width: 2rem;
  position: relative;
  text-align: center;
  border-width: 1px 1px 0 0;
  border-style: solid;
  line-height: 1;
}
.cv-week {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  flex-flow: row nowrap;
  min-height: 3em;
  border-width: 0;
  position: relative;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
}
.cv-weekdays {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  flex-flow: row nowrap;
  direction: ltr;
  position: relative;
  overflow-y: auto;
  scrollbar-width: none;
}
.cv-day {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  position: relative;
  position: sticky;
  top: 0;
  border-width: 1px 1px 0 0;
  direction: initial;
}
.cv-day-number {
  height: auto;
  align-self: flex-start;
}
.cv-day-number:hover:after {
  position: absolute;
  top: 1rem;
  background-color: var(--cal-holiday-bg, #f7f7f7);
  border: var(--cal-holiday-border, 1px solid #f0f0f0);
  box-shadow: 0.1rem 0.1rem 0.2rem
    var(--cal-holiday-shadow, rgba(0, 0, 0, 0.25));
  padding: 0.2rem;
  margin: 0.5rem;
  line-height: 1.2;
}
.cv-day[draggable],
.cv-item[draggable] {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.cv-item {
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  background-color: #f7f7f7;
  border-width: 1px;
  direction: initial;
}
.cv-wrapper.wrap-item-title-on-hover .cv-item:hover {
  white-space: normal;
  z-index: 1;
}
.cv-header-days,
.cv-header-day,
.cv-weeks,
.cv-week,
.cv-day,
.cv-item {
  border-style: solid;
  border-color: #ddd;
}
.cv-item .endTime:before {
  content: "-";
}
.cv-header-day,
.cv-day-number,
.cv-item {
  padding: 0.2em;
}
.cv-day-number:before {
  margin-right: 0.5em;
}
.cv-item.offset0 {
  left: 0;
}
.cv-item.offset1 {
  left: calc((100% / 7));
}
.cv-item.offset2 {
  left: calc((200% / 7));
}
.cv-item.offset3 {
  left: calc((300% / 7));
}
.cv-item.offset4 {
  left: calc((400% / 7));
}
.cv-item.offset5 {
  left: calc((500% / 7));
}
.cv-item.offset6 {
  left: calc((600% / 7));
}
.cv-item.span1 {
  width: calc((100% / 7) - 0.05em);
}
.cv-item.span2 {
  width: calc((200% / 7) - 0.05em);
}
.cv-item.span3 {
  width: calc((300% / 7) - 0.05em);
}
.cv-item.span4 {
  width: calc((400% / 7) - 0.05em);
}
.cv-item.span5 {
  width: calc((500% / 7) - 0.05em);
}
.cv-item.span6 {
  width: calc((600% / 7) - 0.05em);
}
.cv-item.span7 {
  width: calc(100% - 0.05em);
}
.cv-weeks::-webkit-scrollbar,
.cv-weekdays::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.cv-header {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 2.5em;
  border-width: 1px 1px 0 1px;
}
.cv-header .periodLabel {
  display: flex;
  flex: 1 1 auto;
  flex-flow: row nowrap;
  min-height: 1.5em;
  line-height: 1;
  font-size: 1.5em;
}
.cv-header,
.cv-header button {
  border-style: solid;
  border-color: #ddd;
}
.cv-header-nav,
.cv-header .periodLabel {
  margin: 0.1em 0.6em;
}
.cv-header-nav button,
.cv-header .periodLabel {
  padding: 0.4em 0.6em;
}
.cv-header button {
  box-sizing: border-box;
  line-height: 1em;
  font-size: 1em;
  border-width: 1px;
}
</style>