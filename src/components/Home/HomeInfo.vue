<template>
  <section class="info-section">
    <div class="info-con">
      <div class="container">
        <span class="company"> 티키앤타카 스튜디오 </span>
        <span class="Title"> ABOUT US </span>
        <div class="text-con">
          <span class="describe">
            <div class="desc1">
              <p>
                자체 제작 플랫폼과 유튜브 등 다양한 공간에서 핵심 주제에 관심을
                가지고
              </p>
              <p>
                전문성을 두루 갖추어 시청자의 관점에서 보고 싶을 만한 콘텐츠를
                제작하는 콘텐츠 제작 스튜디오입니다.
              </p>
            </div>
            <br />
            <!-- <div class="desc2">
              <p>
                저희는 '티키앤타카' 유튜브 채널과 커뮤니티를 운영하고 있으며
              </p>
              <p>
                아티스트, 크리에이터, 아나운서들을 위한 이 공간이 여러분의
                열정과 창의력을 키우는데 최선을 다해 도움을 드립니다.
              </p>
            </div> -->
          </span>
        </div>
        <div class="btn-box">
          <div class="btn"><span class="btn-text">VIEW MORE</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeInfo",
};
</script>

<style lang="scss" scoped>
.info-section {
  width: 100%;
  background-image: url("@/assets/banner/imsi.svg");
  background-size: cover;
  background-position: center;
  .info-con {
    width: 1300px;
    display: flex;
    justify-content: center;
    padding: 100px 0px;
    margin: auto;
    .container {
      width: 100%;
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;

      .company {
        font-size: 18px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: rgb(255, 255, 255);
        margin: 0px 0px 10px 0px;
      }
      .Title {
        margin: 20px 0px 10px 0px;
        font-size: 34px;
        font-family: "Pretendard-Regular";
        font-weight: bold;
        color: rgb(255, 255, 255);
      }
      .text-con {
        margin: 20px 0px 10px 0px;
        .describe {
          display: grid;
          justify-content: center;
          align-items: center;
          .desc1,
          .desc2 {
            font-size: 16px;
            font-family: "Pretendard-Regular";
            color: rgb(255, 255, 255);
          }
        }
      }
      .btn-box {
        margin: 20px 0px 10px 0px;
        .btn {
          margin: auto;
          width: 150px;
          height: 50px;
          border: solid 1px rgb(255, 255, 255);
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          cursor: pointer;
          .btn-text {
            font-family: "sans-serif";
            font-size: 16px;
            color: rgb(255, 255, 255);
          }
        }
        .btn:hover {
          background-color: rgb(131, 131, 131);
          color: black;
          .btn-text {
            color: rgb(219, 219, 219);
          }
        }
      }
    }
  }
}
</style>
