<template>
  <!-- div 없애면 $emit 사용 시 warning : 안에 <template> tag 사용해 발생 -->
  <div>
    <h3>도시를 선택하세요.</h3>

    <template v-for="(city, index) in cities" :key="index">
      <button
        :class="{
          btn: true,
          'btn-primary': city.selected,
          'btn-secondary': !city.selected,
        }"
        @click="selectCity(city)"
      >
        {{ city.name }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      this.$emit("selectedCity", city);
    },
  },
  data() {
    return {
      cities: [
        {
          name: "Seoul",
          country: "South Korea",
          selected: false,
        },
        {
          name: "Tokyo",
          country: "Japan",
          selected: false,
        },
        {
          name: "Yakutsk",
          country: "Russia",
          selected: false,
        },
        {
          name: "London",
          country: "UK",
          selected: false,
        },
        {
          name: "Paris",
          country: "France",
          selected: false,
        },
        {
          name: "Sydney",
          country: "Australia",
          selected: false,
        },
        {
          name: "Beijing",
          country: "China",
          selected: false,
        },
      ],
    };
  },
};
</script>

<style></style>
