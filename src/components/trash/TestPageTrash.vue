<template>
  <div>
    <button @click="captureScreenshot">스크린샷 찍고 PDF로 다운로드</button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  methods: {
    async captureScreenshot() {
      const element = document.getElementsByClassName("reserve-form"); // 'app'을 루트 Vue 컴포넌트의 ID로 교체하세요

      // HTML 요소로부터 캔버스 생성
      const canvas = await html2canvas(element);

      // PDF 문서 생성
      const pdf = new jsPDF({
        orientation: "portrait", // 'portrait' 또는 'landscape'
        unit: "px", // 'px', 'pt', 'mm', 'cm', 'in'
        format: "a4", // 'a3', 'a4', 'a5', 등
      });

      // 캔버스를 PDF에 이미지로 추가
      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );

      // PDF를 'screenshot.pdf'로 저장
      pdf.save("screenshot.pdf");
    },
  },
};
</script>
