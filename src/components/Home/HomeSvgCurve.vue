<template>
  <section class="schedule-section">
    <div class="schedule-con">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-container"
          @mousemove="moveCircle"
          height="210"
          width="500"
        >
          <path
            id="curve"
            d="M0 80 Q 10 10 200 80"
            stroke="black"
            fill="transparent"
          />

          <path
            id="curve2"
            d="M200 80 Q 300 150 490 80"
            stroke="black"
            fill="transparent"
            transform="rotate(0deg)"
          />
          <!-- <path
            id="curve3"
            d="M400 80 Q 500 10 600 80"
            stroke="black"
            fill="transparent"
          /> -->
          <!-- <path id="curve" d="M10 80 Q 100 10 200 80" stroke="black" /> -->
          <circle ref="circle" id="circle" r="10" fill="red" />
          <text ref="text" id="text" x="10" y="170">Hovering</text>
        </svg>

        <!-- <svg
          class="svg-container"
          @mousemove="moveCircle"
          width="500"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M 10,150 Q 250,50 490,150"
            stroke="black"
            fill="transparent"
          />
          <circle ref="circle" id="circle" r="10" fill="red" />
          <text ref="text" id="text" x="10" y="170">Hovering</text>
        </svg> -->
      </div>
    </div>
  </section>
</template>
<script>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const circle = ref(null);
    const tl = gsap.timeline();

    onMounted(() => {
      const path = document.querySelector("#curve");
      const startPoint = path.getPointAtLength(0);
      gsap.set(circle.value, { x: startPoint.x, y: startPoint.y });
      console.log(path, startPoint);
    });

    const moveCircle = (event) => {
      const svgRect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - svgRect.left;
      const path = document.querySelector("#curve");
      const length = path.getTotalLength();
      const t = x / (svgRect.width / 2);
      const point = path.getPointAtLength(t * length);
      //   console.log(event.clientX, svgRect.left, x);
      //   console.log(length, t);
      //   console.log(point);
      const x2 = event.clientX - svgRect.left - 200;
      const path2 = document.querySelector("#curve2");
      const length2 = path2.getTotalLength();
      const t2 = x2 / (svgRect.width / 2);
      const point2 = path2.getPointAtLength(t2 * length2);

      tl.clear();

      if (t <= 1) {
        tl.to(circle.value, {
          duration: 0.5,
          x: point.x,
          y: point.y,
          ease: "power4.out",
        });
      }
      if (t > 1) {
        tl.clear();
        tl.to(circle.value, {
          duration: 0.5,
          x: point2.x,
          y: point2.y,
          ease: "power4.out",
        });
      }
    };

    return {
      circle,
      moveCircle,
    };
  },
};
</script>

<style lang="scss" scoped>
.svg-container {
  //   border: 1px solid black;
}
</style>
