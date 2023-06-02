<template>
  <Header>
    <nav class="nav">
      <ul class="menu-list">
        <li v-for="(list, index) in Menu" :key="index" class="list">
          <a :href="list.href" class="a">
            {{ list.name }}
          </a>
        </li>
      </ul>
    </nav>
  </Header>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => ({
    image: require("@/assets/header/logo.png"),
    menuL: [
      {
        name: "커뮤니티",
        href: "http://xn--ef5bu9n7vbido5j.com/?page=0&sort=1&mod=0",
      },
      {
        name: "유튜브",
        href: "https://www.youtube.com/@tikintaka",
      },
      {
        name: "SNS",
        href: "https://www.instagram.com/tikintaka_official",
      },
    ],
    menuR: [
      {
        name: "공지사항",
        href: "/news",
      },
      {
        name: "이벤트",
        href: "/events",
      },
      {
        name: "문의",
        href: "/ask",
      },
    ],
    isScrolledUp: true,
  }),
};
</script>

<style></style>
