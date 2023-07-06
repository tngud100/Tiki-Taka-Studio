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
        <span>필요한 모든 것, 전부 티앤티스튜디오에서</span>
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
        <div class="content"><span>내용</span></div>
        <v-form class="input_form">
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="underlined"
                v-model="form.title"
                label="제목"
                hint="문의하실 제목을 입력해주세요"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="form.content"
                variant="outlined"
                label="문의 내용"
                placeholder="문의사항에 대한 자세한 내용을 적어주세요"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-file-input
                variant="underlined"
                v-model="form.images"
                :multiple="true"
                label="이미지를 넣어주세요(중복 업로드 가능)"
                accept="image/*"
                @change="preview"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              variant="underlined"
              v-for="(image, index) in form.imagePreviews"
              :key="index"
              cols="4"
            >
              <v-img :src="image" width="100%"></v-img>
            </v-col>
          </v-row>
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
        </v-form>
      </div>
    </v-form>
  </section>
</template>
<script>
import SubTitle from "@/components/Header/SubTitle.vue";
import { gapi } from "vue-google-api";

export default {
  components: {
    SubTitle,
  },
  data: () => ({
    title: "문의하기",
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
      title: "",
      content: "",
      rule_check: "",
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
  }),
  methods: {
    preview() {
      console.log(this.form.images);
      this.form.imagePreviews = [];
      for (let i = 0; i < this.form.images.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(this.form.images[i]);
        reader.onloadend = () => {
          this.form.imagePreviews.push(reader.result);
        };
      }
      console.log(this.imagePreviews);
    },
    toggle() {
      this.selectedClass = ".my-color";
    },
    // submitForm() {
    //   if (!this.valid) {
    //     if (!this.form.rule_check) {
    //       alert("개인정보 수집 및 이용 동의를 체크해주세요.");
    //     }

    //     alert("입력 양식을 확인하여 주세요.");
    //     this.showErrors = this.$refs.form.errors;

    //     return false;
    //   }

    //   const data = {};
    //   for (const prop in this.form) {
    //     data[prop] = this.form[prop];
    //   }
    //   this.mockdata.push(data);
    //   console.log(this.mockdata);
    // location.reload();

    // this.resetForm();
    // },
    resetForm() {
      // form 데이터를 초기화합니다.
      this.form = [
        {
          name: "",
          sex: "",
          born: "",
          email: "",
          phone: "",
          title: "",
          content: "",
          rule_check: false,
        },
      ];
    },
    checkGapiLoaded() {
      if (typeof gapi !== "undefined") {
        // gapi object is defined, the library is loaded
        // You can perform further operations with gapi here
        console.log("Google APIs client library is loaded.");
      } else {
        // gapi object is not defined, the library is not loaded
        console.log("Google APIs client library is not loaded.");
      }
    },
    async submitForm() {
      await gapi.load("client");
      console.log("hi");
      // Send the form data to your Google Script
      gapi.client.load(
        "https://script.google.com/macros/s/AKfycbxYkaKqv5-bouTDkkvMt8XhJxg6kR_WEnOM-fBv-jv5N01D3NHcOrAKPjYaOZ8td7ZUcQ/exec",
        "v1",
        () => {
          gapi.client.sendEmail
            .sendEmail({
              title: this.form.title,
              name: this.form.name,
              email: this.form.born,
              message: this.form.phone,
            })
            .then(() => {
              console.log("submit");
              // location.reload();
              alert("제출이 완료되었습니다.");
              // this.resetForm();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      );
    },
    mounted() {
      gapi.load("client", this.checkGapiLoaded);
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
