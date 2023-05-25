<template>
  <div class="bg"></div>
  <section class="ask-section">
    <!-- <div style="width: 50%; height: 70%"></div> -->
    <div class="contact-con">
      <v-form
        class="py-3 form"
        ref="form"
        v-model="valid"
        @submit.prevent="submitForm"
      >
        <div class="mb-4">
          <span>
            <!-- <v-icon class="mr-2">mdi-email-outline</v-icon> -->
            지원 작성
          </span>
        </div>
        <v-row>
          <v-col cols="5" sm="6" md="4" style="padding-bottom: 3px">
            <v-text-field
              v-model="form.name"
              label="이름"
              placeholder="이름을 입력해주세요."
              hint="ex) 홍길동"
              variant="outlined"
              class="text-field"
              :rules="[(v) => !!v || '이름을 입력해주세요.']"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4" style="padding-bottom: 3px">
            <v-text-field
              v-model="form.born"
              label="생년월일"
              placeholder="yymmdd"
              hint="ex) 991223"
              variant="outlined"
              class="text-field"
              :rules="[
                (v) => !!v || '생년월일를 입력해주세요.',
                (v) => (v && v.length > 5) || '생년월일을 확인해주세요.',
              ]"
              @input="form.born = form.born.replace(/[^0-9]/g, '').slice(0, 6)"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="3" sm="4" md="4" style="padding-bottom: 3px">
            <v-btn-toggle
              v-model="form.sex"
              :value="form.sex"
              variant="outlined"
              required
              :rules="[(v) => !!v || '성별을 선택해 주세요']"
              divided
            >
              <v-btn value="left">남자</v-btn>
              <v-btn value="center">여자</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7" style="padding-top: 3px">
            <v-text-field
              v-model="form.email"
              label="이메일"
              required
              :rules="[
                (v) => !!v || '이메일을 입력해주세요.',
                (v) =>
                  (v && v.length <= 35) || '이메일은 35자 이하여야 합니다.',
                (v) =>
                  /.+@.+\..+/.test(v) || '유효한 이메일 주소를 입력해주세요.',
              ]"
              placeholder="example@example.com"
              hint="ex) example@example.com"
              variant="outlined"
              type="email"
              class="text-field"
            ></v-text-field>
          </v-col>
          <v-col cols="5" style="padding-top: 3px">
            <v-text-field
              v-model="form.phone"
              placeholder="01012345678"
              hint="ex) 01012345678"
              label="연락처"
              variant="outlined"
              required
              :rules="[
                (v) => !!v || '연락처를 입력해주세요.',
                (v) => (v && v.length > 10) || '연락처를 확인해주세요.',
              ]"
              @input="
                form.phone = form.phone.replace(/[^0-9]/g, '').slice(0, 11)
              "
              class="text-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="padding-bottom: 5px">
            <v-text-field
              v-model="form.url"
              placeholder="yotube or twich or aficatv, etc"
              hint="*해당 정보는 본인 채널 여부 및 기타 지표 확인을 위해서 사용되며, 자동 가입 등의 절차로 연결되지 않습니다."
              label="운영 중인 채널 URL"
              variant="outlined"
              required
              :rules="[(v) => !!v || '운영 중인 채널 url을 입력해주세요.']"
              class="text-field"
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-row>
            <v-col cols="6" style="padding-bottom: 3px">
              <v-text-field
                v-model="form.nick"
                placeholder="크리에이터 닉네임"
                hint="ex) 티키타카"
                label="크리에이터 명"
                variant="outlined"
                required
                :rules="[(v) => !!v || '크리에이터 닉네임을 입력해주세요.']"
                class="text-field"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.channel_name"
                placeholder="채널 이름"
                hint="ex) 티키앤타카"
                label="유튜브 채널 명"
                variant="outlined"
                :rules="[(v) => !!v || '채널 명을 입력해주세요.']"
                class="text-field"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-row>
          <div class="mail-content">
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-model="form.title"
                label="제목"
                class="text-field"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.content"
                label="내용"
                variant="outlined"
                class="text-field"
              ></v-textarea>
            </v-col>
          </div>
        </v-row>

        <v-checkbox
          v-model="form.rule_check"
          color="secondary"
          label="개인정보 수집 및 이용 동의 (필수*)"
        ></v-checkbox>

        <v-btn type="submit" class="mx-0 mt-4" color="primary">
          <!-- <v-icon left>mdi-send</v-icon> -->
          Submit
        </v-btn>
      </v-form>
    </div>
    <!-- <v-alert v-if="showMessage" type="success" dismissible class="mt-4">
      지원이 완료되었습니다
    </v-alert> -->
  </section>
</template>

<script>
export default {
  name: "AskPage",
  data() {
    return {
      alignment: 1,
      form: {
        name: "",
        born: "",
        email: "",
        phone: "",
        sex: "",
        url: "",
        nick: "",
        channel_name: "",
        title: "",
        content: "",
        rule_check: false,
      },
      valid: false,
      mockdata: [],
    };
  },
  methods: {
    submitForm() {
      if (!this.valid) {
        if (!this.form.rule_check) {
          alert("개인정보 수집 및 이용 동의를 체크해주세요.");
        }

        alert("입력 양식을 확인하여 주세요.");
        this.showErrors = this.$refs.form.errors;

        return false;
      }

      const data = {};
      for (const prop in this.form) {
        data[prop] = this.form[prop];
      }
      this.mockdata.push(data);
      console.log(this.mockdata);
      // location.reload();

      this.resetForm();
      alert("제출이 완료되었습니다.");
    },
    resetForm() {
      // form 데이터를 초기화합니다.
      this.form = [
        {
          name: "",
          born: "",
          email: "",
          message: "",
          sex: "",
          title: "",
          content: "",
          url: "",
          rule_check: false,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.primary {
  background-color: #3f51b5 !important;
  color: #fff !important;
}
.bg {
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  //   background-image: url("@/assets/Main/sky.jpg");
  //   background-size: cover;
  //   background-attachment: fixed;
}
.container {
  margin: 0;
  height: 100vh;
  width: 80%;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-con {
  background-color: white;
  position: relative;
  width: 50%;
  margin-top: 5%;
  padding: 16px;
  border-radius: 30px;
  .form {
    border-top: 1px solid #8d8181;
    border-bottom: 1px solid #8d8181;
  }
  .mail-content {
    width: 100%;
    height: 100%;
    ::v-deep .v-input__details {
      display: none !important;
    }
  }
}
.my-col-class {
  padding: 8px;
}
</style>
