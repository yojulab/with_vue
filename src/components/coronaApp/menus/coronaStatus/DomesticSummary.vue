<template>
  <h3>Domestic Summary</h3>
  <ul>
    <li>
      <h3>corona Status</h3>
      <ChartGraph />
    </li>
  </ul>
</template>

<script>
import ChartGraph from "./charts/ChartGraph";
export default {
  components: {
    ChartGraph,
  },
};
</script>

<style></style>
