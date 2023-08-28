<template>
  <v-app>
    <v-container>
      <v-select
        v-model="selectedItem"
        :items="items"
        :item-title="items.text"
        :item-value="items.value"
        :item-disabled="disableItem"
        label="Select an item"
      ></v-select>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedItem: null,
      items: [
        { text: "test1", value: "test1" },
        { text: "test2", value: "test2" },
        { text: "test3", value: "test3" },
        { text: "test4", value: "test4", disabled: true },
      ],
    };
  },
  methods: {
    disableItem(item) {
      return item.disabled;
    },
  },
};
</script>