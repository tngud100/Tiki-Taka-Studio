<template>
  <section class="news-event-section">
    <div class="container">
      <div class="news">
        <div class="title-con">
          <span class="title">공지사항</span>
          <span class="detail">detail view</span>
        </div>
        <hr class="hr-margin" />
        <div v-for="(item, index) in news" :key="index" class="list-con">
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
        <div v-for="(item, index) in events" :key="index" class="list-con">
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.news-event-section {
  width: 1300px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 50px auto 30px auto;
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;

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
          font-size: 24px;
        }
        .detail {
          font-family: "pretendard-Regular";
          font-size: 13px;
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
          font-size: 18px;
        }
        .list-detail {
          font-family: "pretendard-Regular";
          font-size: 16px;
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
