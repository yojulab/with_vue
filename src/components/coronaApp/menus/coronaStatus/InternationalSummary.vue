<template>
  <div style="margin-top: 20px">
    <el-radio-group v-model="selectedType" size="small">
      <el-radio-button
        v-for="(displayedType, index) in displayedTypes"
        :key="index"
        :label="index"
        >{{ displayedType.label }}</el-radio-button
      >
    </el-radio-group>
    <input type="text" name="" id="" v-model="searchword" />
  </div>
  <ul>
    <li v-for="(country, idx) in sortedCountries" :key="idx">
      <!-- <img src="https://placeimg.com/10/10/any" alt="" /> -->
      <img
        :src="require(`@/assets/flags/3x2/${country.CountryCode}.svg`)"
        :alt="country.Country"
      />
      <span>{{ country.Country }}</span>
      <span>{{ country.NewConfirmed }}</span
      >/
      <span>{{ country.TotalConfirmed }}</span>
    </li>
  </ul>
</template>

<script>
import coronaMixin from "@/mixins/coronaMixin.js";
export default {
  mixins: [coronaMixin],
  mounted() {
    this.getCoronaSummary();
  },
  methods: {
    async getCoronaSummary() {
      const url = "https://api.covid19api.com/summary";
      const response = await this.fetchCoronaData("get", url);
      // console.log(response);
      this.coronaSummaryCountries = response.Countries;
    },
  },
  data() {
    return {
      searchword: "",
      coronaSummaryCountries: [],
      selectedType: 0,
      displayedTypes: [
        {
          name: "NewConfirmed",
          label: "New Confirmed",
          sorted: -1,
        },
        {
          name: "TotalConfirmed",
          label: "Total Confirmed",
          sorted: 1,
        },
        {
          name: "NewDeaths",
          label: "New Deaths",
          sorted: -1,
        },
        {
          name: "TotalDeaths",
          label: "Total Deaths",
          sorted: 1,
        },
      ],
    };
  },
  computed: {
    sortedCountries() {
      console.log(this.displayedTypes[this.selectedType]);
      const { name, sorted } = this.displayedTypes[this.selectedType];
      let list = [...this.coronaSummaryCountries];

      // filter by searchword
      if (this.searchword) {
        list = list.filter((countries) => {
          return countries.Country.toLowerCase().includes(this.searchword);
        });
      }
      // sort by name
      list.sort((a, b) => {
        return a[name] > b[name] ? sorted : -sorted;
      });

      console.log(`countries : ${list.length}`);
      return list;
    },
  },
};
</script>

<style></style>
