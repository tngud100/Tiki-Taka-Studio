<template>
  <section class="Reservate-section">
    <HeaderTitle
      :title-data="title"
      :sub-title-data="subTitle"
      :bg-image="bgImage"
    />
    <div class="Text-con">
      <p class="Title">실시간 / 녹화 방송제작</p>
      <p class="subTitle">
        모두를 위한 스튜디오 이곳에서 함께 콘텐츠를 만들어보세요
      </p>
    </div>
    <div class="reservate-con">
      <div :class="'card' + index" v-for="(card, index) in rooms" :key="index">
        <router-link
          :to="'/reservate' + card.studioNum"
          style="text-decoration: none"
        >
          <div :class="'hover-filter' + index">
            <span class="hover-text">
              [{{ card.numMin }}인실]
              {{ card.title }}
            </span>
          </div>
          <div class="card-image">
            <img :class="'image' + index" :src="card.imageSrc" />
          </div>
          <div class="card-subText">
            <span class="creator-subscribe">
              촬영 또는 라이브 방송을 하기 위한 룸</span
            >
          </div>
          <div class="card-titleText">
            <span class="creator-name"
              >[{{ card.numMin }}인실] {{ card.title }}</span
            >
            <span class="creator-name">{{ card.Price }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";

import { mapGetters } from "vuex";

export default {
  name: "ReservatePage",
  components: {
    HeaderTitle,
  },
  computed: {
    ...mapGetters(["rooms"]),
  },
  data() {
    return {
      title: "예약하기",
      subTitle: "Reservate",
      bgImage: [
        require("@/assets/banner/event1920.svg"),
        require("@/assets/banner/event1300.svg"),
        require("@/assets/banner/event760.svg"),
      ],

      // creatorCard: [
      //   {
      //     name: "[1인실] 임시룸1",
      //     name2: "12,000원",
      //     subscribe: "",
      //     imageSrc: require("@/assets/studio/studio1.svg"),
      //     num: 1,
      //   },
      //   {
      //     name: "[1인실] 임시룸2",
      //     name2: "14,000원",
      //     imageSrc: require("@/assets/studio/studio2.svg"),
      //     num: 2,
      //   },
      //   {
      //     name: "[2인실] 임시룸3",
      //     name2: "18,000원",
      //     imageSrc: require("@/assets/studio/studio3.svg"),
      //     num: 3,
      //   },
      //   {
      //     name: "[크로마키 룸] 임시룸4",
      //     name2: "16,000원",
      //     imageSrc: require("@/assets/studio/studio3.svg"),
      //     num: 4,
      //   },
      // ],
    };
  },

  mounted() {
    console.log(this.rooms);
  },
};
</script>

<style lang="scss" scoped>
.Reservate-section {
  .Text-con {
    text-align: center;
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    .Title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
    .subTitle {
      font-family: "Pretendard-Regular";
      font-weight: bold;
    }
  }
  .reservate-con {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 16px;

    width: 1300px;
    @for $i from 0 through 5 {
      .card#{$i} {
        width: 30%;
        height: 100%; // 수정된 부분
        margin: 12px;
        overflow: hidden;
        background-color: white;
        color: black;
        position: relative;
      }
      .hover-filter#{$i} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 250px;
        transition: all 0.5s ease;
        border-radius: 10px;
      }
      .image#{$i} {
        transform: scale(1.5);
        transition: all 0.5s ease;
        width: 450px;
        height: 250px;
      }
      .card#{$i}:hover {
        .hover-filter#{$i} {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }
        .image#{$i} {
          transform: scale(2);
        }
      }
    }
  }
  .hover-text {
    font-family: "Pretendard";
    font-weight: bold;
    font-size: 1.625rem;
    color: white;
  }
  .card-image {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    border-radius: 10px;
  }
  .card-titleText {
    display: grid;
    justify-content: left;
    align-items: center;
    padding: 0px 6px 12px 6px;
    .creator-name {
      font-family: "Pretendard";
      font-weight: bold;
      font-size: 1.125rem;
      color: rgb(97, 97, 97);
    }
  }
  .card-subText {
    display: grid;
    justify-content: left;
    align-items: center;
    padding: 6px 6px 0px 6px;
    .creator-subscribe {
      font-family: "Pretendard";
      font-size: 0.89rem;
      color: grey;
    }
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  .Text-con {
    margin: 100px auto 100px auto;
    .Title {
      font-size: 30px;
    }
    .subTitle {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  .Text-con {
    margin: 100px auto 100px auto;
    .Title {
      font-size: 30px;
    }
    .subTitle {
      font-size: 20px;
      margin-top: 10px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  .Text-con {
    margin: 80px auto 80px auto;
    .Title {
      font-size: 26px;
    }
    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  .Text-con {
    margin: 80px auto 80px auto;
    .Title {
      font-size: 26px;
    }
    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  .Text-con {
    margin: 70px auto 70px auto;
    padding: 0px 12px;
    .Title {
      font-size: 26px;
    }
    .subTitle {
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>
