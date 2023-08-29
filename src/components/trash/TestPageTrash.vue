<template>
  <div class="hello">
    <v-combobox
      :items="items"
      label="Item Name"
      placeholder="Start typing to Search"
      :item-disabled="isItemDisabled"
      :return-object="false"
      v-model="form.name"
    ></v-combobox>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Item 1",
          description: "Item 1 description.",
        },
        { id: 2, name: "Item 2", description: "Item 2 description." },
        {
          id: 3,
          name: "Item 3",
          description: "Item 3 description.",
        },
        { id: 4, name: "Item 4", description: "Item 4 description." },
      ],

      form: {
        id: null,
        name: "",
        description: "",
      },
    };
  },
  methods: {
    isItemDisabled(item) {
      return item.id >= 3; // id가 3 이상인 항목만 비활성화
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
