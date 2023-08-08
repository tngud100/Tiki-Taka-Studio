<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> 지금 예약하기 </v-btn>
      </template>
      <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span>{{ currentTitle }}</span>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field
                label="Email"
                placeholder="EXAMPLE@naver.com"
              ></v-text-field>
              <span class="text-caption text-grey-darken-1">
                예약 확인 메일을 받으실 이메일 주소를 입력해 주세요.
              </span>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field label="이름" type="text"></v-text-field>
              <v-text-field label="Phone" type="text"></v-text-field>
              <span class="text-caption text-grey-darken-1">
                예약자의 개인정보를 입력해 주세요
              </span>
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
export default {
  data: () => ({
    step: 1,
    dialog: false,
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "E-mail 입력";
        case 2:
          return "개인정보를 기입";
        default:
          return "예약 확인";
      }
    },
  },
};
</script>
<style scoped>
</style>