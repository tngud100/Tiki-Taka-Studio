<template>
  <section class="vod-section">
    <div class="vod-title"><span class="text">Youtube</span></div>

    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <!-- v-show="activeTab === index" -->
    <div class="tab-content">
      <div class="long-con card-con" :class="{ active: activeTab === 0 }">
        <div class="card" v-for="(item, index) in long" :key="index">
          <div class="card-img">{{ item.src }}</div>
          <div class="card-desc">{{ item.desc }}</div>
        </div>
      </div>
      <div class="short-con card-con" :class="{ active: activeTab === 1 }">
        <div class="card" v-for="(item, index) in short" :key="index">
          <div class="card-img">{{ item.src }}</div>
          <div class="card-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeVod",
  data() {
    return {
      long: [
        {
          src: "롱영상1",
          desc: "youtube1",
        },
        {
          src: "롱영상2",
          desc: "youtube2",
        },
        {
          src: "롱영상3",
          desc: "youtube3",
        },
        {
          src: "롱영상4",
          desc: "youtube4",
        },
        {
          src: "롱영상5",
          desc: "youtube5",
        },
        {
          src: "롱영상6",
          desc: "youtube6",
        },
      ],
      short: [
        {
          src: "쇼츠영상1",
          desc: "youtube1",
        },
        {
          src: "쇼츠영상2",
          desc: "youtube2",
        },
        {
          src: "쇼츠영상3",
          desc: "youtube3",
        },
        {
          src: "쇼츠영상4",
          desc: "youtube4",
        },
        {
          src: "쇼츠영상5",
          desc: "youtube5",
        },
        {
          src: "쇼츠영상6",
          desc: "youtube6",
        },
      ],
      activeTab: 0,
      tabs: [
        {
          title: "Full",
        },
        {
          title: "Short",
        },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
}

.tabs > div {
  cursor: pointer;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
}
.tabs > div.active {
  background-color: #ccc;
}
.vod-section {
  justify-items: center;
  display: grid;
  .vod-title {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100vw;
    padding: 12px;
    display: flex;
    justify-content: center;
    text-align: center;
    .text {
      font-family: sans-serif;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .tab-content {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 70%;
  }
  .long-con {
    position: relative;
    right: 100%;
    transition: right 0.3s ease;
  }
  .short-con {
    position: absolute;
    left: 100%;
    width: 100%;
    margin: 0% 15%;
    flex-shrink: 0;
    transition: left 0.3s ease;
  }
  .short-con.active {
    left: 0; /* Show short-con when it is active */
  }
  .long-con.active {
    right: 0; /* Show short-con when it is active */
  }
  .card-con {
    display: flex;
    justify-content: center;
    width: 70%;
    flex-wrap: wrap;
    .card {
      max-width: 25%;
      width: 30%;
      height: 180px;
      box-shadow: 0px 0px 1px 0px black;

      padding: 12px;
      margin: 12px;
      .card-img {
        height: 130px;
      }
      .card-desc {
        height: 50px;
      }
    }
  }
  // .slide-enter-active,
  // .slide-leave-active {
  //   transition: all 0.3s ease;
  // }
  // .slide-enter,
  // .slide-leave-to {
  //   opacity: 0;
  //   transform: translateX(100%);
  // }
}
</style>
