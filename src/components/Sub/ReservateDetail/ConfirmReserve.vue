<template>
  <div class="title-con" style="">
    <div class="title-box" style="">
      <h1>예약 확인</h1>
    </div>
    <div class="link-box" style="">
      <router-link to="/CalendarReservate" class="btn">
        <v-btn class="title">스튜디오 예약 현황</v-btn>
      </router-link>
      <router-link to="/ask">
        <v-btn class="title">홈페이지 스튜디오 예약</v-btn>
      </router-link>
      <router-link to="/tabletReserveForm">
        <v-btn class="title">테블릿 예약 폼</v-btn>
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
  <div class="response-table">
    <v-text-field
      v-model="mobileSearch"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      @input="filteredData"
    ></v-text-field>
    <div class="card" v-for="(item, index) in filteredItems" :key="index">
      <div class="row">
        <span class="column title">이름</span>
        <span class="column">{{ item.name }}</span>
      </div>
      <div class="row">
        <span class="column title">스튜디오 이름</span>
        <span class="column">{{ item.studioName }}</span>
      </div>
      <div class="row">
        <span class="column title">대여날짜</span>
        <span class="column">{{ item.date }}</span>
      </div>
      <div class="row">
        <span class="column title">대여시간</span>
        <span class="column">{{ item.time }}</span>
      </div>
      <div class="row">
        <span class="column title">사용 인원수</span>
        <span class="column">{{ item.num }}</span>
      </div>
      <div class="row">
        <span class="column title">연락처</span>
        <span class="column">{{ item.phone }}</span>
      </div>
      <div class="row">
        <span class="column title">이메일</span>
        <span class="column">{{ item.email }}</span>
      </div>
      <div class="row">
        <span class="column title">확인 및 취소</span>
        <div>
          <v-btn
            :disabled="item.state === 1 ? true : false"
            :class="{ pressed: item.state === 1 }"
            style="margin-right: 12px"
          >
            확인
            <v-dialog
              v-model="item.confirmPasswordDialog"
              activator="parent"
              width="auto"
            >
              <v-card>
                <v-card-text> 비밀번호 입력 </v-card-text>
                <v-otp-input
                  variant="solo-inverted"
                  v-model="item.confirmPassword"
                  type="password"
                  :loading="loading"
                  @finish="onFinish(item.confirmPassword, index, true)"
                ></v-otp-input>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    block
                    @click="item.confirmPasswordDialog = false"
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
          <v-btn>
            취소
            <v-dialog
              v-model="item.deletePasswordDialog"
              activator="parent"
              width="auto"
            >
              <v-card>
                <v-card-text> 비밀번호 입력 </v-card-text>
                <v-otp-input
                  variant="solo-inverted"
                  v-model="item.deletePassword"
                  type="password"
                  :loading="loading"
                  @finish="onFinish(item.deletePassword, index, false)"
                ></v-otp-input>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    block
                    @click="item.deletePasswordDialog = false"
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
        </div>
      </div>
    </div>
  </div>

  <div class="PC-table">
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
                v-model="item.selectable.confirmPasswordDialog"
                activator="parent"
                width="auto"
              >
                <v-card>
                  <v-card-text> 비밀번호 입력 </v-card-text>
                  <v-otp-input
                    variant="solo-inverted"
                    v-model="item.selectable.confirmPassword"
                    type="password"
                    :loading="loading"
                    @finish="
                      onFinish(
                        item.selectable.confirmPassword,
                        item.index,
                        true
                      )
                    "
                  ></v-otp-input>

                  <v-card-actions>
                    <v-btn
                      color="primary"
                      block
                      @click="item.selectable.confirmPasswordDialog = false"
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
          <td>
            <v-btn>
              취소
              <v-dialog
                v-model="item.selectable.deletePasswordDialog"
                activator="parent"
                width="auto"
              >
                <v-card>
                  <v-card-text> 비밀번호 입력 </v-card-text>
                  <v-otp-input
                    variant="solo-inverted"
                    v-model="item.selectable.deletePassword"
                    type="password"
                    :loading="loading"
                    @finish="
                      onFinish(
                        item.selectable.deletePassword,
                        item.index,
                        false
                      )
                    "
                  ></v-otp-input>

                  <v-card-actions>
                    <v-btn
                      color="primary"
                      block
                      @click="item.selectable.deletePasswordDialog = false"
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
  </div>
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
      filteredItems: [],
      search: "",
      mobileSearch: "",

      headers: [
        { title: "이름", key: "name" },
        { title: "스튜디오 이름", key: "studioName" },
        { title: "대여날짜", key: "date" },
        { title: "대여시간", key: "time" },
        { title: "사용 인원수", key: "num" },
        { title: "연락처", key: "phone" },
        { title: "이메일", key: "email" },
        { title: "확인", key: "action", sortable: false },
        { title: "취소", key: "delete", sortable: false },
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
        this.filteredData();
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
    onFinish(pw, idx, push) {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.snackbarColor =
          pw === this.expectedPassword ? "success" : "warning";
        this.text = `Processed password with "${pw}" (${this.snackbarColor})`;
        this.snackbar = true;

        if (pw === this.expectedPassword && push === true) {
          this.confirmReservation(
            this.listdata[idx].logId,
            this.listdata[idx].state,
            this.listdata[idx].confirmPassword
          );
          this.listdata[idx].confirmPasswordDialog = false;
        }

        if (pw === this.expectedPassword && push === false) {
          this.deleteReservation(
            this.listdata[idx].logId,
            this.listdata[idx].deletePassword
          );
          this.listdata[idx].deletePasswordDialog = false;
        }

        this.listdata[idx].confirmPassword = "";
        this.listdata[idx].deletePassword = "";
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
          confirmPasswordDialog: this.formDataArray[i].confirmPasswordDialog,
          confirmPassword: this.formDataArray[i].confirmPassword,
          deletePasswordDialog: this.formDataArray[i].deletePasswordDialog,
          deletePassword: this.formDataArray[i].deletePassword,
          state: this.formDataArray[i].state,
          logId: this.formDataArray[i].logId,
        });
      }
    },
    confirmReservation(LogId, state, password) {
      console.log(state);
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
    deleteReservation(LogId, password) {
      $.ajax({
        /* 요청 시작 부분 */
        url: this.hostAddressName + "/studio/delete/" + LogId + "/" + password,
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
          console.log("");
          console.log("[server] : [complete] : " + textStatus);
          console.log("");
          location.reload();
        },
      });
    },
    // 검색어에 따라 데이터를 필터링하는 메서드
    filteredData() {
      const searchText = this.mobileSearch.toLowerCase();

      if (!searchText.trim()) {
        this.filteredItems = [...this.listdata];
        return; // Exit the method
      }
      // 검색어와 일치하는 데이터만 필터링
      this.filteredItems = this.listdata.filter((item) => {
        const normalizedItem = {
          name: item.name.toLowerCase(),
          studioName: item.studioName.toLowerCase(),
          date: item.date.toLowerCase(),
          time: item.time.toLowerCase(),
          num: item.num.toString().toLowerCase(), // Convert numeric values to string for comparison
          phone: item.phone.toLowerCase(),
          email: item.email.toLowerCase(),
        };
        return (
          normalizedItem.name.includes(searchText) ||
          normalizedItem.studioName.includes(searchText) ||
          normalizedItem.date.includes(searchText) ||
          normalizedItem.time.includes(searchText) ||
          normalizedItem.num.includes(searchText) ||
          normalizedItem.phone.includes(searchText) ||
          normalizedItem.email.includes(searchText)
        );
      });
      console.log("filteredItems: ", this.filteredItems);
    },
  },
  created() {
    this.$watch("listdata", () => {
      if (this.listdata) {
        this.filteredItems = [...this.listdata];
      }
    });
  },
};
</script>
<style lang="scss" scoped>
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
.title-con {
  position: relative;
  width: 100%;
  top: 0;
  height: 20vh;
  font-family: "Pretendard";
  .title-box {
    height: 20vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(185, 185, 185);
  }
  .link-box {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: flex-end;
    padding-bottom: 12px;
    .title {
    }
  }
}
@media screen and (min-width: 1250px) {
  .response-table {
    display: none;
  }
  .PC-table {
    display: block;
  }
  .link-box {
    justify-content: right;
    a {
      margin-left: 30px;
    }
  }
}
@media screen and (max-width: 1250px) {
  .response-table {
    display: block;
  }
  .PC-table {
    display: none;
  }
  .link-box {
    justify-content: center;
    a {
      padding: 0px 12px;
    }
  }
}
.response-table {
  .card {
    border: solid 1px rgb(197, 197, 197);
    margin: 12px;
    width: calc(100% - 24px);
    font-family: "Pretendard";
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border-top: solid 1px black;
      border-bottom: solid 1px rgb(212, 212, 212);
      padding: 12px;
      .columns {
        width: 50%;
      }
      .title {
        font-weight: bold;
        font-size: 17px;
      }
    }
  }
}
</style>