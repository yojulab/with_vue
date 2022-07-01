<template>
  <li class="item">
    <span class="task"> </span>
    <span class="manage">
      <span class="like">
        <i class="material-icons">favorite_border</i>
      </span>
      <span class="delete">
        <i class="material-icons">delete</i>
      </span>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    todoText: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: #fff;
  color: #000;
  align-items: center;
}
.task {
  flex: 9;
}
.manage {
  flex: 1;
}

.like i {
  color: goldenrod;
}
.delete i {
  color: red;
}
.material-icons:hover {
  cursor: pointer;
}
</style>
