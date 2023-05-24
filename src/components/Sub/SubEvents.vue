<template>
  <section class="events-section">
    <div class="bg"></div>
    <div class="container">
      <div class="title-text"><span class="main-title">Events</span></div>
      <div class="creator-con">
        <div
          :class="'card' + index"
          v-for="(card, index) in creatorCard"
          :key="index"
        >
          <div :class="'hover-filter' + index">
            <span class="hover-text">
              {{ card.name }}
            </span>
          </div>
          <div class="card-image">
            <img :class="'image' + index" :src="card.imageSrc" />
          </div>
          <div class="card-subText">
            <span class="creator-subscribe">{{ card.subscribe }}</span>
          </div>
          <div class="card-titleText">
            <span class="creator-name">{{ card.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CreatorPage",
  data() {
    return {
      creatorCard: [
        {
          name: "이벤트1",
          subscribe: "슈퍼리그",
          //   imageSrc: require("@/assets/Creator/logo.png"),
        },
        {
          name: "이벤트2",
          subscribe: "TOP피파",
          //   imageSrc: require("@/assets/Creator/logo.png"),
        },
        {
          name: "이벤트3",
          subscribe: "피파의 모든것",
          //   imageSrc: require("@/assets/Creator/logo.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  background-color: whitesmoke;
}

.container {
  position: relative;
  height: 100vh;
  width: 1600px;
  margin: auto;
  padding-top: 5%;

  .title-text {
    display: flex;
    justify-content: center;
    align-items: center;
    .main-title {
      font-family: "Pretendard";
      font-weight: bold;
      font-size: 5rem;
      color: rgb(129, 129, 129);
    }
  }
  .creator-con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    margin: 16px;

    @for $i from 0 through 3 {
      .card#{$i} {
        width: 30%;
        height: 100%; // 수정된 부분
        margin: 12px;
        overflow: hidden;
        background-color: white;
        color: black;
        position: relative;
        border-radius: 35px 0px 35px 35px;
      }
      .hover-filter#{$i} {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease;
      }
      .image#{$i} {
        transform: scale(1);
        transition: all 0.5s ease;
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
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  .card-titleText {
    display: grid;
    justify-content: left;
    align-items: center;
    height: 50px;
    padding: 0px 12px 12px 32px;
    .creator-name {
      font-family: "Pretendard";
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
  .card-subText {
    display: grid;
    justify-content: right;
    align-items: center;
    padding: 12px 12px 0px 12px;
    .creator-subscribe {
      font-family: "Pretendard";
      font-weight: bold;
      font-size: 0.89rem;
    }
  }
}
</style>
