<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="listdata"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      listdata: [
        {
          name: "123",
          date: "12-12",
          time: 123,
          num: 2,
          phone: "010-24",
          email: "332.@ad.d",
        },
      ],
      headers: [
        { title: "이름", key: "name" },
        { title: "대여날짜", key: "date" },
        { title: "대여시간", key: "time" },
        { title: "사용 인원수", key: "num" },
        { title: "연락처", key: "phone" },
        { title: "이메일", key: "email" },
      ],
    };
  },
  mounted() {
    this.listdata.push({
      name: "asd",
      date: 159,
      time: 6.0,
      num: 24,
      phone: 4.0,
      email: 1,
    });
    console.log(this.listdata);
  },
};
</script>