<template>
  <section class="pairing-section">
    <div class="tabs">
      <div
        v-for="(item, index) in week"
        :key="index"
        class="day"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
      >
        <span>{{ item.day }}</span>
      </div>
    </div>
    <div class="tab-content">
      <div class="pairing-con">
        <div
          v-for="(pairing, tabIdx) in pairings"
          :key="tabIdx"
          class="box"
          :class="[pairing.class, { active: activeTab === tabIdx }]"
        >
          <div
            v-for="card in pairing.cards"
            :key="card.num"
            class="pairing-card"
            :style="
              'background-image:url(' +
              card.img +
              '); background-size: cover; background-position: center;'
            "
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePairing",
  data() {
    return {
      week: [
        { day: "월" },
        { day: "화" },
        { day: "수" },
        { day: "목" },
        { day: "금" },
        { day: "토" },
        { day: "일" },
      ],
      pairings: [
        {
          class: "mon",
          cards: [
            {
              youtube: "src",
              num: 1,
              img: require("@/assets/pairing/mon/TSL.svg"),
            },
            {
              youtube: "src",
              num: 2,
              img: require("@/assets/pairing/mon/Top피파.svg"),
            },
            {
              youtube: "src",
              num: 3,
              img: require("@/assets/pairing/mon/피파의모든것.svg"),
            },
          ],
        },
        {
          class: "tue",
          cards: [
            { youtube: "src", num: 4 },
            { youtube: "src", num: 5 },
            { youtube: "src", num: 6 },
          ],
        },
        {
          class: "wed",
          cards: [
            { youtube: "src", num: 7 },
            { youtube: "src", num: 8 },
            { youtube: "src", num: 9 },
          ],
        },
        {
          class: "thur",
          cards: [
            { youtube: "src", num: 10 },
            { youtube: "src", num: 11 },
            { youtube: "src", num: 12 },
          ],
        },
        {
          class: "fri",
          cards: [
            { youtube: "src", num: 13 },
            { youtube: "src", num: 14 },
            { youtube: "src", num: 15 },
          ],
        },
        {
          class: "sat",
          cards: [
            { youtube: "src", num: 16 },
            { youtube: "src", num: 17 },
            { youtube: "src", num: 18 },
          ],
        },
        {
          class: "sun",
          cards: [
            { youtube: "src", num: 19 },
            { youtube: "src", num: 20 },
            { youtube: "src", num: 21 },
          ],
        },
      ],
      activeTab: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      const pairings = document.querySelectorAll(".box");
      pairings.forEach((pairing, idx) => {
        if (idx === this.activeTab) {
          pairing.style.transform = "translateX(0%)";
        } else {
          const translateX = (idx - this.activeTab) * 130;
          pairing.style.transform = `translateX(${translateX}%)`;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pairing-section {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;

  .tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 26px;
    color: rgb(104, 104, 104);
    .day {
      font-family: "pretendard-Regular";
      font-weight: bold;
      font-size: 18px;
      // margin: 0px 12px;
    }
  }

  .tabs > div {
    cursor: pointer;
    margin: 6px;
    padding: 6px;
  }
  .tabs > div.active {
    border-bottom: 2px solid;
    color: black;
  }
  .tab-content {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    width: 100%;

    .pairing-con {
      width: 1300px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      overflow: hidden;

      .box {
        width: 100%;
        display: flex;
        margin: 12px;
        box-shadow: 0px 0px 1px 0px black;
      }

      .pairing-card {
        width: 100%;
        height: 140px;
      }
      .mon {
        position: relative;
        transform: translateX(0%);
        transition: all 0.5s ease;
      }
      .tue,
      .wed,
      .thur,
      .fri,
      .sat,
      .sun {
        position: absolute;
        margin: 12px 15%;
        flex-shrink: 0;
        transition: all 0.5s ease;
      }
      .tue {
        transform: translateX(130%);
      }
      .wed {
        transform: translateX(260%);
      }
      .thur {
        transform: translateX(390%);
      }
      .fri {
        transform: translateX(520%);
      }
      .sat {
        transform: translateX(650%);
      }
      .sun {
        transform: translateX(780%);
      }
      // .mon.active {
      // }
    }
  }
}
</style>
