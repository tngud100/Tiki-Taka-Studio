
<template>
  <section class="news_section">
    <HeaderNav />
    <HeaderTitle :title-data="title" :bg-image="bgImage" />
    <div class="title-con">
      <span class="title">{{ rooms[1].title }}</span>
    </div>
    <div class="container">
      <div class="img-con">
        <img :src="rooms[1].imageSrc" class="img" alt="studio" />
        <div class="img-info">
          <!-- <p class="img-title">워터 스튜디오</p> -->
        </div>
        <div class="descript">
          <p class="intro">장소 소개</p>
          <p>- 1인 크리에이터가 콘텐츠를 촬영할 수 있는 공간입니다.</p>
          <p>
            - 고사양의 PC와 웹캠, 마이크, 스위치 등 최신 1인미디어 방송 장비를
            갖추고 있습니다.
          </p>
          <p>
            - 유튜브, 트위치 등 라이브 스트리밍과 녹화 모두 진행하실 수
            있습니다.
          </p>
        </div>
      </div>
      <div class="info-con">
        <div class="info">
          <div class="title-info">
            <div>
              <p class="title">{{ rooms[1].title }}</p>
              <p class="price">
                {{ rooms[1].price.toLocaleString() }}원
                <span style="font-size: 14"> / 시간</span>
              </p>
              <p class="price">
                <span style="font-size: 14px">
                  ( 인원수 : 최소 {{ rooms[1].numMin }}인 ~ 최대
                  {{ rooms[1].numMax }}인)
                </span>
              </p>
            </div>
            <div
              style="text-align: right; display: flex; align-items: flex-end"
            >
              <router-link to="/CalendarReservate">
                <v-btn class="title btn">스튜디오 예약 현황</v-btn>
              </router-link>
            </div>
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
                class="sub-title time-input"
                v-model="timeString"
              >
                <!-- {{ date }} -->
              </v-text-field>
              <div v-if="timeDialog" class="time-box">
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
              <p class="equipment-title" style="margin-top: 20px">장비</p>
              <p class="sub-title">필요하신 장비를 선택해 주세요</p>
              <v-row>
                <v-col
                  class="check-box v-col-6"
                  xs="6"
                  sm="6"
                  md="6"
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
                  <div
                    class="equipment-option-box"
                    v-for="(item, index) in Selected[index]"
                    :key="index"
                  >
                    <span class="equipment-option-title">
                      {{ item }}
                    </span>
                    <div class="equipment-option-calc">
                      <span class="option-price" style="">
                        {{ this.itemPrice(item).toLocaleString() }}원 *
                        {{ this.timeHour }} 시간
                      </span>
                      <span
                        class="mdi mdi-minus-circle-outline minus-btn"
                        @click="minusBtnEquipment(EquipmentCountIdx(item))"
                      ></span>

                      <div class="option-count">
                        {{
                          this.SelectedEquipmentCount.equipmentCount[
                            EquipmentCountIdx(item)
                          ]
                        }}
                      </div>

                      <span
                        class="mdi mdi-plus-circle-outline plus-btn"
                        @click="plusBtnEquipment(EquipmentCountIdx(item))"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 인원 테이블 -->
            <p class="num-title">총인원</p>
            <p class="sub-title">
              인원 초과시 인당
              {{ this.rooms[1].numPrice.toLocaleString() }}원 추가 비용 발생
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

            <div class="price-con" v-if="timeHour != 0">
              <hr style="margin-bottom: 20px" />
              <div class="price-box">
                <span class="price-text"
                  >스튜디오 {{ this.timeHour }}시간 x
                  {{ rooms[1].price.toLocaleString() }}원
                </span>
                <span class="price-value">
                  {{ this.roomPrice.toLocaleString() }}원
                </span>
              </div>
              <div class="price-box">
                <span class="price-text">
                  인원수
                  {{ this.num }}인 x {{ rooms[1].numPrice.toLocaleString() }}원
                  ( 최소 {{ rooms[1].numMin }}인 ~ 최대 {{ rooms[1].numMax }}인)
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
              :roomTitle="rooms[1].title"
              :roomNum="rooms[1].studioNum"
              :selectedEquipmentCount="SelectedEquipmentCount.equipmentCount"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="btn-box">
      <div class="btn">
        <router-link :to="{ path: '/ask', query: { category: '스튜디오' } }">
          <span class="btn-text">목록으로</span>
        </router-link>
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
      SelectedEquipmentCount: {
        maxEquipmentCount: [],
        equipmentCount: [],
        equipmentRemainCount: [],
      },
      camera: [],
      num: 0,
      equipmentPrice: 0,
      numPrice: 0,
      totalPrice: 0,
      roomPrice: 0,
      blockTimeList: [],
      checkAccount: false,
      disableEquipmentName: [],
      disableEquipmentNum: [],
    };
  },
  mounted() {
    this.setEquipmentValue();
    this.setSelectEquipmentValue();
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
      this.resetSelectEquipment();
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
      // console.log(this.date);
      this.disableEquipmentNum = [];
      this.cancelSelectedTime();
      this.resetEquipmentPrice();
      this.resetEquipmentData();
      this.resetSelectEquipment();
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
    resetSelectEquipment() {
      this.SelectedEquipmentCount.equipmentCount = [];
      this.SelectedEquipmentCount.maxEquipmentCount = [];
      this.SelectedEquipmentCount.equipmentRemainCount = [];
      this.setSelectEquipmentValue();
    },
    setSelectEquipmentValue() {
      for (var i = 0; i < 24; i++) {
        this.SelectedEquipmentCount.equipmentCount.push(1);
        this.SelectedEquipmentCount.maxEquipmentCount.push(0);
        this.SelectedEquipmentCount.equipmentRemainCount.push(0);
      }
    },

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
    itemPrice(item) {
      var lowerType = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      for (var k = 0; k < lowerType.length; k++) {
        for (var i = 0; i < this.equipments[lowerType[k]].length; i++) {
          if (item === this.equipments[lowerType[k]][i].name) {
            return this.equipments[lowerType[k]][i].price;
          }
        }
      }
    },
    plusBtnEquipment(equipmentCountIdx) {
      var SelectedCount =
        this.SelectedEquipmentCount.equipmentCount[equipmentCountIdx];
      var MaxCount =
        this.SelectedEquipmentCount.maxEquipmentCount[equipmentCountIdx];
      if (SelectedCount < MaxCount) {
        SelectedCount += 1;
        this.equipmentDiscountCalc(
          equipmentCountIdx + 1,
          this.timeHour,
          "plus"
        );
      } else if (SelectedCount >= MaxCount) {
        SelectedCount = MaxCount;
      }
      if (
        this.SelectedEquipmentCount.equipmentRemainCount[equipmentCountIdx] !=
          0 &&
        SelectedCount >=
          this.SelectedEquipmentCount.equipmentRemainCount[equipmentCountIdx]
      ) {
        SelectedCount =
          this.SelectedEquipmentCount.equipmentRemainCount[equipmentCountIdx];
      }
      this.SelectedEquipmentCount.equipmentCount[equipmentCountIdx] =
        SelectedCount;

      this.PriceCalc();
    },
    minusBtnEquipment(equipmentCountIdx) {
      var SelectedCount =
        this.SelectedEquipmentCount.equipmentCount[equipmentCountIdx];
      if (SelectedCount > 1) {
        SelectedCount -= 1;
        this.equipmentDiscountCalc(
          equipmentCountIdx + 1,
          this.timeHour,
          "minus"
        );
      } else {
        SelectedCount = 1;
      }
      // if (SelectedCount <= 1) {
      //   SelectedCount = 1;
      // }
      this.SelectedEquipmentCount.equipmentCount[equipmentCountIdx] =
        SelectedCount;
      this.PriceCalc();
    },
    equipmentDiscountCalc(equipmentNum, time, state) {
      const equipmentNumRange = {
        camera: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        monitor: [12],
        MicAudio: [16, 17, 18, 19, 20],
        LightSubFilm: [21, 22, 23, 24],
      };

      let matchedKey = Object.keys(equipmentNumRange).find((key) =>
        equipmentNumRange[key].includes(equipmentNum)
      );

      var equipmentList = this.equipments[matchedKey];

      if (!equipmentList) {
        return;
      }

      for (var k = 0; k < equipmentList.length; k++) {
        if (equipmentList[k].equipmentNum === equipmentNum) {
          // console.log(equipmentNum);
          // console.log(this.SelectedEquipmentCount.equipmentCount);
          const priceHour3 = equipmentList[k].PriceToHour3;
          const priceHour6 = equipmentList[k].PriceToHour6;
          const priceHour12 = equipmentList[k].PriceToHour12;
          var price = equipmentList[k].price;
          if (state === "plus") {
            if (time >= 3 && time < 6) {
              this.equipmentPrice += priceHour3 + price * (this.timeHour - 3);
            } else if (time >= 6 && time < 12) {
              this.equipmentPrice += priceHour6 + price * (this.timeHour - 6);
            } else if (time >= 12) {
              this.equipmentPrice += priceHour12 + price * (this.timeHour - 12);
            }
            console.log("PlusPrice: " + this.equipmentPrice);
          }
          if (state === "minus") {
            if (time >= 3 && time < 6) {
              this.equipmentPrice -= priceHour3 + price * (this.timeHour - 3);
            } else if (time >= 6 && time < 12) {
              this.equipmentPrice -= priceHour6 + price * (this.timeHour - 6);
            } else if (time >= 12) {
              this.equipmentPrice -= priceHour12 + price * (this.timeHour - 12);
            }
            console.log("minusPrice: " + this.equipmentPrice);
          }
        }
      }
    },

    EquipmentCountIdx(item) {
      var lowerType = ["camera", "monitor", "MicAudio", "LightSubFilm"];
      var equipmentCountIdx;
      var maxEquipmentCount;
      for (var k = 0; k < lowerType.length; k++) {
        for (var i = 0; i < this.equipments[lowerType[k]].length; i++) {
          if (item === this.equipments[lowerType[k]][i].name) {
            maxEquipmentCount = this.equipments[lowerType[k]][i].count;
            equipmentCountIdx =
              this.equipments[lowerType[k]][i].equipmentNum - 1;
            this.SelectedEquipmentCount.maxEquipmentCount[equipmentCountIdx] =
              maxEquipmentCount;
            console.log(
              "equipmentCount : " + this.SelectedEquipmentCount.equipmentCount
            );
            return equipmentCountIdx;
          }
        }
      }
    },
    // 체크 해제시 초기화
    isEquipmentSelected(type, bool) {
      bool = !bool;
      const equipmentNumRange = {
        camera: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        monitor: [12],
        micAudio: [16, 17, 18, 19, 20],
        lightSubFilm: [21, 22, 23, 24],
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
          console.log(this.SelectedEquipmentCount);
          // console.log("selected:" + this.Selected.equipmentNum);
          // console.log(this.equipments[type]);
          for (var i = 0; i < this.equipments[type].length; i++) {
            for (var k = 0; k < this.Selected.equipmentNum.length; k++) {
              if (
                this.equipments[type][i].equipmentNum ===
                this.Selected.equipmentNum[k]
              ) {
                if (this.timeHour >= 3 && this.timeHour < 6) {
                  this.equipmentPrice -=
                    this.equipments[type][i].PriceToHour3 +
                    this.equipments[type][i].price * (this.timeHour - 3);
                } else if (this.timeHour >= 6 && this.timeHour < 12) {
                  this.equipmentPrice -=
                    this.equipments[type][i].PriceToHour6 +
                    this.equipments[type][i].price * (this.timeHour - 6);
                } else if (this.timeHour >= 12) {
                  this.equipmentPrice -=
                    this.equipments[type][i].PriceToHour12 +
                    this.equipments[type][i].price * (this.timeHour - 12);
                }

                // 장비의 개수가 2개 이상이었을시 type 체크를 해제했을때 그 장비의 개수 만큼 더 가격을 더 빼준다
                if (
                  this.SelectedEquipmentCount.equipmentCount[
                    this.Selected.equipmentNum[k] - 1
                  ] > 1
                ) {
                  // console.log("장비의 개수 두개 이상");
                  for (
                    var j = 1;
                    j <
                    this.SelectedEquipmentCount.equipmentCount[
                      this.Selected.equipmentNum[k] - 1
                    ];
                    j++
                  ) {
                    // console.log("장비의 개수 만큼 반복");
                    if (this.timeHour >= 3 && this.timeHour < 6) {
                      this.equipmentPrice -=
                        this.equipments[type][i].PriceToHour3 +
                        this.equipments[type][i].price * (this.timeHour - 3);
                    } else if (this.timeHour >= 6 && this.timeHour < 12) {
                      this.equipmentPrice -=
                        this.equipments[type][i].PriceToHour6 +
                        this.equipments[type][i].price * (this.timeHour - 6);
                    } else if (this.timeHour >= 12) {
                      this.equipmentPrice -=
                        this.equipments[type][i].PriceToHour12 +
                        this.equipments[type][i].price * (this.timeHour - 12);
                    }
                  }
                  this.SelectedEquipmentCount.equipmentCount[
                    this.Selected.equipmentNum[k] - 1
                  ] = 1;
                }
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
      if (this.num >= this.rooms[1].numMax) {
        this.num = this.rooms[1].numMax;
      }

      this.PriceCalc();
    },

    PriceCalc() {
      this.numPrice =
        this.rooms[1].numPrice * (this.num - this.rooms[1].numMin);
      if (this.num <= this.rooms[1].numMin) {
        this.numPrice = 0;
      }

      if (this.equipmentPrice <= 0) {
        this.equipmentPrice = 0;
      }

      this.rooomCalc();

      this.totalPrice = this.roomPrice + this.equipmentPrice + this.numPrice;
    },
    rooomCalc() {
      const priceHour3 = this.rooms[1].PriceToHour3;
      const priceHour6 = this.rooms[1].PriceToHour6;
      const priceHour12 = this.rooms[1].PriceToHour12;
      var price = this.rooms[1].price;
      if (this.timeHour >= 3 && this.timeHour < 6) {
        this.roomPrice = priceHour3 + price * (this.timeHour - 3);
      } else if (this.timeHour >= 6 && this.timeHour < 12) {
        this.roomPrice = priceHour6 + price * (this.timeHour - 6);
      } else if (this.timeHour >= 12) {
        this.roomPrice = priceHour12 + price * (this.timeHour - 12);
      }
    },

    equipmentCalc(removedSelected) {
      const equipmentNumRange = {
        camera: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15],
        monitor: [12],
        micAudio: [16, 17, 18, 19, 20],
        lightSubFilm: [21, 22, 23, 24],
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

      // console.log("삭제된 항목 : " + removedSelected);
      // console.log(equipmentType);
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
            // var price = this.equipments[equipmentType][k].price;
            // this.equipmentPrice += price * this.timeHour;
            this.equipmentDiscountCalc(currentNum, this.timeHour, "plus");
            this.PriceCalc();
            console.log("장비 " + this.equipments[equipmentType][k].price);
          } else if (removedSelected) {
            // 항목 취소하였을때 총 금액에서 취소한 항목 금액 감액
            if (
              // for문 돌려 취소한 항목의 금액 가져오기
              this.equipments[equipmentType][k].equipmentNum === removedSelected
            ) {
              // this.equipmentPrice -=
              //   this.equipments[equipmentType][k].price * this.timeHour;
              this.equipmentDiscountCalc(
                removedSelected,
                this.timeHour,
                "minus"
              );
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
              // this.equipmentPrice -=
              //   this.equipments[equipmentType][k].price * this.timeHour;
              this.equipmentDiscountCalc(
                removedSelected,
                this.timeHour,
                "minus"
              );
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
          this.rooms[1].studioNum +
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

      // SelectedEquipmentCount: {
      //         maxEquipmentCount: [],
      //         equipmentCount: [],
      //         equipmentRemainCount: [],
      //       },

      for (var i = 0; i < response.length; i++) {
        const EquipmentNum = response[i].equipmentNum;
        const EquipmentState = response[i].equipmentState;
        this.SelectedEquipmentCount.equipmentRemainCount[EquipmentNum - 1] =
          response[i].remainCount;

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
.selected-time {
  background-color: #3399ff;
  color: white;
}

.block-time {
  background-color: #888888;
  color: white;
}

.news_section {
  .title-con {
    .title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    justify-items: center;

    .img-con {
      .img {
        width: 100%;
        border-radius: 10px;
      }

      font-family: "Pretendard-Regular";

      .img-info {
        .img-title {
          font-weight: bold;
        }
      }

      .descript {
        .intro {
          font-weight: bold;
          margin: 7px 0px;
        }
      }
    }

    .info-con {
      .info {
        width: 100%;
        border: solid 1px #bebebe;
        border-radius: 10px;

        .title-info {
          font-family: "Pretendard-Regular";
          font-weight: bold;
          display: flex;
          justify-content: space-between;
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

          .time-box {
            border: solid 1px rgb(204, 204, 204);
            border-radius: 10px;
            text-align: left;
          }

          .num-title {
            margin-top: 40px;
          }

          .title {
          }

          .sub-title {
          }
        }
      }
    }

    .price-con {
      .price-box {
        display: flex;
        justify-content: space-between;
      }
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
}

//PC XL
@media screen and (min-width: 1300px) {
  .news_section {
    .title-con {
      width: 1300px;
      margin: 30px auto;

      .title {
        font-size: 32px;
      }
    }

    .container {
      width: 1300px;
      margin: 0px auto 100px auto;

      .img-con {
        width: calc(60% - 32px);

        .img-info {
          .img-title {
            font-size: 20px;
            padding: 12px;
          }
        }

        .descript {
          padding: 12px;
          font-size: 16px;

          .intro {
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

          .title-info {
            font-size: 18px;
            margin: 16px 0px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
              }
            }

            .time-btn {
              margin: 6px;
              width: calc(18% - 6px);
            }

            ::v-deep .v-input__control {
              height: auto;
            }

            ::v-deep .v-field__input {
              padding-top: auto;
            }

            ::v-deep .v-input__details {
              display: none;
            }

            .title {
              font-size: 16px;
              margin-top: 20px;
            }

            .sub-title {
              font-size: 12px;
              margin: 10px 0px;
            }
            .equipment-option-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 4px 0px;
              padding: 0px 12px;
              color: #555555;
              .equipment-option-title {
                width: 50%;
              }
              .equipment-option-calc {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .option-price {
                  width: 60%;
                  margin-right: 12px;
                  text-align: right;
                }
                .option-count {
                  width: 20%;
                  text-align: center;
                  font-size: 16px;
                }
                .plus-btn,
                .minus-btn {
                  width: 10%;
                  font-size: 30px;
                  color: rgb(90, 90, 90);
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}

// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news_section {
    .title-con {
      width: 1080px;
      margin: 30px auto;

      .title {
        font-size: 32px;
      }
    }

    .container {
      width: 1080px;
      margin: 0px auto 100px auto;

      .img-con {
        width: calc(60% - 32px);

        .img-info {
          .img-title {
            font-size: 20px;
            padding: 12px;
          }
        }

        .descript {
          padding: 12px;
          font-size: 16px;

          .intro {
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

          .title-info {
            font-size: 18px;
            margin: 16px 0px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
              }
            }

            ::v-deep .v-input__control {
              height: auto;
            }

            ::v-deep .v-field__input {
              padding-top: auto;
            }

            ::v-deep .v-input__details {
              display: none;
            }

            .time-btn {
              margin: 6px;
              width: calc(23% - 6px);
            }

            .check-box {
              margin-bottom: 40px;
              height: 25px;
            }
            .equipment-option-box {
              display: grid;
              align-items: center;
              margin: 4px 0px;
              padding: 0px 12px;
              color: #555555;
              .equipment-option-title {
                width: 50%;
              }
              .equipment-option-calc {
                display: flex;
                justify-content: right;
                align-items: center;
                .option-price {
                  width: 100%;
                  margin-right: 12px;
                  text-align: right;
                }
                .option-count {
                  width: 15%;
                  text-align: center;
                  font-size: 16px;
                }
                .plus-btn,
                .minus-btn {
                  width: 5%;
                  font-size: 30px;
                  color: rgb(90, 90, 90);
                  cursor: pointer;
                }
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
}
@media screen and (min-width: 1280px) and (max-width: 1290px) {
  .news_section {
    .title-con {
      width: 750px !important;
      margin: 30px auto;

      .title {
        font-size: 32px;
      }
    }

    .container {
      width: 750px !important;
      margin: 0px auto 100px auto;
      display: grid !important;

      .img-con {
        width: calc(100% - 12px) !important;
        .img-info {
          .img-title {
            font-size: 20px;
            padding: 10px;
          }
        }

        .descript {
          padding: 10px;
          font-size: 16px;
          margin-bottom: 12px;

          .intro {
            font-size: 20px;
          }
        }
      }

      .info-con {
        width: calc(100% - 12px) !important;

        .info {
          position: sticky;
          width: 100%;
          padding: 12px;

          .title-info {
            font-size: 18px;
            margin: 12px 0px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
              }
            }

            ::v-deep .v-input__control {
              height: auto;
            }

            ::v-deep .v-field__input {
              padding-top: auto;
            }

            ::v-deep .v-input__details {
              display: none;
            }

            .time-btn {
              margin: 8px;
              width: calc(19% - 16px);
            }

            .check-box {
              margin-bottom: 40px;
              height: 25px;
            }
            .equipment-option-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 4px 0px;
              padding: 0px 12px;
              color: #555555;
              .equipment-option-title {
                width: 50%;
              }
              .equipment-option-calc {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .option-price {
                  width: 60%;
                  margin-right: 12px;
                  text-align: right;
                }
                .option-count {
                  width: 20%;
                  text-align: center;
                  font-size: 16px;
                }
                .plus-btn,
                .minus-btn {
                  width: 10%;
                  font-size: 30px;
                  color: rgb(90, 90, 90);
                  cursor: pointer;
                }
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
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news_section {
    .title-con {
      width: 760px;
      margin: 20px auto;

      .title {
        font-size: 26px;
      }
    }

    .container {
      width: 760px;
      margin: 0px auto 70px auto;

      .img-con {
        width: calc(60% - 32px);

        .img-info {
          .img-title {
            font-size: 18px;
            padding: 8px;
          }
        }

        .descript {
          padding: 8px;
          font-size: 14px;

          .intro {
            font-size: 17px;
          }
        }
      }

      .info-con {
        width: calc(40% - 12px);

        .info {
          position: sticky;
          width: 100%;
          padding: 12px;

          .title-info {
            font-size: 16px;
            margin: 16px 0px;
          }

          .btn {
            height: 32px;
            font-size: 12px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__content {
                font-size: 14px;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
                height: 40px;
                padding: 9px;
                font-size: 12px;
              }
            }

            .time-con {
              .time-box {
                padding: 12px;

                .time-btn {
                  margin: 6px;
                  width: calc(30% - 6px);
                }
              }

              .time-input {
                ::v-deep .v-input__control {
                  height: 40px;
                }

                ::v-deep .v-field__input {
                  padding-top: 0px;
                  font-size: 14px;
                }
              }
            }

            .equipment-con {
              ::v-deep .v-input__details {
                display: none;
              }

              .check-box {
                margin-bottom: 40px;
                height: 25px;

                ::v-deep .v-label {
                  font-size: 14px;
                }

                ::v-deep .v-selection-control {
                  --v-selection-control-size: 25px;
                }
              }
              .equipment-option-box {
                display: grid;
                align-items: center;
                margin: 4px 0px;
                padding: 0px 12px;
                color: #555555;
                .equipment-option-title {
                  width: 100%;
                  font-size: 14px;
                }
                .equipment-option-calc {
                  display: flex;
                  justify-content: right;
                  align-items: center;
                  font-size: 14px;
                  .option-price {
                    width: 100%;
                    margin-right: 12px;
                    text-align: right;
                  }
                  .option-count {
                    width: 12%;
                    text-align: center;
                  }
                  .plus-btn,
                  .minus-btn {
                    width: 15%;
                    font-size: 25px;
                    color: rgb(90, 90, 90);
                    cursor: pointer;
                  }
                }
              }

              .equipment-input {
                ::v-deep .v-field-label {
                  top: 50%;
                  font-size: 14px;
                }

                ::v-deep .v-field__input {
                  min-height: 40px;
                  font-size: 14px;
                }

                ::v-deep .v-input__details {
                  display: none;
                }
              }
            }

            .people-num {
              ::v-deep .v-label.v-field-label {
                top: 40%;
              }

              ::v-deep .v-input__control {
                height: 40px;
                font-size: 12px;
              }

              ::v-deep .v-field__input {
                padding-top: 0px;
                font-size: 14px;
              }

              ::v-deep .v-input__details {
                display: none;
              }
            }

            .price-box {
              font-size: 14px;

              .price-text {
                width: 75%;
              }

              .total-text,
              .tolal-value {
                font-size: 16px !important;
              }
            }

            .title {
              font-size: 14px;
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
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news_section {
    .title-con {
      width: 640px;
      margin: 30px auto;

      .title {
        font-size: 32px;
      }
    }

    .container {
      width: 640px;
      margin: 0px auto 100px auto;
      display: grid !important;

      .img-con {
        width: calc(100% - 12px);
        .img-info {
          .img-title {
            font-size: 20px;
            padding: 10px;
          }
        }

        .descript {
          padding: 10px;
          font-size: 16px;
          margin-bottom: 12px;

          .intro {
            font-size: 20px;
          }
        }
      }

      .info-con {
        width: calc(100% - 12px);

        .info {
          position: sticky;
          width: 100%;
          padding: 12px;

          .title-info {
            font-size: 18px;
            margin: 12px 0px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
              }
            }

            ::v-deep .v-input__control {
              height: auto;
            }

            ::v-deep .v-field__input {
              padding-top: auto;
            }

            ::v-deep .v-input__details {
              display: none;
            }

            .time-btn {
              margin: 8px;
              width: calc(19% - 16px);
            }

            .check-box {
              margin-bottom: 40px;
              height: 25px;
            }
            .equipment-option-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 4px 0px;
              padding: 0px 12px;
              color: #555555;
              .equipment-option-title {
                width: 50%;
              }
              .equipment-option-calc {
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .option-price {
                  width: 60%;
                  margin-right: 12px;
                  text-align: right;
                }
                .option-count {
                  width: 20%;
                  text-align: center;
                  font-size: 16px;
                }
                .plus-btn,
                .minus-btn {
                  width: 10%;
                  font-size: 30px;
                  color: rgb(90, 90, 90);
                  cursor: pointer;
                }
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
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news_section {
    .title-con {
      width: calc(100% - 12px);
      margin: 30px auto;

      .title {
        font-size: 32px;
      }
    }

    .container {
      width: calc(100% - 12px);
      margin: 0px auto 100px auto;
      display: grid !important;

      .img-con {
        width: calc(100% - 12px);

        .img-info {
          .img-title {
            font-size: 20px;
            padding: 12px;
          }
        }

        .descript {
          padding: 12px;
          font-size: 16px;
          margin-bottom: 12px;

          .intro {
            font-size: 20px;
          }
        }
      }

      .info-con {
        width: calc(100% - 12px);

        .info {
          position: sticky;
          width: 100%;
          padding: 12px;

          .title-info {
            font-size: 18px;
            margin: 12px 0px;
          }

          .schedule-con {
            .date-picker {
              ::v-deep .vuejs3-datepicker {
                width: 100% !important;
              }

              ::v-deep .vuejs3-datepicker__value {
                width: 100% !important;
              }
            }

            ::v-deep .v-input__control {
              height: auto;
            }

            ::v-deep .v-field__input {
              padding-top: auto;
            }

            ::v-deep .v-input__details {
              display: none;
            }

            .time-btn {
              margin: 8px;
              width: calc(19% - 16px);
            }

            .check-box {
              margin-bottom: 40px;
              height: 25px;
            }
            .equipment-option-box {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 4px 0px;
              padding: 0px 12px;
              color: #555555;
              .equipment-option-title {
                width: 50%;
                font-size: 14px;
              }
              .equipment-option-calc {
                font-size: 14px;
                width: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                .option-price {
                  width: 60%;
                  margin-right: 12px;
                  text-align: right;
                }
                .option-count {
                  width: 12%;
                  text-align: center;
                }
                .plus-btn,
                .minus-btn {
                  width: 12%;
                  font-size: 25px;
                  color: rgb(90, 90, 90);
                  cursor: pointer;
                }
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
}
</style>