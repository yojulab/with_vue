<template>
  <div class="wrapper">
    <header>
      <h1>To Do List</h1>
    </header>
    <section>
      <div class="inputext-container">
        <input
          type="text"
          id="inputext"
          placeholder="Add a new task"
          @keypress.enter="keyEnter"
        />
        <button id="add-button" @click="buttonClick">Add</button>
      </div>
      <div class="list-container">
        <TodoList :todoText="todoText" />
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
      todoText: "",
    };
  },
  methods: {
    inputTextFocus() {
      const target = document.querySelector("#inputext");
      console.log(`inputTextFocus : ${target}`);
      const todoText = target.value;
      target.value = "";
      target.focus();
      return todoText;
    },
    keyEnter(event) {
      console.log(`keyEnter : ${event.target}`);
      this.inputTextFocus();
    },
    buttonClick(event) {
      console.log(`buttonClick : ${event.target}`);
      this.inputTextFocus();
    },
  },
  computed: {},
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
