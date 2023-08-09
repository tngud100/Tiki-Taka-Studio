<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
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
        >
          지금 예약하기
        </v-btn>
      </template>
      <v-card class="mx-auto" max-width="600">
        <v-card-title class="d-flex font-weight-bold justify-center">
          <span>{{ currentTitle }}</span>
        </v-card-title>

        <v-divider></v-divider>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text style="width: 500px">
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

          <v-window-item :value="2">
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
                <hr />
                <p class="title">예약 정보</p>
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
                <hr />
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

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img class="mb-4" contain height="75" :src="img"></v-img>
              <h3 class="text-h7 font-weight-bold mb-2">국민은행</h3>
              <h3 class="text-h7 font-weight-bold mb-2">1560-511545-4849</h3>
              <p class="text-caption">
                입금이 확인될시에 기입하신 이메일로 확인 메일이 전송 됩니다
              </p>
              <span class="text-caption text-grey">무통장 입금</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn v-if="step > 1" variant="text" @click="step--"> 이전 </v-btn>
          <v-spacer></v-spacer>
          <v-btn
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
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
    };
  },
  props: {
    date: String,
    timeString: String,
    num: Number,
    totalPrice: Number,
  },
  computed: {
    ...mapGetters(["room1"]),
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
        space: ["대여 공간 이름", this.room1.title],
        reserveDate: ["대여 날짜", this.date],
        reserveTime: ["대여 시간", this.timeString],
        num: ["사용 인원 수", this.num + "명"],
        totalPrice: ["총 금액", this.totalPrice.toLocaleString() + "원"],
      };
    },
  },
  methods: {
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
      location.reload();
      this.checkAccount = true;
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
  },
};
</script>
<style lang="scss" scoped>
.reservate-check-form {
  font-size: 16px;
  font-family: "Pretendard-Regular";
  border-radius: 5px;
  padding: 0px 12px;
  width: 400px;
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
</style>