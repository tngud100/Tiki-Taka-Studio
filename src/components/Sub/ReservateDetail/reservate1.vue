<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="title-con">
      <span class="title">티앤티 스튜디오 {{ rooms[0].title }}</span>
    </div>
    <div class="container">
      <div class="img-con">
        <img :src="rooms[0].imageSrc" class="img" alt="studio" />
        <div class="img-info">
          <p class="img-title">
            화이트로 꾸며진 다양한 컨셉공간 [회사,부엌,공방,휴식]
          </p>
        </div>
        <div class="descript">
          <p class="intro">장소 소개</p>
          <br />
          <p>🤍 다양한 컨셉 공간</p>
          <p>: 약 100평의 넓은 공간을</p>
          <p>각 컨셉에 맞게 인테리어 해놓았습니다</p>
          <br />
          <p>
            -사무공간 (25평) : 트렌디한 회사분위기 촬영을 원하신다면 좋은 그림이
            나올만큼의 넓이와 배치가 되어있습니다 애초에 그런 웹드라마촬영쪽을
            고려했던 배치입니다:) 실제 사무공간에서 작업을 하고있기에 소품이나
            배치의 현장감도 살아있습니다
          </p>
          <p>
            -공방 (15평) : 악세서리공예,재봉틀, 다양한 취미 등의 도구들이
            구비되있으며 도구 및 장비/공예품 소품으로 대여 가능합니다
          </p>
          <p>
            -부엌 (7평) : 미니오븐,전자레인지,냉장고, 아일랜드식탁 등 감성적인
            홈카페 브이로그로 적합한 컨셉공간입니다 실제 조리도구들로 대여
            가능합니다
          </p>
        </div>
      </div>
      <div class="info-con">
        <div class="info">
          <div class="title-info">
            <p class="title">{{ rooms[0].title }}</p>
            <p class="price">{{ rooms[0].price.toLocaleString() }}원</p>
            <router-link to="/CalendarReservate">
              <v-btn class="title">티키앤타카 예약 현황</v-btn>
            </router-link>
          </div>
          <hr />
          <div class="schedule-con">
            <p class="title">스케줄</p>

            <!-- 날짜 테이블 -->
            <!-- <v-text-field
              @click="dialog = !dialog"
              variant="outlined"
              label="날짜를 선택해 주세요"
              readonly
              class="sub-title"
              v-model="date"
            >
            </v-text-field> -->
            <div class="date-picker">
              <!-- <v-date-picker
                v-if="dialog"
                :min="minDate"
                :max="maxDate"
                v-model="date"
                @update:model-value="updateDate"
                hide-actions
              /> -->
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
            <div class="time-con" v-if="date">
              <p class="time-title" style="margin-top: 20px">시간</p>
              <p class="sub-title">최소 3시간 이상</p>
              <v-text-field
                @click="timeDialog = !timeDialog"
                variant="outlined"
                label="시간을 선택해 주세요"
                readonly
                class="sub-title"
                v-model="timeString"
              >
                <!-- {{ date }} -->
              </v-text-field>
              <div
                v-if="timeDialog"
                class="time-box"
                style="
                  border: solid 1px rgb(204, 204, 204);
                  padding: 32px;
                  border-radius: 10px;
                "
              >
                <v-btn
                  v-for="i in 24"
                  :key="i"
                  style="margin: 6px"
                  @click="setTime(i)"
                  :class="{
                    'selected-time': isTimeSelected(i),
                    'block-time': BlockTimeSet(i),
                  }"
                >
                  {{ i < 10 ? "0" + i : i }}:00
                </v-btn>
                <div
                  class="time-apply"
                  style="display: flex; justify-content: right; margin: 8px 0px"
                >
                  <v-btn
                    style="margin: 0px 4px"
                    @click="confirmSelectedTime(true)"
                    >확인</v-btn
                  >
                  <v-btn style="margin: 0px 4px" @click="cancelSelectedTime"
                    >취소</v-btn
                  >
                </div>
              </div>
            </div>
            <!-- 장비 테이블 -->
            <div class="equipment-con" v-if="date">
              <p class="equipment-title" style="margin-top: 20px">장비</p>
              <p class="sub-title">필요하신 장비를 선택해 주세요</p>
              <v-row>
                <v-col
                  cols="3"
                  v-for="(item, index) in EquipmentType"
                  :key="index"
                  @click="isEquipmentSelected(index, item[1])"
                >
                  <v-checkbox v-model="item[1]" :label="item[0]"> </v-checkbox>
                </v-col>
              </v-row>
              <div v-for="(item, index) in Equipments" :key="index">
                <div v-if="EquipmentType[index][1]">
                  <p class="sub-title">
                    {{ setEquipmentType(index) }}를 선택해 주세요
                  </p>
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
                  </v-select>
                </div>
              </div>
            </div>

            <!-- 인원 테이블 -->
            <p class="num-title" style="margin-top: 20px">총인원</p>
            <p class="sub-title">
              최소 인원 초과시 인당
              {{ this.rooms[0].numPrice.toLocaleString() }}원 추가 비용 발생
            </p>
            <v-text-field
              label="인원수를 입력해 주세요."
              persistent-hint
              variant="outlined"
              class="sub-title"
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

            <div class="price-con" v-if="timeHour != 0">
              <hr style="margin-bottom: 20px" />
              <div style="display: flex; justify-content: space-between">
                <span
                  >스튜디오 {{ this.timeHour }}시간 x
                  {{ rooms[0].price.toLocaleString() }}원
                </span>
                <span>
                  {{ (rooms[0].price * this.timeHour).toLocaleString() }}원
                </span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <span>
                  인원수
                  {{ this.num }}명 x {{ rooms[0].numPrice.toLocaleString() }}원
                  ( 최소 {{ rooms[0].numMin }}명 ~ 최대 {{ rooms[0].numMax }}명)
                </span>
                <span> {{ this.numPrice.toLocaleString() }}원 </span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <span> 장비 가격 </span>
                <span> {{ this.equipmentPrice.toLocaleString() }}원 </span>
              </div>
              <hr style="margin: 20px 0px" />
              <div style="display: flex; justify-content: space-between">
                <span>총 가격</span>
                <span>{{ this.totalPrice.toLocaleString() }}원</span>
              </div>
            </div>
            <DialogReserve
              :date="date"
              :time-string="timeString"
              :num="num"
              :total-price="totalPrice"
              :time-list="timeList"
              :camera="Selected.camera"
              :monitor="Selected.monitor"
              :micAudio="Selected.micAudio"
              :lightSubFilm="Selected.lightSubFilm"
              :equipmentNum="Selected.equipmentNum"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import HeaderNav from "@/components/Header/HeaderSub.vue";
import HeaderTitle from "@/components/Header/SubTitle.vue";
import Footer from "@/components/Footer/FooterMain.vue";
import DialogReserve from "./DialogReserve.vue";

import { mapGetters } from "vuex";
import Datepicker from "vuejs3-datepicker";
import $ from "jquery";

export default {
  name: "ReservateDetail1",
  components: {
    HeaderNav,
    Footer,
    HeaderTitle,
    DialogReserve,
    Datepicker,
  },
  computed: {
    ...mapGetters(["rooms", "hostAddressName", "equipments"]),
  },
  data() {
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
        to: new Date(),
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
    };
  },
  mounted() {
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
        this.Equipments.lightSubFilm.push(this.equipments.LightSubFilm[l].name);
      }
    }
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

    updateDate(date) {
      if (Array.isArray(date)) {
        date = date[0];
      }
      this.date = this.date.toISOString().slice(0, 10);
      console.log(this.date);
      this.getDisabledate();
      this.getDisableEquipment();
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
                this.equipmentPrice -= this.equipments[type][i].price;
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
      console.log(this.numPrice);
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
        // 두번째 항목이 있을시에 가격 대입 시행(오류방지)
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
            this.equipmentPrice += price;
            this.PriceCalc();
            console.log("장비 " + this.equipments[equipmentType][k].price);
          } else if (removedSelected) {
            // 항목 취소하였을때 총 금액에서 취소한 항목 금액 감액
            if (
              // for문 돌려 취소한 항목의 금액 가져오기
              this.equipments[equipmentType][k].equipmentNum === removedSelected
            ) {
              this.equipmentPrice -= this.equipments[equipmentType][k].price;
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
              this.equipmentPrice -= this.equipments[equipmentType][k].price;
              this.PriceCalc();
              console.log(
                "마지막 항목 취소 가격" +
                  this.equipments[equipmentType][k].price
              );
            }
          }
        }
      }

      // removedSelected.forEach((removedNum) => {
      //   Object.keys(this.equipments).forEach((equipType) => {
      //     this.equipments[equipType].forEach((equipment) => {
      //       if (equipment.equipmentNum === removedNum) {
      //         this.equipmentPrice -= equipment.price;
      //         console.log("장비 제거 " + equipment.price);
      //       }
      //     });
      //   });
      // });

      // for (var a = 0; a < this.equipments[equipmentType].length; a++) {
      //   if (
      //     this.equipments[equipmentType][a].equipmentNum === removedSelected[0]
      //   ) {
      //     this.equipmentPrice -= 2 * this.equipments[equipmentType][a].price;
      //     console.log("장비 취소" + this.equipments[equipmentType][a].price);
      //   }
      // }
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
      if (Array.isArray(this.timeList)) {
        var times = this.timeList.map((time) => time.slice(0, 2)).join("");
      }
      console.log(times);
      $.ajax({
        /* 요청 시작 부분 */
        url:
          this.hostAddressName +
          "/studio/reserve/" +
          this.rooms[0].studioNum +
          "/" +
          this.date +
          "/" +
          times, //주소
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
      for (var i = 0; i < this.timeList.length; i++) {
        console.log(this.timeList[i]);
      }

      // const timeList = this.timeList.split(",");
      // const times = timeList.map((time) => time.slice(0, 2)).join("");

      $.ajax({
        /* 요청 시작 부분 */
        url: this.hostAddressName + "/studio/reserve/" + this.date, //주소
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
  },
};
</script>

<style lang="scss" scoped>
.selected-time {
  background-color: #3399ff;
  color: white;
}
.block-time {
  background-color: #888888; /* Change this to the color you want */
  color: white; /* Change this to the color you want */
}

// ::v-deep .v-picker-title {
//   display: none;
// }
// ::v-deep .v-date-picker-header {
//   display: none;
// }
.news_section {
  .title-con {
    width: 1300px;
    margin: 30px auto;
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      font-size: 32px;
    }
  }
  .container {
    width: 1300px;
    margin: 0px auto 100px auto;
    display: flex;
    justify-content: space-between;
    .img-con {
      width: calc(60% - 32px);
      .img {
        width: 100%;
        border-radius: 10px;
      }
      font-family: "Pretendard-Regular";
      .img-info {
        .img-title {
          font-weight: bold;
          font-size: 20px;
          padding: 12px;
        }
      }
      .descript {
        padding: 12px;
        font-size: 16px;
        .intro {
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
    .info-con {
      width: calc(40% - 16px);
      .info {
        position: sticky;
        width: 100%;
        padding: 16px;
        border: solid 1px #bebebe;
        border-radius: 10px;
        .title-info {
          font-family: "Pretendard-Regular";
          font-weight: bold;
          font-size: 18px;
          margin: 16px 0px;
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
          .title {
            font-size: 16px;
            margin-top: 20px;
          }
          .sub-title {
            font-size: 12px;
            margin: 10px 0px;
          }
        }
      }
    }
  }
}
</style>
