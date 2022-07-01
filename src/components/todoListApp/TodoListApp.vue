<template>
  <div class="wrapper">
    <header>
      <h1>To Do List</h1>
    </header>
    <section>
      <div class="inputext-container">
        <input type="text" id="inputext" placeholder="Add a new task" />
        <button id="add-button">Add</button>
      </div>
      <div class="list-container">
        <ul id="items">
          <TodoItem></TodoItem>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: {
    TodoItem,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
* {
  margin: 3px;
  padding: 0;
  outline: none;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  color: aqua;
  background-color: purple;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

#inputext {
  width: 70%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.3em;
  font-size: 1.5em;
  background-color: #fff;
  color: #000;
}
#add-button {
  width: 20%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.3em;
  font-size: 1.5em;
  background-color: rgb(79, 137, 169);
  color: #000;
}
#add-button:hover {
  cursor: pointer;
  background-color: rgb(157, 69, 167);
  color: #fff;
}
#items li {
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
