<template>
  <div style="width: 100%; height: 100px">
    <div v-for="(sign, index) in signatures" :key="index" class="sign-con">
      <span
        class="sign-confirm"
        @click="openSignDialog(index)"
        :style="{ width: '100px', height: '100px', display: 'block' }"
      ></span>
      <div v-if="sign.src">
        <img :src="sign.src" :style="signStyle" />
      </div>
      <div class="sign-div">
        <v-dialog v-model="sign.dialog">
          <v-card width="550">
            <v-card-text>
              <canvas
                :ref="`signatureCanvas${index}`"
                width="500"
                height="300"
                style="border: 1px solid black"
                @mousedown="startDrawing(index)"
                @mousemove="draw(index, $event)"
                @mouseup="stopDrawing(index)"
                @touchstart="startDrawing(index)"
                @touchmove="draw(index, $event)"
                @touchend="stopDrawing(index)"
              ></canvas>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="clearCanvas(index)">clear</v-btn>
              <v-btn @click="saveSignature(index)">save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signatures: [
        { dialog: false, src: null, ctx: null, isDrawing: false },
        { dialog: false, src: null, ctx: null, isDrawing: false },
      ],
    };
  },
  computed: {
    signStyle() {
      return {
        width: "80px",
        position: "absolute",
        height: "50px",
        transform: "translate3d(65px, -10px, 10px)",
      };
    },
  },
  methods: {
    openSignDialog(index) {
      this.signatures[index].dialog = true;
      this.$nextTick(() => {
        const canvas = this.$refs[`signatureCanvas${index}`][0];
        if (canvas) {
          this.signatures[index].ctx = canvas.getContext("2d");
        }
      });
    },
    startDrawing(index) {
      event.preventDefault();
      this.signatures[index].isDrawing = true;
      this.signatures[index].ctx.beginPath();
    },
    draw(index, event) {
      event.preventDefault();
      if (!this.signatures[index].isDrawing) return;
      const ctx = this.signatures[index].ctx;

      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";

      const rect =
        this.$refs[`signatureCanvas${index}`][0].getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;

      if (event.touches) {
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
      }

      ctx.lineTo(x, y);
      ctx.stroke();
    },
    stopDrawing(index) {
      this.signatures[index].isDrawing = false;
    },
    clearCanvas(index) {
      this.signatures[index].ctx.clearRect(
        0,
        0,
        this.$refs[`signatureCanvas${index}`][0].width,
        this.$refs[`signatureCanvas${index}`][0].height
      );
    },
    saveSignature(index) {
      const signatureData =
        this.$refs[`signatureCanvas${index}`][0].toDataURL("image/png");
      this.signatures[index].src = signatureData;
      this.signatures[index].dialog = false;

      fetch(signatureData).then((response) => response.blob());
      //...
    },
    //...
  },
  //...
};
</script>
