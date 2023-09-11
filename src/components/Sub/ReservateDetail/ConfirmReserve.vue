<template>
  <div
    style="
      position: fixed;
      width: 100%;
      top: 0;
      height: 20vh;
      font-family: 'Pretendard';
    "
  >
    <div
      style="
        height: 20vh;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(185, 185, 185);
      "
    >
      <h1>예약 확인</h1>
    </div>
    <div
      style="
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: right;
        align-items: flex-end;
        padding-bottom: 12px;
      "
    >
      <router-link to="/CalendarReservate" style="margin-right: 30px">
        <v-btn class="title btn">스튜디오 예약 현황</v-btn>
      </router-link>
      <router-link to="/ask" style="margin-right: 30px">
        <v-btn class="title btn">홈페이지 스튜디오 예약</v-btn>
      </router-link>
      <router-link to="/tabletReserveForm" style="margin-right: 30px">
        <v-btn class="title btn">테블릿 예약 폼</v-btn>
      </router-link>
    </div>
  </div>
  <v-table fixed-header height="80vh" style="margin-top: 20vh">
    <thead style="font-family: 'Pretendard'; font-weight: bold">
      <tr>
        <th class="text-center">이름</th>
        <th class="text-center">스튜디오</th>
        <th class="text-center">대여날짜</th>
        <th class="text-center">대여시간</th>
        <th class="text-center">사용 인원수</th>
        <th class="text-center">연락처</th>
        <th class="text-center">이메일</th>
        <th class="text-center">입금 확인</th>
      </tr>
    </thead>
    <tbody style="text-align: center; font-family: 'Pretendard-Regular'">
      <tr v-for="item in formDataArray" :key="item.name">
        <td>{{ item.userName }}</td>
        <td>{{ item.studioName }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.startTime }}:00 -{{ item.endTime }}:00</td>
        <td>{{ item.peopleNum }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
        <td>
          <v-btn
            @click="confirmReservation(item.phone, 1)"
            :class="{ pressed: item.state === 1 }"
            >확인</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>

  <!-- <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="dessert"
    item-value="name"
    class="elevation-1"
  ></v-data-table> -->
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";
// import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  computed: {
    ...mapGetters(["hostAddressName"]),
  },
  //   components: {
  //     VDataTable,
  //   },
  data() {
    return {
      formDataArray: [],
    };
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
        alert("전송 실패");
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
    },

    confirmReservation(phone, state) {
      $.ajax({
        /* 요청 시작 부분 */
        url:
          this.hostAddressName +
          "/studio/reservateConfirm/" +
          phone +
          "/" +
          state,
        method: "GET",
        type: "get", //전송 타입
        dataType: "json",

        /* 응답 확인 부분 */
        success: (response) => {
          console.log(response);
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
          location.reload();
          console.log("");
          console.log("[server] : [complete] : " + textStatus);
          console.log("");
        },
      });
    },
  },
};
</script>
<style scoped>
.pressed {
  background-color: #ccc;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
}
::v-deep .v-data-table__td {
  text-align: center !important;
}
::v-deep .v-data-table-header__content {
  justify-content: center;
  flex-direction: inherit !important;
}
</style>