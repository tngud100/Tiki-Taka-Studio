<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      style="font-family: 'Pretendard-Regular'; font-size: 16px"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          width="auto"
          color="#805BEA"
          block
          size="large"
          style="margin-top: 20px; color: white"
          v-bind="props"
          :disabled="!Validcheck()"
          @click="EquipmentPriceValue()"
        >
          예약하기
        </v-btn>
      </template>
      <v-card class="mx-auto">
        <v-card-title class="d-flex font-weight-bold justify-center">
          <span>{{ currentTitle }}</span>
        </v-card-title>

        <v-divider></v-divider>

        <v-window v-model="step">
          <v-window-item class="v-card1" :value="1">
            <v-card-text>
              <v-text-field
                variant="outlined"
                label="성함"
                type="text"
                v-model="form.name"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                label="휴대폰 번호(-없이 작성해주세요)"
                type="text"
                :rules="[
                  (v) => !!v || '',
                  (v) => (v && v.length > 10) || '연락처를 확인해주세요.',
                ]"
                @input="
                  form.phone = form.phone.replace(/[^0-9]/g, '').slice(0, 11)
                "
                v-model="form.phone"
              ></v-text-field>
              <v-text-field
                label="예약메일을 받으실 이메일을 입력해주세요."
                placeholder="example@naver.com"
                variant="outlined"
                :rules="[
                  (v) => !!v || '',
                  (v) =>
                    (v && v.length <= 35) || '이메일은 35자 이하여야 합니다.',
                  (v) =>
                    /.+@.+\..+/.test(v) || '유효한 이메일 주소를 입력해주세요.',
                ]"
                v-model="form.email"
              ></v-text-field>
              <!-- <span class="text-caption text-grey-darken-1"> 예약자 정보 </span> -->
            </v-card-text>
          </v-window-item>

          <v-window-item class="v-card2" :value="2">
            <v-card-text>
              <div class="reservate-check-form">
                <p class="title">개인 정보</p>
                <div class="line">
                  <span>{{ checkInfo.name[0] }}</span>
                  <span>{{ checkInfo.name[1] }}</span>
                </div>
                <div class="line">
                  <span>{{ checkInfo.email[0] }}</span>
                  <span>{{ checkInfo.email[1] }}</span>
                </div>
                <div class="line">
                  <span>{{ checkInfo.phone[0] }}</span>
                  <span>{{ checkInfo.phone[1] }}</span>
                </div>

                <hr style="margin: 14px 0px" />

                <div class="info-scroll">
                  <p class="title">스튜디오 예약 정보</p>
                  <div class="line">
                    <span>{{ checkInfo.space[0] }}</span>
                    <span>{{ checkInfo.space[1] }}</span>
                  </div>
                  <div class="line">
                    <span>{{ checkInfo.reserveDate[0] }}</span>
                    <span>{{ checkInfo.reserveDate[1] }}</span>
                  </div>
                  <div class="line">
                    <span>{{ checkInfo.reserveTime[0] }}</span>
                    <span>{{ checkInfo.reserveTime[1] }}</span>
                  </div>
                  <div class="line">
                    <span>{{ checkInfo.num[0] }}</span>
                    <span>{{ checkInfo.num[1] }}</span>
                  </div>

                  <p class="title">장비 대여 정보</p>
                  <div
                    class="line"
                    v-if="checkInfo.equipmentCamera[1].length > 0"
                  >
                    <div style="width: 27%">
                      <span>{{ checkInfo.equipmentCamera[0] }}</span>
                    </div>
                    <v-divider vertical="50%" />
                    <div style="width: 73%; text-align: right">
                      <p
                        v-for="(camera, index) in checkInfo.equipmentCamera[1]"
                        :key="index"
                        style="margin: 4px 0px"
                      >
                        {{ camera }}<br />
                        {{
                          checkInfo.equipmentCamera[2][index].toLocaleString() +
                          "원"
                        }}
                        * {{ checkInfo.reserveTime[1].slice(-3) }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="line"
                    v-if="checkInfo.equipmentMonitor[1].length > 0"
                  >
                    <div style="width: 27%">
                      <span>{{ checkInfo.equipmentMonitor[0] }}</span>
                    </div>
                    <v-divider vertical />
                    <div style="width: 73%; text-align: right">
                      <p
                        v-for="(monitor, index) in checkInfo
                          .equipmentMonitor[1]"
                        :key="index"
                        style="margin: 4px 0px"
                      >
                        {{ monitor }}<br />
                        {{
                          checkInfo.equipmentMonitor[2][
                            index
                          ].toLocaleString() + "원"
                        }}
                        * {{ checkInfo.reserveTime[1].slice(-3) }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="line"
                    v-if="checkInfo.equipmentMicAudio[1].length > 0"
                  >
                    <div style="width: 27%">
                      <span style="display: flex">{{
                        checkInfo.equipmentMicAudio[0]
                      }}</span>
                    </div>
                    <v-divider vertical />
                    <div style="width: 73%; text-align: right">
                      <p
                        v-for="(micAudio, index) in checkInfo
                          .equipmentMicAudio[1]"
                        :key="index"
                        style="margin: 4px 0px"
                      >
                        {{ micAudio }}<br />
                        {{
                          checkInfo.equipmentMicAudio[2][
                            index
                          ].toLocaleString() + "원"
                        }}
                        * {{ checkInfo.reserveTime[1].slice(-3) }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="line"
                    v-if="checkInfo.equipmentLightSubFilm[1].length > 0"
                  >
                    <div style="width: 27%">
                      <span style="display: flex">{{
                        checkInfo.equipmentLightSubFilm[0]
                      }}</span>
                    </div>
                    <v-divider vertical />
                    <div style="width: 73%; text-align: right">
                      <p
                        v-for="(lightSubFilm, index) in checkInfo
                          .equipmentLightSubFilm[1]"
                        :key="index"
                        style="margin: 4px 0px"
                      >
                        {{ lightSubFilm }}<br />
                        {{
                          checkInfo.equipmentLightSubFilm[2][
                            index
                          ].toLocaleString() + "원"
                        }}
                        * {{ checkInfo.reserveTime[1].slice(-3) }}
                      </p>
                    </div>
                  </div>
                </div>

                <hr style="margin: 14px 0px" />

                <p class="title">결제 금액 계산</p>
                <div class="line" style="color: #805bea">
                  <span>{{ checkInfo.totalPrice[0] }}</span>
                  <span style="font-size: 20px; font-weight: bold">{{
                    checkInfo.totalPrice[1]
                  }}</span>
                </div>

                <!-- <div v-for="(item, index) in checkInfo" :key="index">
                  <div class="line">
                    <span class="title">{{ item[0] }}</span>
                    <span>{{ item[1] }}</span>
                  </div>
                </div> -->
              </div>
            </v-card-text>
          </v-window-item>

          <v-window-item class="v-card3" :value="3">
            <div class="pa-4 text-center">
              <v-img class="mb-4" contain height="75" :src="img"></v-img>
              <h3 class="text-h7 font-weight-bold mb-2">국민은행</h3>
              <h3 class="text-h7 font-weight-bold mb-2">1560-511545-4849</h3>
              <p class="text-caption">
                입금이 확인될시에 기입하신 이메일로 확인 메일이 전송 됩니다
              </p>
              <p class="text-caption">입금완료가 되어야 예약이 확정 됩니다.</p>
              <span class="text-caption text-grey">무통장 입금</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn v-if="step > 1" variant="text" @click="step--"> 이전 </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="PC-nextBtn"
            v-if="step < 3"
            color="primary"
            variant="flat"
            :disabled="!isValidStep()"
            @click="step++"
          >
            다음
          </v-btn>

          <v-btn v-if="step >= 3" variant="text" @click="finishBtn">
            완료
          </v-btn>
          <v-btn
            class="tablet-nextBtn"
            v-if="step < 3"
            color="primary"
            variant="flat"
            @click="step++"
          >
            다음
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  data() {
    return {
      step: 1,
      dialog: false,
      form: {
        name: "",
        phone: "",
        email: "",
      },
      img: require("@/assets/header/scrollLogo.svg"),
      timeTable: "",
      cameraPrice: [],
      monitorPrice: [],
      micAudioPrice: [],
      lightSubFilmPrice: [],
    };
  },
  props: {
    date: String,
    timeString: String,
    num: Number,
    totalPrice: Number,
    timeList: Array,
    camera: Array,
    monitor: Array,
    micAudio: Array,
    lightSubFilm: Array,
    equipmentNum: Array,
    roomTitle: String,
    roomNum: Number,
  },
  computed: {
    ...mapGetters(["rooms", "hostAddressName", "equipments"]),
    currentTitle() {
      switch (this.step) {
        case 1:
          return "예약자 정보";
        case 2:
          return "예약 확인";
        default:
          return "입금 확인";
      }
    },

    checkInfo() {
      return {
        name: ["성함", this.form.name],
        email: ["이메일", this.form.email],
        phone: ["연락처", this.form.phone],
        space: ["대여 공간 이름", this.roomTitle],
        roomNum: ["스튜디오 번호", this.roomNum],
        reserveDate: ["대여 날짜", this.date],
        reserveTime: ["대여 시간", this.timeString],
        equipmentCamera: ["카메라 대여", this.camera, this.cameraPrice],
        equipmentMonitor: ["모니터 대여", this.monitor, this.monitorPrice],
        equipmentMicAudio: [
          "마이크&오디오 대여",
          this.micAudio,
          this.micAudioPrice,
        ],
        equipmentLightSubFilm: [
          "조명&촬영보조 대여",
          this.lightSubFilm,
          this.lightSubFilmPrice,
        ],
        num: ["사용 인원 수", this.num + "명"],
        totalPrice: ["총 금액", this.totalPrice.toLocaleString() + "원"],
      };
    },
  },
  watch: {
    timeList() {
      this.timeTable = "";
    },
  },
  mounted() {
    console.log(this.checkInfo);
  },

  methods: {
    EquipmentPriceValue() {
      var type = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      var upperType = ["Camera", "Monitor", "MicAudio", "LightSubFilm"];

      for (var k = 0; k < type.length; k++) {
        const t = "equipment" + upperType[k];
        for (var j = 0; j < this.checkInfo[t][1].length; j++) {
          for (var i = 0; i < this.equipments[type[k]].length; i++) {
            if (this.equipments[type[k]][i].name === this.checkInfo[t][1][j]) {
              console.log(this.equipments[type[k]][i].price);
              this.checkInfo[t][2].push(this.equipments[type[k]][i].price);
            }
          }
        }
        console.log(t.toString() + " : " + this.checkInfo[t][2]);
      }
    },
    isValidStep() {
      switch (this.step) {
        case 1:
          return (
            this.form.name &&
            this.form.phone.length > 10 &&
            this.form.email.length <= 35 &&
            /.+@.+\..+/.test(this.form.email)
          );
        case 2:
          return true;
        default:
          return false;
      }
    },
    finishBtn() {
      this.dialog = false;
      this.sendData(); // 데이터 베이스
      this.sendMail(); // 구글 드라이브 저장, 메일 자동 전송
    },
    Validcheck() {
      if (
        this.date != 0 &&
        this.timeString != "00:00 - 00:00, 0시간" &&
        this.num != 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    sendData() {
      var type = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      var equipmentCount = [];
      var equipmentNum = [];
      for (var j = 0; j < type.length; j++) {
        for (var k = 0; k < this.equipments[type[j]].length; k++) {
          for (var l = 0; l < this.equipmentNum.length; l++) {
            if (
              this.equipments[type[j]][k].equipmentNum === this.equipmentNum[l]
            ) {
              equipmentNum.push(this.equipments[type[j]][k].equipmentNum);
              equipmentCount.push(this.equipments[type[j]][k].count);
            }
          }
        }
      }

      for (var i = 0; i <= this.timeList.length - 1; i++) {
        this.timeTable = this.timeTable + this.timeList[i].substring(0, 2);
      }

      // console.log(this.timeTable);

      const data = {
        studioNum: this.checkInfo.roomNum[1],
        date: this.date,
        time: this.timeTable,
        equipmentTime: this.timeTable,
        peopleNum: this.num,
        userName: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        state: 0, // 입금 미완료
      };
      console.log(data);
      console.log("equipmentNum : " + equipmentNum);
      console.log("equipmentCount : " + equipmentCount);

      $.ajax({
        /* 요청 시작 부분 */
        url: this.hostAddressName + "/studio/reserve", //주소
        type: "POST",
        cache: "false",
        async: false,
        traditional: true,
        data: JSON.stringify({
          ...data,
          equipmentNumList: equipmentNum,
          equipmentCountList: equipmentCount,
        }),
        contentType: "application/json",
        dataType: "text",
        /* 응답 확인 부분 */
        success: function () {
          console.log("");
        },

        /* 에러 확인 부분 */
        error: function (xhr) {
          console.log(xhr);
          console.log(xhr.response);
          alert("전송 실패");
          console.log("");
          console.log("[serverUpload] : [error] : " + xhr);
          console.log("");
        },

        /* 완료 확인 부분 */
        complete: function (xhr, textStatus) {
          console.log("");
          console.log("[serverUpload] : [complete] : " + textStatus);
          console.log("");
        },
      });
    },

    sendMail() {
      const formdata = new FormData();

      formdata.append("userName", this.form.name);
      formdata.append("studioName", this.checkInfo.space[1]);
      formdata.append("date", this.date);
      formdata.append("time", this.timeString);
      formdata.append("peopleNum", this.num);
      formdata.append("email", this.form.email);
      formdata.append(
        "phone",
        this.form.phone.replace(/[^0-9]/g, "").slice(0, 11)
      );
      formdata.append("camera", this.checkInfo.equipmentCamera[1]);
      formdata.append("monitor", this.checkInfo.equipmentMonitor[1]);
      formdata.append("micAudio", this.checkInfo.equipmentMicAudio[1]);
      formdata.append("lightSubFilm", this.checkInfo.equipmentLightSubFilm[1]);
      formdata.append("totalPrice", this.checkInfo.totalPrice[1]);

      console.log([...formdata]);

      $.ajax({
        /* 요청 시작 부분 */
        url: "https://script.google.com/macros/s/AKfycbwcICXvQIjhRFSeTkmesThMpQi6fBN5R2QbqPve-zjVCwtjKq_lKrFBt6QLoHyQHlo/exec", //주소
        data: formdata, //전송 데이터
        type: "POST", //전송 타입
        async: true, //비동기 여부
        enctype: "multipart/form-data", //form data 설정
        // dataType: "json",
        processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식
        contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식

        /* 응답 확인 부분 */
        success: function (response) {
          alert("신청이 완료 되었습니다. 메일을 확인해 주세요.");
          console.log("");
          console.log("[serverUploadImage] : [response] : " + response);
          console.log("");
          location.reload();

          // console.log(response.data);
        },

        /* 에러 확인 부분 */
        error: function (xhr) {
          // alert("전송 실패");
          console.log("");
          console.log("[serverUploadImage] : [error] : " + xhr);
          console.log("");
        },

        /* 완료 확인 부분 */
        complete: function (xhr, textStatus) {
          console.log("");
          console.log("[serverUploadImage] : [complete] : " + textStatus);
          console.log("");

          // location.reload();
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.reservate-check-form {
  font-size: 16px;
  font-family: "Pretendard-Regular";
  border-radius: 5px;
  padding: 0px 12px;

  .info-scroll {
    max-height: 300px; /* content can grow up to 300px */
    overflow-y: auto; /* will show scroll if content exceeds 300px */
  }
  .info-scroll::-webkit-scrollbar {
    width: 12px;
  }

  .info-scroll::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 6px;
  }

  .info-scroll::-webkit-scrollbar-track {
    background-color: lightgrey;
  }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0px;
    span {
      padding: 10px;
    }
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 10px;
  }
}
::v-deep .v-window {
  overflow: auto;
}
::v-deep .v-window::-webkit-scrollbar {
  width: 6px;
}

::v-deep .v-window::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 6px;
}

::v-deep .v-window::-webkit-scrollbar-track {
  background-color: lightgrey;
}

.PC-nextBtn {
  display: block;
}
.tablet-nextBtn {
  display: none;
}
//PC XL
@media screen and (min-width: 1300px) {
  .v-card1,
  .v-card2,
  .v-card3 {
    width: 500px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .v-card1,
  .v-card2,
  .v-card3 {
    width: 500px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .v-card1,
  .v-card2,
  .v-card3 {
    width: 500px;
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .v-card1,
  .v-card2,
  .v-card3 {
    width: 450px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .v-card1,
  .v-card2,
  .v-card3 {
    width: calc(100vw - 80px);
  }
  .reservate-check-form {
    width: 100%;
    padding: 0px 6px;
    .title {
      margin: 10px 0px;
    }
    .line {
      span {
        padding: 0px;
      }
      p {
      }
    }
  }
  .v-card-text {
    padding: 8px;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1290px) {
  .PC-nextBtn {
    display: none;
  }
  .tablet-nextBtn {
    display: block;
  }
}
</style>