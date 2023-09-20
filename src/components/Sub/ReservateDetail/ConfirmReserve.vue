<template>
  <div
    style="
      position: relative;
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
  <!-- <v-table fixed-header height="80vh" style="margin-top: 20vh">
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
      <tr v-for="(item, index) in formDataArray" :key="index">
        <td>{{ item.userName }}</td>
        <td>{{ item.studioName }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.startTime }}:00 -{{ item.endTime }}:00</td>
        <td>{{ item.peopleNum }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.email }}</td>
        <td>
          -->
  <!-- <v-btn
    :disabled="item.state === 1 ? true : false"
    :class="{ pressed: item.state === 1 }"
  >
    확인
    <v-dialog v-model="item.passwordDialog" activator="parent" width="auto">
      <v-card>
        <v-card-text> 비밀번호 입력 </v-card-text>
        <v-otp-input
          variant="solo-inverted"
          v-model="item.password"
          type="password"
          :loading="loading"
          @finish="onFinish(item.password, index)"
        ></v-otp-input>

        <v-card-actions>
          <v-btn color="primary" block @click="item.passwordDialog = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ text }}
    </v-snackbar>
  </v-btn> -->

  <!-- <v-btn
            @click="confirmReservation(item.logId, 1)"
            :class="{ pressed: item.state === 1 }"
            >확인</v-btn
          > 
        </td>
      </tr>
    </tbody>
  </v-table> -->
  <v-text-field
    v-model="search"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
  <v-data-table
    :items-per-page="itemsPerPage"
    :headers="headers"
    :items="listdata"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:item="{ item }">
      <tr style="text-align: center">
        <td>{{ item.columns.name }}</td>
        <td>{{ item.columns.studioName }}</td>
        <td>{{ item.columns.date }}</td>
        <td>{{ item.columns.time }}</td>
        <td>{{ item.columns.num }}</td>
        <td>{{ item.columns.phone }}</td>
        <td>{{ item.columns.email }}</td>
        <td>
          <v-btn
            :disabled="item.selectable.state === 1 ? true : false"
            :class="{ pressed: item.selectable.state === 1 }"
          >
            확인
            <v-dialog
              v-model="item.selectable.passwordDialog"
              activator="parent"
              width="auto"
            >
              <v-card>
                <v-card-text> 비밀번호 입력 </v-card-text>
                <v-otp-input
                  variant="solo-inverted"
                  v-model="item.selectable.password"
                  type="password"
                  :loading="loading"
                  @finish="onFinish(item.selectable.password, item.index)"
                ></v-otp-input>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    block
                    @click="item.selectable.passwordDialog = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-snackbar
              v-model="snackbar"
              :color="snackbarColor"
              :timeout="2000"
            >
              {{ text }}
            </v-snackbar>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<!-- <template v-slot:item="props">
    </template> -->
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
      loading: false,
      snackbar: false,
      snackbarColor: "default",
      expectedPassword: "052345",
      itemsPerPage: 10, // 페이지당 아이템 수
      listdata: [],
      search: "",

      headers: [
        { title: "이름", key: "name" },
        { title: "스튜디오 이름", key: "studioName" },
        { title: "대여날짜", key: "date" },
        { title: "대여시간", key: "time" },
        { title: "사용 인원수", key: "num" },
        { title: "연락처", key: "phone" },
        { title: "이메일", key: "email" },
        { title: "확인", key: "action", sortable: false },
      ],
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
    onFinish(pw, idx) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.snackbarColor =
          pw === this.expectedPassword ? "success" : "warning";
        this.text = `Processed password with "${pw}" (${this.snackbarColor})`;
        this.snackbar = true;

        if (pw === this.expectedPassword) {
          this.confirmReservation(
            this.listdata[idx].logId,
            1,
            this.listdata[idx].password
          );
          this.listdata[idx].passwordDialog = false;
        }

        this.listdata[idx].password = "";
      }, 1500);
    },

    getForm(response) {
      for (var i = 0; i < response.length; i++) {
        this.formDataArray.push(response[i]);
      }
      console.log(this.formDataArray);
      this.pushListData();
      console.log("listdata : ", this.listdata);
    },

    pushListData() {
      for (var i = 0; i < this.formDataArray.length; i++) {
        this.listdata.push({
          name: this.formDataArray[i].userName,
          studioName: this.formDataArray[i].studioName,
          date: this.formDataArray[i].date,
          time: `${this.formDataArray[i].startTime}:00 - ${this.formDataArray[i].endTime}:00`,
          num: this.formDataArray[i].peopleNum,
          phone: this.formDataArray[i].phone,
          email: this.formDataArray[i].email,
          passwordDialog: this.formDataArray[i].passwordDialog,
          password: this.formDataArray[i].password,
          state: this.formDataArray[i].state,
          logId: this.formDataArray[i].logId,
        });
        console.log(this.formDataArray[i].userName);
      }
    },
    confirmReservation(LogId, state, password) {
      console.log(LogId);
      $.ajax({
        /* 요청 시작 부분 */
        url:
          this.hostAddressName +
          "/studio/reservateConfirm/" +
          LogId +
          "/" +
          state +
          "/" +
          password,
        method: "GET",
        type: "get", //전송 타입
        dataType: "json",

        /* 응답 확인 부분 */
        success: (response) => {
          console.log(response);
        },

        /* 에러 확인 부분 */
        error: function (xhr) {
          console.log("");
          console.log("[Error] : [error] : " + xhr);
          console.log("");
        },

        /* 완료 확인 부분 */
        complete: function (xhr, textStatus) {
          console.log("");
          console.log("[server] : [complete] : " + textStatus);
          console.log("");
          location.reload();
        },
      });
    },
  },
  created() {
    // this.pushListData();
    // console.log("listdata : ", this.listdata);
  },
};
</script>
<style scoped>
/* .pressed {
  background-color: #ccc;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
} */
::v-deep .v-data-table__td {
  text-align: center !important;
}
::v-deep .v-data-table-header__content {
  justify-content: center;
  flex-direction: inherit !important;
}
</style>