<template>
  <section class="contact_section">
    <SubTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="title_con">
      <div class="title">
        <p>티키앤타카 스튜디오에게</p>
        <p>궁금한이야기를 전달하세요.</p>
      </div>
      <div class="sub_title">
        <span>필요한 모든 것, 언제든지 연락주세요.</span>
      </div>
    </div>

    <v-row class="toggle">
      <v-container style="margin-bottom: 16px">
        <v-item-group selected-class="my-color">
          <v-row style="justify-content: center">
            <v-col v-for="(item, index) in categoryList" :key="index" cols="3">
              <v-item v-slot="{ selectedClass, toggle }">
                <v-btn
                  :class="['d-flex align-center', selectedClass, ' btn']"
                  rounded="xl"
                  @click="toggleBtn(index, toggle)"
                >
                  <!-- @click="toggle(index)" -->
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
    <Reservate v-if="this.form.category === '스튜디오'" />
    <v-form class="gform" ref="form">
      <div class="info_form">
        <div v-if="this.form.category != '스튜디오'">
          <div class="content" style="margin-bottom: 12px">
            <span>기본정보</span>
          </div>
          <v-row>
            <v-col md="4" sm="6" style="padding-bottom: 3px">
              <v-text-field
                v-model="form.name"
                label="이름"
                name="name"
                placeholder="이름을 입력해주세요."
                hint="ex) 홍길동"
                variant="outlined"
                :rules="[(v) => !!v || '이름을 입력해주세요.']"
                required
              ></v-text-field>
            </v-col>
            <v-col
              md="3"
              sm="4"
              class="business_check"
              style="padding-bottom: 3px"
            >
              <v-btn-toggle
                v-model="form.sex"
                :value="form.sex"
                name="business"
                id="business"
                variant="outlined"
                required
                :rules="[(v) => !!v || '버튼을 선택해 주세요']"
                divided
                width="100%"
              >
                <v-btn value="개인" width="50%">개인</v-btn>
                <v-btn value="법인" width="50%">법인</v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col md="4" sm="12" cols="12" style="padding-bottom: 3px">
              <v-text-field
                v-model="form.born"
                label="생년월일"
                placeholder="yymmdd"
                hint="ex) 991223"
                variant="outlined"
                name="born"
                :rules="[
                  (v) => !!v || '생년월일를 입력해주세요.',
                  (v) => (v && v.length > 5) || '생년월일을 확인해주세요.',
                ]"
                @input="
                  form.born = form.born.replace(/[^0-9]/g, '').slice(0, 6)
                "
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="7" ms="7" cols="12" style="padding-top: 3px">
              <v-text-field
                v-model="form.email"
                name="email"
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
                name="phone"
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
          <div class="content"><span>내용</span></div>
          <div class="input_form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  variant="underlined"
                  v-model="form.title"
                  label="제목"
                  name="title"
                  hint="문의하실 제목을 입력해주세요"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="form.content"
                  name="content"
                  variant="outlined"
                  label="문의 내용"
                  placeholder="문의사항에 대한 자세한 내용을 적어주세요"
                ></v-textarea>
              </v-col>
            </v-row>
            <div>
              <v-file-input
                type="file"
                accept="*"
                :multiple="true"
                label="첨부파일을 업로드 해주세요(10M 이하 파일 권장)"
                @change="handleFileChange"
                name="file"
                variant="underlined"
              />
              <!-- <v-row>
                <v-col cols="12">
                  <v-file-input
                    variant="underlined"
                    :multiple="true"
                    label="파일을 업로드 해주세요(10M 이하 파일)"
                    accept="*"
                    name="file"
                    type="file"
                    @change="handleFileUpload"
                  ></v-file-input>
                </v-col>
              </v-row> -->
              <v-row>
                <v-col cols="12">
                  <v-card
                    v-for="(file, index) in uploadedFiles"
                    :key="index"
                    class="mb-3"
                    style="height: 5vh"
                  >
                    <v-card-title style="font-size: 14px">
                      {{ file.name }}
                      <v-btn
                        style="
                          width: 4%;
                          height: 4%;
                          font-size: 1rem;
                          box-shadow: 0px 0px 0px 0px;
                          color: #616161;
                        "
                        icon
                        small
                        @click="deleteFile(index)"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
              <!-- <v-row style="padding-bottom: 15px">
                <v-col
                  variant="underlined"
                  v-for="(image, index) in form.imagePreviews"
                  :key="index"
                  cols="4"
                >
                  <v-img
                    v-if="image && image.file.type.startsWith('image/')"
                    :src="image.preview"
                    width="100%"
                  ></v-img>
                  <p v-else>{{ image.file.name }}</p>
                </v-col>
              </v-row> -->
            </div>
            <v-checkbox
              v-model="privacyCheck"
              label="개인정보 수집 및 이용약관에 동의합니다.(필수)"
            ></v-checkbox>
            <v-btn
              class="d-flex my-color submitBtn"
              style="margin: auto; width: 240px; height: 60px"
              value="Submit"
              @click="submit"
              >문의하기</v-btn
            >
          </div>
        </div>
      </div>
    </v-form>
    <div v-if="isSpinner" class="loading">
      <img :src="loadingImg" loof="infinite" />
    </div>
  </section>
</template>
<script>
import SubTitle from "@/components/Header/SubTitle.vue";
import Reservate from "@/components/Sub/SubReservate.vue";
// import axios from "axios";
import $ from "jquery";

export default {
  components: {
    SubTitle,
    Reservate,
  },
  data: () => ({
    title: "문의하기",
    subTitle: "Contact",
    bgImage: [
      require("@/assets/banner/contact1920.svg"),
      require("@/assets/banner/contact1300.svg"),
      require("@/assets/banner/contact760.svg"),
    ],
    loadingImg: require("@/assets/loading/loading.svg"),
    form: {
      category: null,
      sex: null,
      name: "",
      born: "",
      email: "",
      phone: "",
      title: "",
      content: "",
      rule_check: "",
      files: [],
      fileName: [],
      fileExtension: [],
      filedata: [],
    },
    // imagePreviews: [],
    uploadedFiles: [],
    categoryList: [
      {
        list: "제작/영상",
      },
      {
        list: "협찬",
      },
      {
        list: "기타",
      },
      {
        list: "스튜디오",
      },
    ],
    valid: false,
    privacyCheck: false,
    submitState: false,
    isSpinner: false,
  }),
  mounted() {
    const btnState = document.querySelector(".submitBtn");
    btnState.addEventListener("click", function (e) {
      e.preventDefault();
    });
    if (this.$route.query.category) {
      this.form.category = this.$route.query.category;
    }
  },
  methods: {
    toggleBtn(index, toggle) {
      toggle(index);
      this.togglebtn(index);
    },
    handleFileChange(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        this.form.files[i] = files[i];
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          const fileData = e.target.result;
          var base64File = fileData.split(",")[1]; // content 추출

          const extensionData64 = fileData.split(",")[0]; // 확장자 추출
          const fileExtension = extensionData64
            .split(":")[1]
            .replace(";base64", "");

          const fileName = file.name; // 이름 추출

          this.form.filedata.push(base64File);
          this.form.fileExtension.push(fileExtension);
          this.form.fileName.push(fileName);

          this.uploadedFiles.push({ name: file.name });
        };

        reader.readAsDataURL(file);
      }
      // this.preview();
      console.log("filedata", this.form.filedata);
      console.log("fileExtension", this.form.fileExtension);
      console.log("fileName", this.form.fileName);
    },
    // handleFileChange(event) {
    //   const files = event.target.files;

    //   if (files.length > 0) {
    //     const file = files[0];
    //     const reader = new FileReader();

    //     reader.onload = (e) => {
    //       const fileData = e.target.result;
    //       var base64File = fileData.split(",")[1]; // content 추출
    //       this.form.filedata = base64File;

    //       const extensionData64 = fileData.split(",")[0]; // 확장자 추출
    //       this.form.fileExtension = extensionData64
    //         .split(":")[1]
    //         .replace(";base64", "");

    //       this.form.fileName = file.name; // 이름 추출
    //     };

    //     reader.readAsDataURL(file);

    //     // console.log(this.form.filedata);
    //     // console.log(this.form.fileName);
    //     // console.log(this.form.fileExtension);
    //     // console.log(this.form.files.name);
    //   }
    //   // var blob = Utilities.newBlob(fileBlob);
    // },
    handleFileUpload() {
      // Loop through each uploaded file
      for (let i = 0; i < this.form.files.length; i++) {
        // const file = this.form.files[i];
        const file = this.form.files[i];
        const reader = new FileReader();
        // Create an object with the file information
        reader.onload = (e) => {
          const fileData = e.target.result;
          var base64File = fileData.split(",")[1]; // content 추출
          this.form.filedata[i] = base64File;

          const extensionData64 = fileData.split(",")[0]; // 확장자 추출
          this.form.fileExtension[i] = extensionData64
            .split(":")[1]
            .replace(";base64", "");

          this.form.fileName[i] = file.name; // 이름 추출
        };
        const uploadedFile = {
          name: file.name,
          url: URL.createObjectURL(file),
        };

        // Add the uploaded file to the array
        reader.readAsDataURL(file);

        this.uploadedFiles.push(uploadedFile);
      }
      this.preview();
      console.log(this.form.filedata);
      console.log(this.form.fileName);
      console.log(this.form.fileExtension);
      // console.log(this.form.files);
      // console.log(this.uploadedFiles);
      // console.log(this.form.imagePreviews);
    },
    deleteFile(index) {
      // Remove the file from the uploadedFiles array
      console.log("길이 : ", this.uploadedFiles.length);
      console.log("index : ", index);

      this.form.files.splice(index, 1);
      this.form.filedata.splice(index, 1);
      this.form.fileExtension.splice(index, 1);
      this.form.fileName.splice(index, 1);
      this.uploadedFiles.splice(index, 1);
      // this.imagePreviews.splice(index, 1);

      console.log(this.form.files);
      console.log(this.form.filedata);
      console.log(this.form.fileExtension);
      console.log(this.form.fileName);
      console.log(this.uploadedFiles);
      // console.log(this.imagePreviews);
    },

    // preview() {
    //   for (let i = 0; i < this.form.files.length; i++) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(this.form.files[i]);
    //     reader.onloadend = () => {
    //       const preview = reader.result;
    //       const uploadedFile = {
    //         file: this.form.files[i],
    //         preview: preview,
    //       };
    //       this.imagePreviews.push(uploadedFile);
    //     };
    //     // if (this.form.files[i].type.startsWith("image/")) {
    //     // }
    //   }
    // },
    // const data = {
    //   category: this.form.category,
    //   name: this.form.name,
    //   born: this.form.born,
    //   sex: this.form.sex,
    //   email: this.form.email,
    //   phone: this.form.phone,
    //   title: this.form.title,
    //   content: this.form.content,
    //   file: this.form.files,
    //   filedata: this.form.filedata,
    // };

    sendformdata() {
      const formdata = new FormData();

      const fileCount = this.form.filedata.length;
      var content = this.form.content.replace(/\n/g, "<br>");

      formdata.append("category", this.form.category);
      formdata.append("name", this.form.name);
      formdata.append("born", this.form.born);
      formdata.append("business", this.form.sex);
      formdata.append("email", this.form.email);
      formdata.append("phone", this.form.phone);
      formdata.append("title", this.form.title);
      formdata.append("content", content);
      for (var i = 0; i < fileCount; i++) {
        formdata.append("file" + [i], this.form.filedata[i]);
      }
      formdata.append("fileName", this.form.fileName);
      formdata.append("fileExtension", this.form.fileExtension);
      formdata.append("fileCount", fileCount);

      console.log([...formdata]);

      $.ajax({
        /* 요청 시작 부분 */
        url: "https://script.google.com/macros/s/AKfycbzqm2oB3s4Epdwl1BHRcciZnHu9jgdqmkngjIz7EIR1JlkfpJ-lZCGkP7oAo44gfpYE/exec", //주소
        data: formdata, //전송 데이터
        type: "POST", //전송 타입
        async: true, //비동기 여부
        enctype: "multipart/form-data", //form data 설정
        // dataType: "json",
        processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식
        contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식

        /* 응답 확인 부분 */
        success: function (response) {
          console.log("");
          console.log("[serverUploadImage] : [response] : " + response);
          console.log("");
          this.submitState = false;
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
          alert("문의하신 내용을 성공적으로 전송하였습니다.");
          this.isSpinner = false;

          this.submitState = false;
          location.reload();
        },
      });
    },
    async submit() {
      this.valid = await this.$refs.form.validate();
      if (!this.valid.valid) {
        alert("기본정보를 입력해주세요.");
        return;
      }
      if (this.form.category == null) {
        alert("카테고리를 선택해주세요.");
        return;
      }
      if (!this.privacyCheck) {
        alert("개인정보 수집 동의를 체크해주세요.");
        return;
      }

      if (this.submitState) {
        return;
      }
      this.submitState = true;
      this.isSpinner = true;
      console.log("valid", this.valid.valid);
      this.sendformdata();
      alert(
        "문의하기 전송완료 알람창이 뜰때까지 잠시만 기다려 주세요\n(파일의 용량이 클수록 시간이 오래걸립니다)"
      );
      this.stopScrolling();
    },

    stopScrolling() {
      window.addEventListener("wheel", this.stopEvent, {
        passive: false,
      });
      window.addEventListener("touchmove", this.stopEvent, {
        passive: false,
      });
    },
    stopEvent(e) {
      e.preventDefault();
      e.stopPropagation();
    },

    togglebtn(index) {
      console.log(this.categoryList[index].list);
      if (this.categoryList[index].list === "제작/영상") {
        this.form.category = "제작/영상";
      } else if (this.categoryList[index].list === "협찬") {
        this.form.category = "협찬";
      } else if (this.categoryList[index].list === "기타") {
        this.form.category = "기타";
      } else if (this.categoryList[index].list === "스튜디오") {
        this.form.category = "스튜디오";
      }
      console.log(this.form.category);
      this.selectedClass = ".my-color";
    },

    resetForm() {
      // form 데이터를 초기화합니다.
      this.form = [
        {
          category: null,
          sex: null,
          name: "",
          born: "",
          email: "",
          phone: "",
          rule_check: false,
          images: [],
          imagePreviews: [],
        },
      ];
    },
    mounted() {},
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

  .gform {
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
  .toggle {
    margin: auto;
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
  .gform {
    width: 800px;
    .form_title {
      font-size: 32px;
    }
  }
  .toggle {
    width: 800px;
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
  .gform {
    width: 800px;
    .form_title {
      font-size: 30px;
    }
  }
  .toggle {
    width: 800px;
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
  .gform {
    width: 760px;
    .form_title {
      font-size: 26px;
    }
  }
  .toggle {
    width: 760px;
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
  .gform {
    width: 640px;
    .form_title {
      font-size: 24px;
    }
  }
  .toggle {
    width: 640px;
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
  .gform {
    width: 320px;
    .form_title {
      font-size: 22px;
    }
  }
  .toggle {
    width: 320px;
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
.loading {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
