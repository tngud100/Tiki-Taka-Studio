<template>
  <section class="contact_section">
    <SubTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="title_con">
      <div class="title">
        <p>티키앤타카 스튜디오에</p>
        <p>언제든지 연락주세요</p>
      </div>
      <div class="sub_title">
        <!-- <span>Anything you need, feel free to contact me.</span> -->
      </div>
    </div>
    <v-form
      class="form_con"
      ref="form"
      v-model="valid"
      @submit.prevent="submitForm"
    >
      <div class="info_form">
        <v-row>
          <v-container style="margin-bottom: 16px">
            <v-item-group selected-class="my-color">
              <v-row style="justify-content: center">
                <v-col
                  v-for="(item, index) in categoryList"
                  :key="index"
                  cols="3"
                >
                  <v-item v-slot="{ selectedClass, toggle }">
                    <v-btn
                      :class="['d-flex align-center', selectedClass, ' btn']"
                      rounded="xl"
                      :key="index"
                      @click="toggle"
                    >
                      <div class="flex-grow-1 text-center">
                        {{ item.list }}
                      </div>
                    </v-btn>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </v-container>
        </v-row>

        <div class="content" style="margin-bottom: 12px">
          <span>기본정보</span>
        </div>
        <v-row>
          <v-col md="4" sm="6" style="padding-bottom: 3px">
            <v-text-field
              v-model="form.name"
              label="이름"
              placeholder="이름을 입력해주세요."
              hint="ex) 홍길동"
              variant="outlined"
              :rules="[(v) => !!v || '이름을 입력해주세요.']"
              required
            ></v-text-field>
          </v-col>
          <v-col md="3" sm="4" class="sex_check" style="padding-bottom: 3px">
            <v-btn-toggle
              v-model="form.sex"
              :value="form.sex"
              variant="outlined"
              required
              :rules="[(v) => !!v || '성별을 선택해 주세요']"
              divided
              width="100%"
            >
              <v-btn value="left" width="50%">남자</v-btn>
              <v-btn value="center" width="50%">여자</v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col md="4" sm="12" cols="12" style="padding-bottom: 3px">
            <v-text-field
              v-model="form.born"
              label="생년월일"
              placeholder="yymmdd"
              hint="ex) 991223"
              variant="outlined"
              :rules="[
                (v) => !!v || '생년월일를 입력해주세요.',
                (v) => (v && v.length > 5) || '생년월일을 확인해주세요.',
              ]"
              @input="form.born = form.born.replace(/[^0-9]/g, '').slice(0, 6)"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="7" ms="7" cols="12" style="padding-top: 3px">
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
          <v-col md="5" ms="5" cols="12" style="padding-top: 3px">
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
      </div>
      <div>
        <div class="input_form">
          <v-checkbox
            v-model="form.rule_check"
            label="개인정보 수집 및 이용약관에 동의합니다.(필수)"
          ></v-checkbox>
          <v-btn
            class="d-flex my-color"
            type="submit"
            style="margin: auto; width: 240px; height: 60px"
            value="Submit"
            >문의하기</v-btn
          >
        </div>
      </div>
    </v-form>
  </section>
</template>

<script>
import SubTitle from "@/components/Header/SubTitle.vue";
import { gapi } from "gapi-client";

// import { gapi } from "vue-google-api";

export default {
  components: {
    SubTitle,
  },
  data() {
    return {
      title: "Contact Us",
      subTitle: "Contact",
      bgImage: [
        require("@/assets/banner/contact1920.svg"),
        require("@/assets/banner/contact1300.svg"),
        require("@/assets/banner/contact760.svg"),
      ],
      form: {
        sex: "",
        name: "",
        born: "",
        email: "",
        phone: "",
        rule_check: false,
        images: [],
        imagePreviews: [],
      },
      categoryList: [
        {
          list: "제작지원",
        },
        {
          list: "협찬문의",
        },
        {
          list: "영상제작문의",
        },
        {
          list: "기타",
        },
      ],
      valid: false,
      mockdata: [],
    };
  },
  mounted() {
    gapi.load("client", {
      callback: () => {
        gapi.load("auth2", {
          callback: () => {
            gapi.client
              .init({
                // Add your API configuration options here
              })
              .then(() => {
                console.log("Google API client initialized.");
              })
              .catch((error) => {
                console.error("Error initializing Google API client:", error);
              });
          },
          error: () => {
            console.error("Failed to load Google auth2.");
          },
        });
      },
      onerror: () => {
        console.error("Failed to load Google client.");
      },
    });
  },
  methods: {
    async submitForm() {
      await gapi.load("client");

      const requestData = {
        name: this.form.name,
        born: this.form.born,
        email: this.form.email,
        phone: this.form.phone,
      };

      gapi.client
        .request({
          path: "https://script.google.com/macros/s/AKfycbzVTRFcy8DeCbnQOppgDxjWoyZFOzpVHrenIz29bpSNbDyMuWEZq9EH9uofQww7-4J6/exec",
          method: "POST",
          body: requestData,
        })
        .then(() => {
          console.log("Form submitted");
          alert("Submission completed");
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },

    resetForm() {
      this.form = {
        sex: "",
        name: "",
        born: "",
        email: "",
        phone: "",
        rule_check: false,
        images: [],
        imagePreviews: [],
      };
    },
  },
};
</script>

<style>
.v-selection-control__input:hover::before {
  opacity: 0.2;
}
</style>
<style lang="scss" scoped>
.my-color {
  background-color: #0174f5;
  color: white;
}
.content {
  color: rgb(0, 0, 0);
  font-family: "Pretendard-Regular";
  font-weight: bold;
  line-height: 45px;
  margin-top: 20px;
}
.contact_section {
  .title_con {
    padding: 5% 12px 2% 12px;
    display: grid;
    justify-content: left;
    align-items: center;
    .title {
      color: rgb(0, 0, 0);
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .sub_title {
      color: rgb(94, 94, 94);
      font-family: "Pretendard-Regular";
      font-weight: bold;
      line-height: 45px;
    }
  }
  .contact_con {
    display: grid;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }

  .form_con {
    margin: 0% auto;
    // border: solid 1px rgb(65, 65, 65);
    padding: 24px;
    margin-bottom: 50px;

    .form_head {
      margin: 4px;
      font-weight: bold;
      font-family: "Pretendard-Regular";

      .selected {
        display: grid;
        width: 100%;
      }
    }
  }
  .btn {
    border-radius: 100px;
    letter-spacing: -1px;
    box-shadow: none;
    border: solid #cfcfcf 1px;
    font-family: "Pretendard-Regular";
    width: 100px;
    height: 50px;
    // justify-content: center;
    // align-items: center;
    // display: flex;
  }
  // .btn:active {
  //   background-color: #3180f1;
  //   color: white;
  // }
  // .btn:visited {
  //   background-color: #3180f1;
  //   color: white;
  // }

  .info_form {
    display: grid;
    .form_title {
      text-align: center;
    }
  }
  .input_form {
    margin-bottom: 100px;
  }
}

// PC XL
@media screen and (min-width: 1300px) {
  .contact_section {
    margin-top: 80px;
  }
  .title_con {
    width: 1300px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 46px;
    line-height: 60px;
  }

  .sub_title,
  .content {
    font-size: 20px;
    line-height: 45px;
  }
  .form_con {
    width: 800px;
    .form_title {
      font-size: 32px;
    }
  }

  .form_head {
    font-size: 20px;
    .selected {
      line-height: 65px;
    }
  }
  .card {
    width: 50%;
  }
  .btn {
    font-size: 16px;
    width: 100px;
    height: 50px;
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .contact_section {
    margin-top: 70px;
  }
  .title_con {
    width: 1080px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 46px;
    line-height: 60px;
  }
  .sub_title.content {
    font-size: 20px;
    line-height: 45px;
  }
  .form_con {
    width: 800px;
    .form_title {
      font-size: 30px;
    }
  }
  .form_head {
    font-size: 20px;
    .selected {
      line-height: 65px;
    }
  }
  .card {
    width: 50%;
  }
  .btn {
    font-size: 16px;
    width: 100px;
    height: 50px;
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .contact_section {
    margin-top: 60px;
  }
  .title_con {
    width: 760px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 36px;
    line-height: 45px;
  }
  .sub_title.content {
    font-size: 16px;
    line-height: 30px;
  }
  .form_con {
    width: 760px;
    .form_title {
      font-size: 26px;
    }
  }
  .form_head {
    font-size: 16px;
    .selected {
      line-height: 65px;
    }
  }
  .card {
    width: 75%;
  }
  .btn {
    font-size: 14px;
  }
}

// 테블릿
@media screen and (min-width: 600px) and (max-width: 759px) {
  .contact_section {
    margin-top: 55px;
  }
  .title_con {
    width: 640px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 28px;
    line-height: 35px;
  }
  .sub_title.content {
    font-size: 16px;
    line-height: 25px;
  }
  .form_con {
    width: 640px;
    .form_title {
      font-size: 24px;
    }
  }
  .form_head {
    font-size: 14px;
    .selected {
      line-height: 65px;
    }
  }

  .card {
    width: 75%;
  }
  .btn {
    font-size: 12px;
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 600px) {
  .contact_section {
    margin-top: 50px;
  }
  .title_con {
    width: 320px;
    padding: 5% 12px 2% 12px;
    margin: 0px auto;
  }
  .title {
    font-size: 21px;
    line-height: 26px;
  }
  .sub_title.content {
    font-size: 14px;
    line-height: 25px;
  }
  .form_con {
    width: 320px;
    .form_title {
      font-size: 22px;
    }
  }
  .form_head {
    font-size: 14px;
    .selected {
      line-height: 65px;
    }
  }
  .type {
    margin-bottom: 75px;
  }
  .card {
    width: 75%;
  }
  .btn {
    font-size: 12px;
  }
  .v-col-3 {
    max-width: 45%;
  }
}
</style>
