<template>
  <section class="schedule-section">
    <div class="schedule-con">
      <svg ref="svg" width="100%" height="300" viewBox="0 0 1920 300">
        <path ref="path" :d="linePath" stroke="black" fill="none" />
        <text ref="text" x="700" y="200" opacity="0">일자가 낫다</text>
        <image
          ref="image"
          url="https://img.imbc.com/s2018m/s2018m_1/s2018m_1_1/s2018m_1_11/__icsFiles/afieldfile/2023/05/15/lotto_apply.jpg"
          x="1200"
          y="200"
          height="50"
          width="50"
          opacity="0"
        />
      </svg>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "HomeSchedule",
  data() {
    return {
      linePoints: [
        { x: 50, y: 250 },
        { x: 350, y: 250 },
        { x: 350, y: 50 },
        { x: 650, y: 50 },
        { x: 650, y: 250 },
        { x: 950, y: 250 },
        { x: 950, y: 50 },
        { x: 1250, y: 50 },
        { x: 1250, y: 250 },
        { x: 1550, y: 250 },
        { x: 1550, y: 50 },
        { x: 1850, y: 50 },
      ],
    };
  },
  computed: {
    linePath() {
      return this.linePoints.reduce(
        (acc, point, i) =>
          acc + (i === 0 ? "M" : "L") + `${point.x},${point.y}`,
        ""
      );
    },
  },
  async mounted() {
    await this.$nextTick();
    if (this.$refs.path) {
      const pathElement = this.$refs.path;
      const length = pathElement.getTotalLength();
      gsap.set(pathElement, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline();
      tl.to(pathElement, { strokeDashoffset: 0, duration: 2 })
        .to(this.$refs.text, { opacity: 1, delay: 0.5 }, "<") // sync with line drawing animation, delay can be adjusted
        .to(this.$refs.image, { opacity: 1, delay: 1 }, "<"); // sync with line drawing animation, delay can be adjusted
    }
  },
};
</script>

<style lang="scss" scoped></style>
