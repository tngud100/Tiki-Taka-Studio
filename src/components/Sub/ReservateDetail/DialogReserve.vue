<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ props }">
        <v-btn
          width="auto"
          color="#805BEA"
          block
          size="large"
          style="margin-top: 20px; color: white"
          v-bind="props"
        >
          지금 예약하기
        </v-btn>
      </template>
      <v-card class="mx-auto" width="500" max-width="600">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
        </v-card-title>

        <v-divider></v-divider>

        <v-window v-model="step">
          <v-window-item :value="1">
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
                v-model="form.phone"
              ></v-text-field>
              <v-text-field
                label="예약메일을 받으실 이메일을 입력해주세요."
                placeholder="example@naver.com"
                variant="outlined"
                v-model="form.email"
              ></v-text-field>
              <span class="text-caption text-grey-darken-1"> 예약자 정보 </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <div style="font-size: 18px; font-family: 'Pretendard-Regular'">
                <p v-for="(item, index) in checkInfo" :key="index">
                  <span>{{ item[0] }}</span>
                  <span>{{ item[1] }}</span>
                </p>
              </div>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-img
                class="mb-4"
                contain
                height="128"
                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
              ></v-img>
              <h3 class="text-h6 font-weight-light mb-2">국민은행</h3>
              <h3 class="text-h6 font-weight-light mb-2">1560-511545-4849</h3>
              <p class="text-caption">
                입금이 확인될시에 기입하신 이메일로 확인 메일이 전송이 됩니다
              </p>
              <span class="text-caption text-grey">무통장 입금</span>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn v-if="step > 1" variant="text" @click="step--"> Back </v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
            Next
          </v-btn>

          <v-btn v-if="step >= 3" variant="text" @click="dialog = false">
            Done
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
          return "예약 정보 확인";
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
        num: ["사용 인원 수", this.num],
        totalPrice: ["총 금액", this.totalPrice],
      };
    },
  },
};
</script>
<style scoped>
</style>