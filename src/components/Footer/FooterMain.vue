<template>
  <section class="footer-section">
    <div class="footer-con">
      <div class="logo-con">
        <router-link to="/">
          <img :src="logo" alt="logo" class="logo" />
        </router-link>
      </div>
      <div class="contact-con">
        <div class="location contact">
          <div class="text-con">
            <p class="text-title">Location</p>
            <p>부산광역시 사상구 백양대로684 4F</p>
          </div>
        </div>
        <div class="email contact">
          <div class="text-con">
            <p class="text-title">Email</p>
            <p>{{ text.email }}</p>
          </div>
        </div>
        <div class="tel contact">
          <div class="text-con">
            <p class="text-title">Tel</p>
            <p>{{ text.tel }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="icon-con">
          <div class="icon-div" v-for="(item, index) in icon" :key="index">
            <a :href="item.href">
              <img :src="item.src" alt="logo" class="icon" />
            </a>
          </div>
        </div>
        <div class="copyright-con">
          <div class="copyright">
            <img :src="copyright" /> 2023 TNT STUDIO All right reserved
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/footer/scrollLogo.svg"),
      copyright: require("@/assets/footer/copyright.svg"),
      text: {
        location: "부산광역시 사상구 백양대로684 5F",
        email: "gameinscokr@naver.com",
        tel: "051-301-5908",
      },
      icon: [
        {
          src: require("@/assets/footer/Bloglogo.svg"),
          href: "https://blog.naver.com/gameinscokr",
        },
        {
          src: require("@/assets/footer/naverlogo.svg"),
          href: "https://blog.naver.com/bourjois13",
        },
        {
          src: require("@/assets/footer/TKlogo.svg"),
          href: "http://www.xn--ef5bu9n7vbido5j.com/",
        },
        {
          src: require("@/assets/footer/Youtubelogo.svg"),
          href: "https://www.youtube.com/@tikintaka",
        },
        {
          src: require("@/assets/footer/Instalogo.svg"),
          href: "https://www.instagram.com/tikintaka_official/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .footer-con {
    width: 1300px;
    padding: 30px 0px;
    .logo-con {
      width: 10%;
      display: flex;
      .logo {
        width: 117px;
        height: 51px;
      }
    }
    .contact-con {
      width: 63%;
      display: flex;
      justify-content: left;
      margin-left: 70px;
      .email {
        margin-left: 40px;
      }
      .tel {
        margin-left: 40px;
      }
      .text-con {
        font-size: 16px;
        .text-title {
          font-size: 18px;
          margin-bottom: 4px;
        }
      }
    }
    .icon-con {
      display: flex;
      align-items: center;
      justify-content: right;
      .icon-div {
        margin-left: 10px;
        .icon {
          width: 26px;
          height: 26px;
        }
      }
    }
    .copyright-con {
      .copyright {
        font-size: 14px;
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .footer-con {
    width: 1080px;
    padding: 30px 0px;
    .logo-con {
      width: 10%;
      display: flex;
      .logo {
        width: 117px;
        height: 51px;
      }
    }
    .contact-con {
      width: 61%;
      display: flex;
      justify-content: left;
      margin-left: 70px;
      .email {
        margin-left: 40px;
      }
      .tel {
        margin-left: 40px;
      }
      .text-con {
        font-size: 16px;
        .text-title {
          font-size: 18px;
          margin-bottom: 4px;
        }
      }
    }
    .icon-con {
      display: flex;
      justify-content: right;
      align-items: center;
      .icon-div {
        margin-left: 10px;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
    .copyright-con {
      .copyright {
        font-size: 14px;
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .footer-con {
    width: 760px;
    padding: 30px 0px;
    .logo-con {
      width: 10%;
      display: flex;
      .logo {
        width: 80px;
        height: 34px;
      }
    }
    .contact-con {
      width: 54%;
      display: flex;
      justify-content: left;
      margin-left: 60px;
      align-items: center;
      .email {
        margin-left: 8px;
      }
      .tel {
        margin-left: 8px;
      }
      .text-con {
        font-size: 12px;
        .text-title {
          font-size: 14px;
        }
      }
    }
    .icon-con {
      display: flex;
      align-items: center;
      justify-content: right;
      .icon-div {
        margin-left: 5px;
        .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
    .copyright-con {
      .copyright {
        font-size: 12px;
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .footer-con {
    width: 640px;
    padding: 30px 0px;
    display: grid !important;
    .logo-con {
      width: 100%;
      text-align: center;
      .logo {
        width: 120px;
        height: 53px;
      }
    }
    .contact-con {
      display: grid;
      justify-content: center;
      text-align: center;
      margin-top: 20px;
      .email {
      }
      .tel {
      }
      .text-con {
        font-size: 15px;
        .text-title {
          display: none;
          // font-size: 14px;
          // margin-bottom: 4px;
        }
      }
    }
    .icon-con {
      display: flex;
      justify-content: center;
      text-align: center;
      .icon-div {
        margin: 4px !important;
        .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
    .copyright-con {
      display: flex !important;
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .footer-con {
    width: 320px;
    padding: 30px 0px;
    display: grid !important;
    .logo-con {
      width: 100%;
      text-align: center;
      .logo {
        width: 120px;
        height: 53px;
      }
    }
    .contact-con {
      display: grid;
      justify-content: center;
      text-align: center;
      margin-top: 20px;
      .email {
      }
      .tel {
      }
      .text-con {
        font-size: 15px;
        .text-title {
          display: none;
          // font-size: 14px;
          // margin-bottom: 4px;
        }
      }
    }
    .icon-con {
      display: flex;
      justify-content: center;
      text-align: center;
      .icon-div {
        margin: 4px !important;
        .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
    .copyright-con {
      display: flex !important;
    }
  }
}

.footer-section {
  width: 100%;
  border-top: solid 1px rgb(230, 230, 230);
  background-color: #ffffff;
  .footer-con {
    display: flex;
    justify-content: center;
    margin: auto;
    .logo-con {
      align-items: center;
    }
    .contact-con {
      .email {
      }
      .tel {
      }
      .text-con {
        font-family: "Pretendard-Regular";
        .text-title {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
    .icon-con {
      display: flex;

      .icon-div {
      }
    }
  }
  .copyright-con {
    align-items: center;
    justify-content: center;
    margin: auto;
    .copyright {
      font-family: "Pretendard-Regular";
    }
  }
}
</style>
