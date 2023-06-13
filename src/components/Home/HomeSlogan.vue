<template>
  <section class="slogan-section">
    <div class="Text-con">
      <p class="text">Share All the content</p>
    </div>
    <!-- <div class="hover-circle"></div> -->
  </section>
</template>

<script>
export default {
  name: "HomeSlogan",
  //   mounted() {
  //     // let main = document.querySelector(".slogan-section");
  //     let text = document.querySelectorAll(".text");
  //     const hoverCircle = document.querySelector(".hover-circle");
  //     // const banner = document.querySelector(".image-container");

  //     const small_circle_rect = 12.5;
  //     // const sectionOffset = main.clientHeight + 600;
  //     text.forEach((el) => {
  //       el.addEventListener("mouseover", function () {
  //         let mouseX = 0;
  //         let mouseY = 0;

  //         function updateCirclePosition() {
  //           hoverCircle.style.left = mouseX + "px";
  //           hoverCircle.style.top = mouseY + "px";
  //         }

  //         function handleMouseMove(event) {
  //           //   const scrollY = window.pageYOffset;
  //           mouseX = event.clientX - small_circle_rect;
  //           mouseY = event.clientY - small_circle_rect;
  //           // 마우스 포인터 위치가 뷰포트 바깥으로 나가지 않도록 보정
  //           mouseX = Math.max(
  //             0,
  //             Math.min(
  //               mouseX,
  //               window.innerWidth - hoverCircle.getBoundingClientRect().width
  //             )
  //           );
  //           mouseY = Math.max(
  //             0,
  //             Math.min(
  //               mouseY,
  //               window.innerHeight - hoverCircle.getBoundingClientRect().height
  //             )
  //           );
  //         }

  //         function loop() {
  //           updateCirclePosition();
  //           requestAnimationFrame(loop);
  //         }

  //         hoverCircle.style.scale = 8;
  //         document.addEventListener("mousemove", handleMouseMove);
  //         loop();
  //       });
  //       el.addEventListener("mouseleave", function () {
  //         hoverCircle.style.scale = 1;
  //       });
  //     });
  //   },
};
</script>

<style lang="scss" scoped>
.slogan-section {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(145, 145, 145);

  .Text-con {
    margin: 100px auto;
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: center;
    p {
      font-size: 34px;
      font-family: sans-serif;
      font-weight: bold;
      color: rgb(255, 255, 255);
    }
  }

  //   .hover-circle {
  //     position: absolute;
  //     width: 25px;
  //     height: 25px;
  //     border-radius: 100%;
  //     background-color: white;
  //     transition-property: scale;
  //     transition-duration: 0.5s;
  //     pointer-events: none;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     mix-blend-mode: difference; /* 특정 엘리먼트의 색상을 반전시킴 */
  //     .hover-text {
  //       font-size: 0.89rem;
  //       font-family: "Pretendard";
  //       font-weight: bold;
  //       color: black;
  //     }
  //   }
}
</style>
