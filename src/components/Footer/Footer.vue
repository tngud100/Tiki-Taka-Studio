<template>
  <section class="footer-section">
    <div class="footer-con">
      <div class="logo-con">
        <img :src="logo" alt="logo" />
      </div>
      <div class="contact-con">
        <div class="Email-con">
          <span class="email-text">{{ text.email }}</span>
        </div>
        <div class="Tel">
          <span class="tel-text">
            {{ text.tel }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
