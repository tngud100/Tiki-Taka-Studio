<template>
  <div
    style="
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #b9b9b9;
    "
  >
    <h1>예약 확인</h1>
  </div>
  <v-table fixed-header height="80vh">
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
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          color: "Frozen Yogurt",
          dka: 159,
          fsae: "Frozen Yogurt",
          sad: 159,
          qwe: "Frozen Yogurt",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          color: "Frozen Yogurt",
          dka: 159,
          fsae: "Frozen Yogurt",
          sad: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          color: "Frozen Yogurt",
          dka: 159,
          fsae: "Frozen Yogurt",
          sad: 159,
          qwe: "Frozen Yogurt",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          color: "Frozen Yogurt",
          dka: 159,
          fsae: "Frozen Yogurt",
          sad: 159,
          qwe: "Frozen Yogurt",
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
          color: "Frozen Yogurt",
          dka: 159,
          fsae: "Frozen Yogurt",
          sad: 159,
        },
      ],
      formDataArray: [],
      //   itemsPerPage: 5,

      //   headers: [
      //     { title: "이름", align: "end", key: "userName" },
      //     { title: "스튜디오", align: "end", key: "studioName" },
      //     { title: "대여날짜", align: "start", key: "date" },
      //     { title: "대여시간", align: "end", key: "startTime" },
      //     { title: "사용 인원수", align: "end", key: "peopleNum" },
      //     { title: "연락처", align: "end", key: "phone" },
      //     { title: "이메일", align: "end", key: "email" },
      //     { title: "입금 확인", align: "end", key: "state" },
      //   ],
      //   dessert: [
      //     {
      //       userName: "",
      //       studioName: 159,
      //       date: 6.0,
      //       startTime: 24,
      //       endTime: 24,
      //       peopleNum: 4.0,
      //       email: "1",
      //       state: 0,
      //     },
      //   ],
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
          // location.reload();

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