<template>
  <section class="news-event-section">
    <div class="container">
      <div class="news">
        <div class="title-con">
          <span class="title">공지사항</span>
          <router-link to="/news" class="detail">detail view</router-link>
        </div>
        <hr class="hr-margin" />
        <router-link
          :to="'news' + (index + 1)"
          v-for="(item, index) in news"
          :key="index"
          class="list-con pc"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
        <router-link
          :to="'news' + (index + 1)"
          v-for="(item, index) in news_mobile"
          :key="index"
          class="list-con mobile"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
      </div>
      <div class="events">
        <div class="title-con">
          <span class="title">이벤트</span>
          <router-link to="/events" class="detail">detail view</router-link>
        </div>
        <hr class="hr-margin" />
        <router-link
          :to="'events' + (index + 1)"
          v-for="(item, index) in events"
          :key="index"
          class="list-con pc"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
        <router-link
          :to="'events' + (index + 1)"
          v-for="(item, index) in events_mobile"
          :key="index"
          class="list-con mobile"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";
export default {
  name: "HomeNewsEvents",
  data() {
    return {
      news: [
        {
          title: "TNT Studio Grand Opening",
          subtitle: "2023년 6월 10일, TNT Studio가 그랜드 오픈을 하였습니다!",
        },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
      ],
      news_mobile: [
        {
          title: "TNT Studio Grand Opening",
          subtitle: "2023년 6월 10일, TNT Studio가 그랜드 오픈을 하였습니다!",
        },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
        // {
        //   title: "공지1",
        //   subtitle: "이러이러한 공지사항이 있으며 ",
        // },
      ],
      events: [
        {
          title: "유튜브 채널 구독 EVENT",
          subtitle: "구독 인증을 하면 티키앤타카 포인트 쏜다!",
        },
        // {
        //   title: "이벤트1",
        //   subtitle: "이러이러한 이벤트가 있으며 ",
        // },
        // {
        //   title: "이벤트1",
        //   subtitle: "이러이러한 이벤트가 있으며 ",
        // },
        // {
        //   title: "이벤트1",
        //   subtitle: "이러이러한 이벤트가 있으며 ",
        // },
      ],
      events_mobile: [
        {
          title: "유튜브 채널 구독 EVENT",
          subtitle: "구독 인증을 하면 티키앤타카 포인트 쏜다!",
        },
        // {
        //   title: "이벤트1",
        //   subtitle: "이러이러한 이벤트가 있으며 ",
        // },
        // {
        //   title: "이벤트1",
        //   subtitle: "이러이러한 이벤트가 있으며 ",
        // },
      ],
    };
  },
  methods: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const news_event = gsap.timeline({ paused: true });

    news_event.to(".title", { duration: 0.5, left: 0, opacity: 1 }, "start");
    news_event.to(
      ".list-title",
      { duration: 0.5, left: 0, opacity: 1 },
      "start+=.2"
    );
    news_event.to(
      ".list-detail",
      { duration: 0.5, left: 0, opacity: 1 },
      "start+=.4"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".news-event-section",
        start: "top+=100px bottom",
        end: "+=50%",
        scrub: true,
        animation: news_event,
        onEnter: () => {
          news_event.play();
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .news-event-section {
    width: 1300px;
    margin: 100px auto 30px auto;
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }
      .title-con {
        .title {
          font-size: 24px;
        }
        .detail {
          font-size: 13px;
        }
      }
      .list-con {
        .list-title {
          font-size: 18px;
        }
        .list-detail {
          font-size: 16px;
        }
      }
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .news-event-section {
    width: 1080px;
    margin: 100px auto 30px auto;
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }

      .title-con {
        .title {
          font-size: 22px;
        }
        .detail {
          font-size: 12px;
        }
      }
      .list-con {
        .list-title {
          font-size: 16px;
        }
        .list-detail {
          font-size: 14px;
        }
      }
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .news-event-section {
    width: 760px;
    margin: 80px auto 30px auto;
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: grid !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 12px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .news-event-section {
    width: 640px;
    margin: 65px auto 30px auto;
    .container {
      display: grid;
      padding: 12px;
      .mobile {
        display: grid !important;
      }
      .pc {
        display: none !important;
      }
      .news {
        margin: 0px 1% 50px 1% !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 12px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .news-event-section {
    width: 320px;
    margin: 50px auto 30px auto;
    .container {
      display: grid;
      padding: 10px;
      .mobile {
        display: grid !important;
      }
      .pc {
        display: none !important;
      }
      .news {
        margin: 0px 1% 50px 1% !important;
      }
      .title-con {
        .title {
          font-size: 20px;
        }
        .detail {
          font-size: 12px;
        }
      }
      .list-con {
        .list-title {
          font-size: 15px;
        }
        .list-detail {
          font-size: 13px;
        }
      }
    }
  }
}

.news-event-section {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 100px;
  .container {
    width: 100%;

    .news,
    .events {
      width: 100%;
      margin: 0 1%;

      .hr-margin {
        margin: 12px 0px;
      }
      .title-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .title {
          font-family: "pretendard-Regular";
          font-weight: bold;
          left: -15px;
          position: relative;
          opacity: 0;
        }
        .detail {
          font-family: "pretendard-Regular";
          padding: 0px 20px;
          align-self: center;
          text-decoration: none;
          color: black;
          cursor: pointer;
        }
      }
      .list-con {
        display: grid;
        padding: 10px 0px;
        cursor: pointer;
        text-decoration: none;
        .list-title {
          font-family: "pretendard-Regular";
          font-weight: bold;
          left: -15px;
          position: relative;
          opacity: 0;
          color: black;
        }
        .list-detail {
          font-family: "pretendard-Regular";
          color: rgb(109, 109, 109);
          margin: 12px 0px;
          left: -15px;
          position: relative;
          opacity: 0;

          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .list-con:hover {
        background-color: whitesmoke;
      }
    }
  }
}
</style>
