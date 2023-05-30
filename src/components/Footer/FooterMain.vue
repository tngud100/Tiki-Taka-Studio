<template>
  <!-- 풋터 -->
  <section class="footer-section">
    <div class="footer">
      <v-row class="footer_con">
        <v-col class="footer_box">
          <div class="logo_con">
            <router-link to="/">
              <!-- <img
                src="../../assets/logo/whitelogo.svg"
                alt=""
                class="footer_logo"
              /> -->
              로고
            </router-link>
          </div>
          <div class="footer_info">
            <p>부산광역시 사상구 백양대로684 5F</p>
            <p>
              TEL 051-301-5908 | FAX 3030-3448-0523 | E-mail:
              gameinscokr@naver.com
            </p>
            <p>
              (주)게임인스 | 대표이사: 김웅겸 | 사업자등록번호: 362-88-00435 |
              통신판매업 등록번호: 1649-3196-3663-0809
            </p>

            <!-- 모바일 푸터 아이콘 -->
            <div class="small_btn_con" style="display: none">
              <hr style="margin: 12px 0px" />
              <div
                class="small_btn"
                style="
                  justify-content: center;
                  align-items: center;
                  display: flex;
                "
              >
                <v-row style="display: flex; width: 100%">
                  <v-col cols="3" style="justify-content: center; display: flex"
                    ><router-link to="/events">{{
                      btn[2].text
                    }}</router-link></v-col
                  >
                  <v-col cols="3" style="justify-content: center; display: flex"
                    ><router-link to="/news">{{
                      btn[3].text
                    }}</router-link></v-col
                  >
                  <v-col
                    cols="3"
                    style="justify-content: center; display: flex"
                    >{{ btn[4].text }}</v-col
                  >
                  <v-col
                    cols="3"
                    style="z-index: 1; justify-content: center; display: flex"
                    ><router-link to="/">
                      {{ btn[5].text }}
                    </router-link></v-col
                  >
                </v-row>
              </div>
              <div style="display: flex; padding: 12px 0px">
                <a href=""
                  ><img :src="btn[0].logo_image" style="margin-right: 16px"
                /></a>
                <a href="">
                  <img :src="btn[1].logo_image" style="margin-right: 16px" />
                </a>
                <a href=""
                  ><img :src="btn[2].logo_image" style="margin-right: 16px" />
                </a>
              </div>
            </div>
            <p class="footer_info_reserve">
              copyright 2022 GAMEINS All right reserved
            </p>
          </div>
        </v-col>
        <v-col cols="3" class="contact_btn_con">
          <div class="contact_btn">
            <div v-for="(btnText, index) in btn" :key="index">
              <div class="btn">
                <a
                  v-if="btnText.text === 'INSTAGRAM' || btnText.text === 'BLOG'"
                  :href="btnText.link"
                >
                  {{ btnText.text }}
                  <img :src="btnText.logo_image" />
                </a>
                <router-link v-else :to="btnText.link">
                  {{ btnText.text }}
                  <img :src="btnText.logo_image" />
                </router-link>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterMain",
  data() {
    return {
      btn: [
        {
          link: "https://blog.naver.com/gameinscokr",
          text: "BLOG",
          logo_image: require("@/assets/footer/blog.svg"),
        },
        {
          link: "https://www.instagram.com/tikintaka_official",
          text: "INSTAGRAM",
          logo_image: require("@/assets/footer/insta.svg"),
        },
        {
          link: "/news",
          text: "공지사항",
          logo_image: require("@/assets/footer/certification.svg"),
        },
        {
          link: "/events",
          text: "이벤트",
          logo_image: require("@/assets/footer/certification.svg"),
        },
        {
          link: "/ask",
          text: "광고문의",
          logo_image: require("@/assets/footer/message.svg"),
        },
        {
          link: "/",
          text: "개인정보처리방침",
          logo_image: require("@/assets/footer/personal.svg"),
        },
        // {
        //   link: "/way",
        //   text: "오시는길",
        //   logo_image: require("@/assets/footer/locate.svg"),
        // },
      ],
    };
  },
  computed: {},
  mounted() {
    const mobile_reactive = document.querySelector(".small_btn_con");
    const expand_reactive = document.querySelector(".contact_btn_con");

    window.addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        mobile_reactive.style.display = "block";
        expand_reactive.style.display = "none";
      } else {
        mobile_reactive.style.display = "none";
        expand_reactive.style.display = "block";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1300px) {
  .footer_con {
    display: flex;
    width: 1300px;
  }
  .btn {
    width: 170px;
    height: 10px;
    font-size: 0.9rem;
    a {
      width: 100%;
    }
  }
  .footer_info {
    font-size: 0.9rem;
  }
  .logo_con {
    margin-bottom: 8%;
  }
  .footer_logo {
    width: 150px;
    height: 36px;
  }
  .footer_info_reserve {
    padding-top: 26px;
  }
}
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .footer_con {
    display: flex;
    width: 1080px;
  }
  .btn {
    width: 160px;
    height: 10px;
    font-size: 0.9rem;
    a {
      width: 100%;
    }
  }
  .footer_info {
    font-size: 0.9rem;
  }
  .logo_con {
    margin-bottom: 8%;
  }
  .footer_logo {
    width: 150px;
    height: 36px;
  }
  .footer_info_reserve {
    padding-top: 26px;
  }
}
// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .footer_con {
    display: flex;
    width: 760px;
  }
  .btn {
    width: 140px;
    height: 8px;
    font-size: 0.725rem;
    a {
      width: 100%;
    }
  }
  .footer_info {
    font-size: 0.725rem;
  }
  .logo_con {
    margin-bottom: 8%;
  }
  .footer_logo {
    width: 130px;
    height: 30px;
  }
  .footer_info_reserve {
    padding-top: 26px;
  }
}
// 태블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .footer_con {
    display: flex;
    width: 640px;
  }
  .btn {
    width: 120px;
    height: 6px;
    font-size: 0.425rem;
    a {
      width: 100%;
    }
  }
  .footer_info {
    font-size: 0.425rem;
  }
  .logo_con {
    margin-bottom: 8%;
  }
  .footer_logo {
    width: 130px;
    height: 30px;
  }

  .footer_info_reserve {
    padding-top: 26px;
  }
}

// 휴대폰
@media screen and (min-width: 320px) and (max-width: 639px) {
  .footer_con {
    width: 100%;
    .footer_box {
      width: 100% !important;
    }
  }
  .btn {
    width: 100px;
    height: 20px;
    font-size: 12px;
    a {
      width: 0;
    }
  }
  .footer_info {
    font-size: 12px;
  }
  .footer_logo {
    width: 80px;
    height: 18px;
  }
  .logo_con {
    margin-bottom: 12px;
  }
}

/* 풋터 */

.footer {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px grey;
}

.footer_con {
  margin: auto;
  justify-content: space-between;
}

.logo_con {
  padding-top: 12px;
}
.footer_logo {
  cursor: pointer;
}
.footer_info {
  color: #000000;
  font-family: "Pretendard-Regular";
  margin-top: 12px;
}
.contact_btn {
  display: grid;
  width: 100%;
  padding-top: 12px;
  justify-content: right;
}
.btn {
  border: solid 1px rgb(0, 0, 0);
  display: flex;
  align-items: center;
  padding: 16px 6px 12px 6px;
  margin: 3px;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  justify-content: space-between;
  display: flex;
}
</style>
