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
        <TodoList :todolist="todolist" />
      </div>
    </section>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todolist: [
        {
          id: 2,
          title: "quis ut nam facilis et officia qui",
          favorite: "favorite_border",
        },
        {
          id: 3,
          title: "fugiat veniam minus",
          favorite: "favorite",
        },
        {
          id: 4,
          title: "et porro tempora",
          favorite: "favorite_border",
        },
        {
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          favorite: "favorite",
        },
      ],
    };
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
</style>
