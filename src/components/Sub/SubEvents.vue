<template>
  <section class="events-section">
    <!-- <div class="bg"></div> -->
    <HeaderTitle :title-data="title" />
    <div class="container">
      <div class="creator-con">
        <div
          :class="'card' + index"
          v-for="(card, index) in creatorCard"
          :key="index"
        >
          <router-link
            :to="'/events' + (index + 1)"
            style="text-decoration: none"
          >
            <div :class="'hover-filter' + index">
              <span class="hover-text">
                {{ card.name }}
              </span>
            </div>
            <div class="card-image">
              <img :class="'image' + index" :src="card.imageSrc" />
            </div>
            <div class="card-titleText">
              <span class="creator-name">{{ card.name }}</span>
            </div>
            <div class="card-subText">
              <span class="creator-subscribe"
                ><span class="date-title">기간 </span>{{ card.date }}</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";
export default {
  name: "CreatorPage",
  components: {
    HeaderTitle,
  },
  data() {
    return {
      title: "이벤트",
      creatorCard: [
        {
          name: "[구독 이벤트] 티키앤타카 채널 구독",
          date: "2023.05.01 ~",
          imageSrc: require("@/assets/events/subScribeEvents.svg"),
        },
        // {
        //   name: "이벤트2",
        //   date: "2023.06.15 ~ 2023.06.21",
        //   imageSrc: require("@/assets/pairing/mon/TSL.svg"),
        // },
        // {
        //   name: "이벤트3",
        //   date: "2023.06.17 ~ 2023.07.10",
        //   imageSrc: require("@/assets/pairing/mon/피파의모든것.svg"),
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.events-section {
  // background-color: whitesmoke;
}
.container {
  position: relative;
  margin: auto;

  .creator-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    // margin: 16px;
    flex-wrap: wrap;

    @for $i from 0 through 3 {
      .card#{$i} {
        height: 100%; // 수정된 부분
        margin: 12px;
        overflow: hidden;
        background-color: white;
        text-decoration: none;
        color: black;
        position: relative;
        border-radius: 10px;
      }
      .hover-filter#{$i} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 0;
        width: 100%;
        border-radius: 10px;
        transition: all 0.3s ease;
      }
      .image#{$i} {
        transform: scale(1);
        transition: all 0.3s ease;
        border-radius: 10px;
      }
      .card#{$i}:hover {
        cursor: pointer;
        .hover-filter#{$i} {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .image#{$i} {
          transform: scale(1.3);
          border-radius: 10px;
        }
      }
    }
  }
  .hover-text {
    font-family: "Pretendard-Regular";
    font-weight: bold;
    color: white;
  }
  .card-image {
    width: 100%;
    height: 140px;
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
    padding: 12px 12px 12px 0px;
    .creator-name {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      color: black;
    }
  }
  .card-subText {
    display: grid;
    justify-content: left;
    align-items: center;
    padding: 0px 12px 12px 0px;
    .creator-subscribe {
      font-family: "Pretendard-Regular";
      color: rgb(196, 196, 196);
    }
    .date-title {
      font-family: "Pretendard-Regular";
      font-weight: bold;
      color: rgb(53, 53, 53);
      margin-right: 12px;
    }
  }
}

//PC XL
@media screen and (min-width: 1300px) {
  @for $i from 0 through 3 {
    .card#{$i} {
      width: 30%;
      height: 100%; // 수정된 부분
    }
    .image#{$i} {
      width: 100%;
    }
    .hover-filter#{$i} {
      height: 224px;
    }
  }
  .events-section {
    margin-top: 80px;
  }
  .container {
    width: 1300px;
    padding-top: 30px;
    padding-bottom: 50px;

    .card-image {
      height: 30%;
    }
    .hover-text {
      font-size: 26px;
    }
    .creator-name {
      font-size: 22px;
    }
    .creator-subscribe {
      font-size: 18px;
    }
  }
}
// PC
@media screen and (min-width: 1080px) and (max-width: 1300px) {
  @for $i from 0 through 3 {
    .card#{$i} {
      width: 30%;
      height: 100%; // 수정된 부분
    }
    .hover-filter#{$i} {
      height: 185px;
    }
  }
  .events-section {
    margin-top: 70px;
  }
  .container {
    width: 1080px;
    padding-top: 30px;
    padding-bottom: 50px;

    .card-image {
      height: 185px;
    }
    .hover-text {
      font-size: 22px;
    }
    .creator-name {
      font-size: 20px;
    }
    .creator-subscribe {
      font-size: 16px;
    }
  }
}

// 노트북
@media screen and (min-width: 760px) and (max-width: 1080px) {
  @for $i from 0 through 3 {
    .card#{$i} {
      width: 30%;
      height: 100%; // 수정된 부분
    }
    .hover-filter#{$i} {
      height: 130px;
    }
  }
  .events-section {
    margin-top: 60px;
  }
  .container {
    width: 760px;
    padding-top: 30px;
    padding-bottom: 50px;
    .card-image {
      height: 130px;
    }
    .hover-text {
      font-size: 15px;
    }
    .creator-name {
      font-size: 14px;
    }
    .creator-subscribe {
      font-size: 12px;
    }
  }
}

// 테블릿
@media screen and (min-width: 640px) and (max-width: 759px) {
  @for $i from 0 through 3 {
    .card#{$i} {
      width: 45%;
      height: 100%; // 수정된 부분
    }
    .hover-filter#{$i} {
      height: 162px;
    }
  }
  .events-section {
    margin-top: 55px;
  }
  .container {
    width: 640px;
    padding-top: 30px;
    padding-bottom: 50px;

    .card-image {
      height: 162px;
    }
    .hover-text {
      font-size: 18px;
    }
    .creator-name {
      font-size: 18px;
    }
    .creator-subscribe {
      font-size: 15px;
    }
  }
}

// 모바일
@media screen and (min-width: 320px) and (max-width: 639px) {
  @for $i from 0 through 3 {
    .card#{$i} {
      width: 100%;
      height: 100%; // 수정된 부분
    }
    .hover-filter#{$i} {
      height: 156px;
    }
  }
  .events-section {
    margin-top: 50px;
  }
  .container {
    width: 320px;
    padding-top: 30px;
    padding-bottom: 50px;
    .card-image {
      height: 156px;
    }
    .hover-text {
      font-size: 18px;
    }
    .creator-name {
      font-size: 18px;
    }
    .creator-subscribe {
      font-size: 15px;
    }
  }
}
</style>
