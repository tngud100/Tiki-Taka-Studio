<template>
  <section class="news-event-section">
    <div class="container">
      <div class="news">
        <div class="title-con">
          <span class="title">공지사항</span>
          <span class="detail">detail view</span>
        </div>
        <hr class="hr-margin" />
        <div v-for="(item, index) in news" :key="index" class="list-con pc">
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </div>
        <div
          v-for="(item, index) in news_mobile"
          :key="index"
          class="list-con mobile"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </div>
      </div>
      <div class="events">
        <div class="title-con">
          <span class="title">이벤트</span>
          <span class="detail">detail view</span>
        </div>
        <hr class="hr-margin" />
        <div v-for="(item, index) in events" :key="index" class="list-con pc">
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </div>
        <div
          v-for="(item, index) in events_mobile"
          :key="index"
          class="list-con mobile"
        >
          <span class="list-title">{{ item.title }}</span>
          <span class="list-detail"> - {{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeNewsEvents",
  data() {
    return {
      news: [
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
      ],
      news_mobile: [
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
        {
          title: "공지1",
          subtitle: "이러이러한 공지사항이 있으며 ",
        },
      ],
      events: [
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
      ],
      events_mobile: [
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
        {
          title: "이벤트1",
          subtitle: "이러이러한 이벤트가 있으며 ",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
//PC XL
@media screen and (min-width: 1300px) {
  .news-event-section {
    width: 1300px;
    .container {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none !important;
      }
      .pc {
        display: block !important;
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
    .container {
      display: grid;
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
    .container {
      display: grid;
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
  margin: 50px auto 30px auto;
  .container {
    width: 100%;

    .news,
    .events {
      width: 100%;
      margin: 0 1%;

      .hr-margin {
        margin: 20px 0px;
      }
      .title-con {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .title {
          font-family: "pretendard-Regular";
          font-weight: bold;
        }
        .detail {
          font-family: "pretendard-Regular";
          padding: 0px 20px;
          align-self: center;
          cursor: pointer;
        }
      }
      .list-con {
        display: grid;
        padding: 10px 0px;
        cursor: pointer;
        .list-title {
          font-family: "pretendard-Regular";
          font-weight: bold;
        }
        .list-detail {
          font-family: "pretendard-Regular";
          color: rgb(109, 109, 109);
          padding: 12px 0px;
        }
      }
      .list-con:hover {
        background-color: whitesmoke;
      }
    }
  }
}
</style>
