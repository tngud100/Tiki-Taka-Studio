<template>
  <section>
    <!-- 제목 -->
    <div class="reserve-form">
      <div class="title-box">
        <div class="title-first">
          <span class="title-span"> TNT STUDIO 견적/예약 </span>
        </div>
        <div class="title-second">
          <div class="document-title">
            <span class="document-span"> 담 당 자 </span>
          </div>
          <div class="document-title">
            <span class="document-span"> 사 용 자 </span>
          </div>
          <div class="document-title">
            <span class="document-span"> 대여승인 </span>
          </div>
          <div class="sign-con"></div>
        </div>
        <div class="title-third">
          <div class="document-title">
            <input style="width: 100%; margin: 4px" />
          </div>
          <div class="document-title">
            <input style="width: 100%; margin: 4px" />
          </div>
          <div class="document-title">
            <span class="document-span"> 반납승인 </span>
          </div>
          <div class="sign-con"></div>
        </div>
      </div>
      <div class="info-con">
        <div class="info">
          <!-- 스튜디오 -->
          <div class="title-info">
            <div>
              <p class="title">스튜디오</p>
              <v-select
                class="stuido-selector"
                :items="'워터'"
                :label="'스튜디오를' + '를 선택해 주세요'"
                variant="outlined"
              />
              <div class="calender-box">
                <router-link to="/CalendarReservate">
                  <v-btn class="title btn">스튜디오 예약 현황</v-btn>
                </router-link>
              </div>
            </div>
          </div>
          <!-- 날짜 선택기 -->
          <div class="schedule-con">
            <p class="title">스케줄</p>
            <div class="date-picker">
              <Datepicker
                :value="date"
                v-model="date"
                @input="updateDate"
                format="yyyy-MM-dd"
                placeholder="날짜를 선택해 주세요"
                :disabled-dates="disableDate"
              />
            </div>

            <!-- 시간 테이블 -->
            <div class="time-con">
              <p class="time-title" style="margin-top: 20px">시간</p>
              <p class="sub-title">최소 3시간 이상</p>
              <v-text-field
                @click="timeDialog = !timeDialog"
                variant="outlined"
                label="시간을 선택해 주세요"
                readonly
                class="sub-title time-input"
                v-model="timeString"
              >
                <!-- {{ date }} -->
              </v-text-field>
              <div v-if="timeDialog" class="time-box">
                <div style="margin: auto; width: 80%">
                  <v-btn
                    v-for="i in 24"
                    :key="i"
                    class="time-btn"
                    @click="setTime(i)"
                    :class="{
                      'selected-time': isTimeSelected(i),
                      'block-time': BlockTimeSet(i),
                    }"
                  >
                    {{ i < 10 ? "0" + i : i }}:00
                  </v-btn>
                </div>
                <div
                  class="time-apply"
                  style="display: flex; justify-content: right; margin: 8px 0px"
                >
                  <v-btn style="margin: 0px 4px" @click="confirmSelectedTime"
                    >확인</v-btn
                  >
                  <v-btn style="margin: 0px 4px" @click="cancelSelectedTime"
                    >취소</v-btn
                  >
                </div>
              </div>
            </div>
            <!-- 장비 테이블 v-if="timeList.length > 0" -->
            <div class="equipment-con">
              <p class="equipment-title">장비</p>
              <p class="sub-title">필요하신 장비를 선택해 주세요</p>
              <v-row>
                <v-col
                  class="check-box v-col-6"
                  xs="3"
                  sm="3"
                  md="3"
                  lg="3"
                  xl="3"
                  xxl="3"
                  v-for="(item, index) in EquipmentType"
                  :key="index"
                  @click="isEquipmentSelected(index, item[1])"
                >
                  <v-checkbox v-model="item[1]" :label="item[0]"> </v-checkbox>
                </v-col>
              </v-row>
              <div
                class="equipment-input"
                v-for="(item, index) in Equipments"
                :key="index"
              >
                <div v-if="EquipmentType[index][1]">
                  <p class="sub-title">
                    {{ setEquipmentType(index) }}를 선택해 주세요
                  </p>
                  <!-- disableEquipmentsOption -->
                  <v-select
                    v-model="Selected[index]"
                    :items="item"
                    :label="setEquipmentType(index) + '를 선택해 주세요'"
                    variant="outlined"
                    multiple
                    @update:model-value="
                      setEquipmentSelected(Selected[index], index)
                    "
                  >
                    <!-- <option
                      v-for="items in Equipments"
                      :key="items"
                      style="
                        height: 50px;
                        border-radius: 5px;
                        border: solid 1px gray;
                      "
                    ></option> -->
                  </v-select>
                </div>
              </div>
            </div>

            <!-- 인원 테이블 -->
            <p class="num-title">총인원</p>
            <p class="sub-title">
              인원 초과시 인당
              {{ this.rooms[0].numPrice.toLocaleString() }}원 추가 비용 발생
            </p>
            <v-text-field
              label="인원수를 입력해 주세요."
              persistent-hint
              variant="outlined"
              class="sub-title people-num"
              v-model="num"
              readonly
            ></v-text-field>
            <div
              class="num-box"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              총인원 수
              <div
                class=""
                style="display: flex; padding: 12px; align-items: center"
              >
                <span
                  class="mdi mdi-minus-circle-outline"
                  style="
                    font-size: 30px;
                    color: rgb(90, 90, 90);
                    cursor: pointer;
                  "
                  @click="minusBtn"
                ></span>

                <div style="margin: 0px 30px; font-size: 16px">
                  {{ num }}
                </div>

                <span
                  class="mdi mdi-plus-circle-outline"
                  style="
                    font-size: 30px;
                    color: rgb(90, 90, 90);
                    cursor: pointer;
                  "
                  @click="plusBtn"
                ></span>
              </div>
            </div>

            <div class="price-con">
              <hr style="margin-bottom: 20px" />
              <div class="price-box">
                <span class="price-text"
                  >스튜디오 {{ this.timeHour }}시간 x
                  {{ rooms[0].price.toLocaleString() }}원
                </span>
                <span class="price-value">
                  {{ (rooms[0].price * this.timeHour).toLocaleString() }}원
                </span>
              </div>
              <div class="price-box">
                <span class="price-text">
                  인원수
                  {{ this.num }}인 x {{ rooms[0].numPrice.toLocaleString() }}원
                  ( 최소 {{ rooms[0].numMin }}인 ~ 최대 {{ rooms[0].numMax }}인)
                </span>
                <span class="price-value">
                  {{ this.numPrice.toLocaleString() }}원
                </span>
              </div>
              <div class="price-box">
                <span class="price-text"> 장비 가격 </span>
                <span class="price-value">
                  {{ this.equipmentPrice.toLocaleString() }}원
                </span>
              </div>
              <hr style="margin: 20px 0px" />
              <div class="price-box">
                <span class="total-text">총 가격</span>
                <span class="total-value"
                  >{{ this.totalPrice.toLocaleString() }}원</span
                >
              </div>
              <div class="sign-box">
                <span>위와 같이 TNT Studio 장비 대여를 신청합니다.</span>
                <br /><br />
                <div class="sign">
                  <span class="sign-text">신청인</span>
                  <div><img /></div>
                  <span class="sign-confirm">(인)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="caution-box">
        ※ 유의사항<br />
        장비/비품 대여는 수량이 한정되어 있어 선예약 이용자를 우선합니다.<br />
        대여한 PC에 기존에 설치된 것, 사전 협의한 것 외의 다른 프로그램을
        설치하시면 안 됩니다.<br />
        대여한 장비의 오염, 파손, 도난 시 그 책임을 이용자에게 청구할 수
        있습니다.<br />
      </div>
    </div>
    <div class="submit-btn">
      <v-btn class="button">예약하기</v-btn>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Datepicker from "vuejs3-datepicker";
import $ from "jquery";
export default {
  name: "TabletReserveForm",
  components: {
    Datepicker,
  },
  computed: {
    ...mapGetters(["rooms", "hostAddressName", "equipments"]),
  },
  data() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return {
      title: "예약하기",
      bgImage: [
        require("@/assets/banner/notify1920.svg"),
        require("@/assets/banner/notify1300.svg"),
        require("@/assets/banner/notify760.svg"),
      ],
      studioImage: [require("@/assets/studio/studio3.svg")],
      dialog: false,
      disableDate: {
        to: yesterday,
        from: null,
      },
      date: null,
      timeDialog: false,
      timeList: [],
      timeString: "00:00 - 00:00, 0시간",
      timeHour: 0,
      selectedStartTime: 0,
      selectedEndTime: 0,
      EquipmentType: {
        camera: ["카메라", false],
        monitor: ["모니터", false],
        micAudio: ["마이크&오디오", false],
        lightSubFilm: ["조명&촬영보조", false],
      },
      Equipments: {
        camera: [],
        monitor: [],
        micAudio: [],
        lightSubFilm: [],
      },
      Selected: {
        camera: [],
        monitor: [],
        micAudio: [],
        lightSubFilm: [],
        equipmentNum: [],
      },
      camera: [],
      num: 0,
      equipmentPrice: 0,
      numPrice: 0,
      totalPrice: 0,
      blockTimeList: [],
      checkAccount: false,
      disableEquipmentName: [],
      disableEquipmentNum: [],
    };
  },
  mounted() {
    this.setEquipmentValue();
  },
  watch: {
    Selected(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  methods: {
    setTime(time) {
      // 처음 선택 할 시 자동 3시간
      if (this.selectedStartTime === 0) {
        this.selectedStartTime = time;
        this.selectedEndTime = time + 3;
      } else {
        this.selectedEndTime = time;
      }
      // 최소 이용시간 3시간으로 지정
      if (
        this.selectedEndTime > this.selectedStartTime &&
        this.selectedEndTime <= this.selectedStartTime + 3
      ) {
        this.selectedEndTime = this.selectedStartTime + 3;
      }

      // 시작 시간보다 전 시간을 예약하려고 할시에 초기화
      if (this.selectedEndTime <= this.selectedStartTime) {
        this.selectedStartTime = 0;
        this.selectedEndTime = 0;
      }

      // block 시간이 있으면 선택 불가
      if (
        // block시간 3시간 전까지는 선택불가 => 최소 시간 3시간
        this.selectedStartTime >= this.blockTimeList[0] - 3 &&
        this.selectedStartTime <=
          this.blockTimeList[this.blockTimeList.length - 1]
      ) {
        alert("최소 이용 시간 및 이용 중인 시간대를 확인해 주세요.");
        this.selectedStartTime = 0;
        this.selectedEndTime = 0;
      }
      if (
        // block된 시간에는 end선택불가
        this.selectedEndTime >= this.blockTimeList[0] &&
        this.selectedEndTime <=
          this.blockTimeList[this.blockTimeList.length - 1]
      ) {
        alert("이용 중인 시간대를 확인해 주세요.");
        this.selectedStartTime = 0;
        this.selectedEndTime = 0;
      }
      if (
        // start가 존재했을시 block 이후의 시간대는 선택 불가
        this.selectedStartTime <= this.blockTimeList[0] &&
        this.selectedEndTime > this.blockTimeList[0]
      ) {
        alert("이용 중인 시간대를 확인해 주세요.");
        this.selectedStartTime = 0;
        this.selectedEndTime = 0;
      }
      if (this.selectedStartTime > 21) {
        alert("최소 이용 시간을 확인해 주세요.");
        this.selectedStartTime = 0;
        this.selectedEndTime = 0;
      }
      this.confirmSelectedTime(false);
      console.log("timeList: " + this.timeList);

      // 초기화
      this.resetEquipmentPrice();
      this.resetEquipmentData();
      this.getDisableEquipment();
    },

    // 클래스 부여
    isTimeSelected(i) {
      this.timeHour = this.selectedEndTime - this.selectedStartTime;
      this.timeString = `${this.selectedStartTime}:00 - ${this.selectedEndTime}:00 , ${this.timeHour}시간`;

      if (this.selectedStartTime !== 0 && this.selectedEndTime !== 0) {
        return i >= this.selectedStartTime && i <= this.selectedEndTime;
      }
    },
    BlockTimeSet(i) {
      return this.blockTimeList.includes(i);
    },

    // 확인 눌렀을시 timeList에 배열 저장
    confirmSelectedTime(bool) {
      const hoursDifference = this.selectedEndTime - this.selectedStartTime;
      if (this.timeList.length === 0) {
        for (let i = 0; i <= hoursDifference; i++) {
          const currentHour = this.selectedStartTime + i;
          const formattedTime =
            (currentHour < 10 ? "0" + currentHour : currentHour) + ":00";
          this.timeList.push(formattedTime);
        }
      } else {
        this.timeList = [];
        for (let i = 0; i <= hoursDifference; i++) {
          const currentHour = this.selectedStartTime + i;
          const formattedTime =
            (currentHour < 10 ? "0" + currentHour : currentHour) + ":00";
          this.timeList.push(formattedTime);
        }
      }
      if (bool) {
        this.timeDialog = false;
      }
      console.log("timeList: " + this.timeList);
      this.PriceCalc();
    },

    // 취소시 초기화
    cancelSelectedTime() {
      this.timeList = [];
      this.timeString = "00:00 - 00:00, 0시간";
      this.timeHour = 0;
      this.selectedStartTime = 0;
      this.selectedEndTime = 0;
      this.timeDialog = false;
    },
    resetEquipmentData() {
      var lowerType = ["camera", "monitor", "micAudio", "lightSubFilm"];

      for (var r = 0; r < lowerType.length; r++) {
        this.Equipments[lowerType[r]] = [];
      }
      this.setEquipmentValue();
    },
    resetEquipmentPrice() {
      this.Selected.camera = [];
      this.Selected.micAudio = [];
      this.Selected.lightSubFilm = [];
      this.Selected.monitor = [];
      this.equipmentPrice = 0;
      if (this.equipmentPrice <= 0) {
        this.equipmentPrice = 0;
      }
    },
    setEquipmentValue() {
      if (this.equipments) {
        for (var i = 0; i < this.equipments.camera.length; i++) {
          this.Equipments.camera.push(this.equipments.camera[i].name);
        }
        for (var k = 0; k < this.equipments.monitor.length; k++) {
          this.Equipments.monitor.push(this.equipments.monitor[k].name);
        }
        for (var m = 0; m < this.equipments.MicAudio.length; m++) {
          this.Equipments.micAudio.push(this.equipments.MicAudio[m].name);
        }
        for (var l = 0; l < this.equipments.LightSubFilm.length; l++) {
          this.Equipments.lightSubFilm.push(
            this.equipments.LightSubFilm[l].name
          );
        }
      }
    },

    updateDate(date) {
      if (Array.isArray(date)) {
        date = date[0];
      }
      this.date = this.date.toISOString().slice(0, 10);
      console.log(this.date);
      this.disableEquipmentNum = [];
      this.resetEquipmentPrice();
      this.getDisabledate();
    },

    setEquipmentType(equipment) {
      if (equipment === "camera") {
        return "카메라";
      }
      if (equipment === "monitor") {
        return "모니터";
      }
      if (equipment === "micAudio") {
        return "마이크&오디오";
      }
      if (equipment === "lightSubFilm") {
        return "조명&촬영보조";
      }
    },

    // setEquipmentSelected(selectedName) {
    //   const equipmentTypes = ["camera", "monitor", "micAudio", "lightSubFilm"];

    //   equipmentTypes.forEach((type) => {
    //     if (this.equipments[type]) {
    //       this.equipments[type].forEach((equipment) => {
    //         if (selectedName.includes(equipment.name)) {
    //           this.Selected.equipmentNum.push(equipment.equipmentNum);
    //         }
    //       });
    //     }
    //   });

    //   const RemoveDuplicate = [...new Set(this.Selected.equipmentNum)];
    //   this.Selected.equipmentNum = RemoveDuplicate;
    //   console.log(this.Selected.equipmentNum);
    // },

    setEquipmentSelected(selectedName, type) {
      console.log(this.Selected);
      const equipmentMapping = {
        camera: "camera",
        monitor: "monitor",
        micAudio: "MicAudio",
        lightSubFilm: "LightSubFilm",
      };

      const equipmentKey = equipmentMapping[type];

      let removedSelected;

      if (!this.equipments[equipmentKey]) {
        console.warn(`Equipment type "${type}" not found.`);
        return;
      }

      this.equipments[equipmentKey].forEach((equipment) => {
        if (
          selectedName.includes(equipment.name) &&
          !this.Selected.equipmentNum.includes(equipment.equipmentNum)
        ) {
          // 선택된 항목이 this.Selected.equipmentNum에 없으면 추가
          this.Selected.equipmentNum.push(equipment.equipmentNum);
        } else if (
          !selectedName.includes(equipment.name) &&
          this.Selected.equipmentNum.includes(equipment.equipmentNum)
        ) {
          // 선택 해제된 항목이 this.Selected.equipmentNum에 있으면 제거
          this.Selected.equipmentNum = this.Selected.equipmentNum.filter(
            (num) => num !== equipment.equipmentNum
          );
          removedSelected = equipment.equipmentNum;
        }
      });

      this.Selected.equipmentNum = [...new Set(this.Selected.equipmentNum)];
      this.equipmentCalc(removedSelected);
    },

    // 체크 해제시 초기화
    isEquipmentSelected(type, bool) {
      bool = !bool;
      const equipmentNumRange = {
        camera: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        monitor: [12],
        micAudio: [16, 17, 18, 19, 20],
        lightSubFilm: [21, 22, 23],
      };

      console.log("type : " + type);

      if (bool === false) {
        console.log(equipmentNumRange[type]);
        if (equipmentNumRange[type]) {
          if (type === "micAudio") {
            type = "MicAudio";
          }
          if (type === "lightSubFilm") {
            type = "LightSubFilm";
          }
          // equipments의 두번째 파라미터와 같을때
          console.log("selected:" + this.Selected.equipmentNum);

          console.log(this.equipments[type]);
          for (var i = 0; i < this.equipments[type].length; i++) {
            for (var k = 0; k < this.Selected.equipmentNum.length; k++) {
              if (
                this.equipments[type][i].equipmentNum ===
                this.Selected.equipmentNum[k]
              ) {
                this.equipmentPrice -=
                  this.equipments[type][i].price * this.timeHour;
                console.log(this.equipments[type][i].price);
              }
            }
          }

          if (type === "MicAudio") {
            type = "micAudio";
          }
          if (type === "LightSubFilm") {
            type = "lightSubFilm";
          }

          this.Selected.equipmentNum = this.Selected.equipmentNum.filter(
            (num) => !equipmentNumRange[type].includes(num)
          );

          this.disableEquipmentNum = this.disableEquipmentNum.filter(
            (num) => !equipmentNumRange[type].includes(num)
          );

          this.Selected[type] = [];
          this.PriceCalc();
        }
      }
    },

    minusBtn() {
      this.num--;
      if (this.num <= 0) {
        this.num = 0;
      }

      this.PriceCalc();
    },
    plusBtn() {
      this.num++;
      if (this.num >= this.rooms[0].numMax) {
        this.num = this.rooms[0].numMax;
      }

      this.PriceCalc();
    },

    PriceCalc() {
      this.numPrice =
        this.rooms[0].numPrice * (this.num - this.rooms[0].numMin);
      if (this.num <= this.rooms[0].numMin) {
        this.numPrice = 0;
      }

      if (this.equipmentPrice <= 0) {
        this.equipmentPrice = 0;
      }
      this.totalPrice =
        this.rooms[0].price * this.timeHour +
        this.equipmentPrice +
        this.numPrice;
    },

    equipmentCalc(removedSelected) {
      const equipmentNumRange = {
        camera: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        monitor: [12],
        micAudio: [16, 17, 18, 19, 20],
        lightSubFilm: [21, 22, 23],
      };

      var equipmentType = "";

      if (this.Selected.equipmentNum.length > 0 && !removedSelected) {
        // 취소된 항목이 없을때, 기본적으로 두번째 변수를 여기서 받음
        for (var i = 0; i <= this.Selected.equipmentNum.length - 1; i++) {
          let currentNum = this.Selected.equipmentNum[i];
          console.log("equipment: " + this.Selected.equipmentNum[i]);

          let matchedKey = Object.keys(equipmentNumRange).find((key) =>
            equipmentNumRange[key].includes(currentNum)
          );

          if (matchedKey) {
            switch (matchedKey) {
              case "micAudio":
                equipmentType = "MicAudio";
                break;
              case "lightSubFilm":
                equipmentType = "LightSubFilm";
                break;
              default:
                equipmentType = matchedKey;
            }
          }
        }
      } else {
        // 취소된 항복이 있을때, 선택 항목 리스트가 비었을때
        let matchedKey = Object.keys(equipmentNumRange).find((key) =>
          equipmentNumRange[key].includes(removedSelected)
        );

        if (matchedKey) {
          switch (matchedKey) {
            case "micAudio":
              equipmentType = "MicAudio";
              break;
            case "lightSubFilm":
              equipmentType = "LightSubFilm";
              break;
            default:
              equipmentType = matchedKey;
          }
        }
      }

      console.log("삭제된 항목 : " + removedSelected);
      console.log(equipmentType);
      if (this.equipments[equipmentType]) {
        // 항목이 있을시에 가격 대입 시행(오류방지)
        for (var k = 0; k < this.equipments[equipmentType].length; k++) {
          // 전역 변수 equipments.parameter 리스트 for문
          let currentNum =
            this.Selected.equipmentNum[this.Selected.equipmentNum.length - 1]; // 선택한 항목의 가장 최근 숫자
          if (
            // for문을 돌려 가장 최근 숫자와 알맞는 price 데이터 뽑기, 취소 항목없을시에 시행 (총금액에 항목 가격 추가)
            this.equipments[equipmentType][k].equipmentNum === currentNum &&
            !removedSelected
          ) {
            var price = this.equipments[equipmentType][k].price;
            this.equipmentPrice += price * this.timeHour;
            this.PriceCalc();
            console.log("장비 " + this.equipments[equipmentType][k].price);
          } else if (removedSelected) {
            // 항목 취소하였을때 총 금액에서 취소한 항목 금액 감액
            if (
              // for문 돌려 취소한 항목의 금액 가져오기
              this.equipments[equipmentType][k].equipmentNum === removedSelected
            ) {
              this.equipmentPrice -=
                this.equipments[equipmentType][k].price * this.timeHour;
              this.PriceCalc();
              console.log(
                "취소 가격" + this.equipments[equipmentType][k].price
              );
            }
          } else {
            // 취소한 항목이 배열의 마지막 데이터 일때( 취소한 항목 금액 총금액에서 감액 ) => 오류 방지를 위해 else사용
            if (
              this.equipments[equipmentType][k].equipmentNum === removedSelected
            ) {
              this.equipmentPrice -=
                this.equipments[equipmentType][k].price * this.timeHour;
              this.PriceCalc();
              console.log(
                "마지막 항목 취소 가격" +
                  this.equipments[equipmentType][k].price
              );
            }
          }
        }
      }

      console.log("총 가격" + this.equipmentPrice);
    },

    dateInsert(date) {
      this.blockTimeList = [];
      for (var i = 0; i < date.length; i++) {
        // console.log(date[i].time, date[i].state);
        if (date[i].state == 1) {
          this.blockTimeList.push(parseInt(date[i].time));
        }
      }
    },
    getDisabledate() {
      $.ajax({
        /* 요청 시작 부분 */
        url:
          this.hostAddressName +
          "/studio/reserve/" +
          this.rooms[0].studioNum +
          "/" +
          this.date,
        method: "GET",
        type: "get", //전송 타입
        dataType: "json",

        /* 응답 확인 부분 */
        success: (response) => {
          this.dateInsert(response);
          console.log(response);
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
          console.log("[server] : [complete] : " + textStatus);
          console.log("");
        },
      });
    },
    getDisableEquipment() {
      var timeTable = "";
      for (var i = 0; i <= this.timeList.length - 1; i++) {
        timeTable = timeTable + this.timeList[i].substring(0, 2);
      }
      console.log(this.timeList);
      console.log("timeTable:" + timeTable);

      $.ajax({
        /* 요청 시작 부분 */
        url:
          this.hostAddressName +
          "/studio/equipment/" +
          this.date +
          "/" +
          timeTable, //주소
        method: "GET",
        type: "get", //전송 타입
        dataType: "json",

        /* 응답 확인 부분 */
        success: (response) => {
          console.log("[server] : [success] : " + response);
          this.getDisableState(response);
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
          console.log("[server] : [complete] : " + textStatus);
          console.log("");
        },
      });
    },
    getDisableState(response) {
      var type = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      var lowerType = ["camera", "monitor", "micAudio", "lightSubFilm"];

      this.disableEquipmentName = [];
      this.disableEquipmentNum = [];
      this.Selected.equipmentNum = [];
      this.resetEquipmentPrice();
      this.resetEquipmentData();

      for (var i = 0; i < response.length; i++) {
        const EquipmentNum = response[i].equipmentNum;
        const EquipmentState = response[i].equipmentState;

        if (EquipmentState === 0) {
          this.disableEquipmentNum.push(EquipmentNum);
        }
      }
      this.disableEquipmentNum = [...new Set(this.disableEquipmentNum)];

      console.log("사용 불가능 장비 번호" + this.disableEquipmentNum); // 사용 불가능 장비 번호

      for (var j = 0; j < type.length; j++) {
        for (var k = 0; k < this.equipments[type[j]].length; k++) {
          for (var l = 0; l < this.disableEquipmentNum.length; l++) {
            if (
              this.equipments[type[j]][k].equipmentNum ===
              this.disableEquipmentNum[l]
            ) {
              this.disableEquipmentName.push(this.equipments[type[j]][k].name);
            }
          }
        }

        this.Equipments[lowerType[j]] = this.Equipments[lowerType[j]].filter(
          (item) => !this.disableEquipmentName.includes(item)
        );
      }
      console.log(this.disableEquipmentName); // 사용 불가능 장비 이름
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  position: absolute;
  background-color: rgb(218, 218, 218);
  top: 0;
  left: 0;
  width: 100%;
}
.reserve-form {
  width: 760px;
  padding: 20px;
  margin: 30px auto;
  background-color: white;
  font-family: "Pretendard";
  .title-box {
    border: solid 1px #bebebe;
    border-radius: 10px;
    height: 170px;
    display: flex;
    .title-first {
      width: 66%;
      display: grid;
      justify-content: center;
      align-items: center;
      border-right: solid 1px #bebebe;
      .title-span {
        font-size: 22px;
        font-weight: bold;
      }
    }
    .title-second {
      width: 17%;
      border-right: solid 1px #bebebe;
      .sign-con {
        height: 40%;
      }
    }
    .title-third {
      width: 17%;
      justify-content: center;
      align-items: center;
      .sign-con {
        height: 40%;
      }
    }
    .document-title {
      height: 20%;
      border-bottom: solid 1px #bebebe;
      display: flex;
      align-items: center;
      justify-content: center;
      .document-span {
        font-size: 16px;
      }
    }
  }

  ::v-deep .v-input__details {
    display: none;
  }
  .info-con {
    margin-top: 10px;
    .info {
      width: 100%;
      border: solid 1px #bebebe;
      border-radius: 10px;
      padding: 18px;

      .title-info {
        font-family: "Pretendard-Regular";
        justify-content: space-between;
        font-weight: bold;
        .title {
          margin: 8px 0px;
        }
        .calender-box {
          display: flex;
          justify-content: right;
          margin: 12px;
        }
      }

      .schedule-con {
        font-family: "Pretendard-Regular";
        font-weight: bold;

        .date-picker {
          display: flex;
          justify-content: center;
          align-items: center;

          ::v-deep .vuejs3-datepicker {
            width: 100% !important;
          }

          ::v-deep .vuejs3-datepicker__value {
            width: 100% !important;
            color: #9e9e9e;
            font-weight: 100;
          }
        }

        .time-con {
          .time-box {
            border: solid 1px rgb(204, 204, 204);
            border-radius: 10px;

            button {
              margin: 8px;
              width: 35px;
            }
          }
        }
        .num-title {
          margin-top: 40px;
        }

        .title {
        }

        .sub-title {
          font-size: 14px;
          margin: 12px 0px;
        }
      }

      .equipment-con {
        margin-top: 20px;
      }
    }
  }

  .price-con {
    .price-box {
      display: flex;
      justify-content: space-between;
    }
    .sign-box {
      margin: 60px auto 30px auto;
      width: 60%;
      text-align: center;
      .sign {
        width: 40%;
        display: flex;
        justify-content: space-between;
        margin: auto;
      }
    }
  }
}
.caution-box {
  margin-top: 10px;
  width: 100%;
  border: solid 1px #bebebe;
  border-radius: 10px;
  padding: 12px;
  font-size: 14px;
}

.submit-btn {
  display: flex;
  margin: 20px auto 50px auto;
  justify-content: center;
  .button {
    width: 150px;
    height: 50px;
    border-radius: 0px;
  }
}

.btn-box {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 150px;
    height: 50px;
    border: solid 1px rgb(0, 0, 0);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    cursor: pointer;
    .btn-text {
      font-family: "sans-serif";
      color: rgb(0, 0, 0);
    }
  }
  a {
    text-decoration: none;
  }
  .btn:hover {
    border: solid 1px #805bea;
    box-shadow: 1px 1px 5px 1px whitesmoke;

    .btn-text {
      color: #805bea;
    }
  }
}
</style>