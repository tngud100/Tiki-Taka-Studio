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
        <div class="modal-content">
          <!-- Display date information or other content here -->
          <!-- <p>{{ selectedDate}}</p> -->
          <p v-if="selectedDate && selectedDate.startDate">시작 시간: {{ selectedDate.startDate.toISOString().slice(0, 10) }}</p>
          <p v-if="selectedDate && selectedDate.startDate">종료 시간: {{ selectedDate.endDate.toISOString().slice(0, 10) }}</p>
          <p>이름, 사용 스튜디오 이름 들어갈 예정 ...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
  import "vue-simple-calendar/dist/css/default.css";
  import "vue-simple-calendar/dist/css/holidays-us.css";
  
  export default {
    name: "app",
    components: {
      CalendarView,
      CalendarViewHeader,
    },
    data() {
      return {
        showDate: new Date(),
        modalVisible: false,
        events: [
          {
            id: 'e1',
            startDate: '2023-08-13',
            endDate: '2023-08-20',
            title: '김수형'
          },
          {
            id: 'e1-1',
            startDate: '2023-08-14',
            title: '김수형'
          },
          {
            id: 'e1-2',
            startDate: '2023-08-14',
            title: '김수형'
          },
          {
            id: 'e2',
            startDate: '2023-08-31',
            title: '김수형'
          },
          {
            id: 'e3',
            startDate: '2023-08-26',
            endDate: '2023-08-27',
            title: '김수형'
          },
        ],
        selectedDate:'',
      };
    },
    component: {
          "calendar-view": window.CalendarView,  
      },
    methods: {
      goBack() {
        // 이전 페이지로 이동하는 로직을 추가합니다.
        this.$router.go(-1); // Vue Router를 사용한 경우
        // 또는
        // window.history.back(); // 웹 브라우저의 기본 뒤로가기 동작
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
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          color: #2c3e50;
          height: 67vh;
          width: 90vw;
          margin-left: auto;
          margin-right: auto;
      }
    .cv-wrapper{display:flex;flex-direction:column;flex-grow:1;height:100%;min-height:100%;max-height:100%;overflow-x:hidden;overflow-y:hidden}.cv-wrapper,.cv-wrapper div{box-sizing:border-box;line-height:1em;font-size:1em}.cv-header-days{display:flex;flex-grow:0;flex-shrink:0;flex-basis:auto;flex-flow:row nowrap;border-width:0 0 0 1px}.cv-header-day{display:flex;flex-grow:1;flex-shrink:0;flex-basis:0;flex-flow:row nowrap;align-items:center;justify-content:center;text-align:center;border-width:1px 1px 0 0}.cv-weeks{display:flex;flex-grow:1;flex-shrink:1;flex-basis:auto;flex-flow:column nowrap;border-width:0 0 1px 1px;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}.cv-weeknumber{width:2rem;position:relative;text-align:center;border-width:1px 1px 0 0;border-style:solid;line-height:1}.cv-week{display:flex;flex-grow:1;flex-shrink:1;flex-basis:0;flex-flow:row nowrap;min-height:3em;border-width:0;position:relative;width:100%;overflow-y:auto;-ms-overflow-style:none}.cv-weekdays{display:flex;flex-grow:1;flex-shrink:0;flex-basis:0;flex-flow:row nowrap;direction:ltr;position:relative;overflow-y:auto;scrollbar-width:none}.cv-day{display:flex;flex-grow:1;flex-shrink:0;flex-basis:0;position:relative;position:sticky;top:0;border-width:1px 1px 0 0;direction:initial}.cv-day-number{height:auto;align-self:flex-start}.cv-day-number:hover:after{position:absolute;top:1rem;background-color:var(--cal-holiday-bg, #f7f7f7);border:var(--cal-holiday-border, 1px solid #f0f0f0);box-shadow:.1rem .1rem .2rem var(--cal-holiday-shadow, rgba(0, 0, 0, .25));padding:.2rem;margin:.5rem;line-height:1.2}.cv-day[draggable],.cv-item[draggable]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.cv-item{position:absolute;white-space:nowrap;overflow:hidden;background-color:#f7f7f7;border-width:1px;direction:initial}.cv-wrapper.wrap-item-title-on-hover .cv-item:hover{white-space:normal;z-index:1}.cv-header-days,.cv-header-day,.cv-weeks,.cv-week,.cv-day,.cv-item{border-style:solid;border-color:#ddd}.cv-item .endTime:before{content:"-"}.cv-header-day,.cv-day-number,.cv-item{padding:.2em}.cv-day-number:before{margin-right:.5em}.cv-item.offset0{left:0}.cv-item.offset1{left:calc((100% / 7))}.cv-item.offset2{left:calc((200% / 7))}.cv-item.offset3{left:calc((300% / 7))}.cv-item.offset4{left:calc((400% / 7))}.cv-item.offset5{left:calc((500% / 7))}.cv-item.offset6{left:calc((600% / 7))}.cv-item.span1{width:calc((100% / 7) - .05em)}.cv-item.span2{width:calc((200% / 7) - .05em)}.cv-item.span3{width:calc((300% / 7) - .05em)}.cv-item.span4{width:calc((400% / 7) - .05em)}.cv-item.span5{width:calc((500% / 7) - .05em)}.cv-item.span6{width:calc((600% / 7) - .05em)}.cv-item.span7{width:calc(100% - .05em)}.cv-weeks::-webkit-scrollbar,.cv-weekdays::-webkit-scrollbar{width:0;background:transparent}.cv-header{display:flex;flex:0 1 auto;flex-flow:row nowrap;align-items:center;min-height:2.5em;border-width:1px 1px 0 1px}.cv-header .periodLabel{display:flex;flex:1 1 auto;flex-flow:row nowrap;min-height:1.5em;line-height:1;font-size:1.5em}.cv-header,.cv-header button{border-style:solid;border-color:#ddd}.cv-header-nav,.cv-header .periodLabel{margin:.1em .6em}.cv-header-nav button,.cv-header .periodLabel{padding:.4em .6em}.cv-header button{box-sizing:border-box;line-height:1em;font-size:1em;border-width:1px}
  
  </style>