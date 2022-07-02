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
          @keypress.enter="addItem"
          ref="refInputText"
        />
        <button id="add-button" @click="addItem">Add</button>
      </div>
      <div class="list-container">
        <ul id="items">
          <template v-for="(task, index) in todoList" :key="index">
            <li class="item">
              <span class="task">{{ task }}</span>
              <span class="manage">
                <span class="like">
                  <i class="material-icons" @click="btnFavorite"
                    >favorite_border</i
                  >
                </span>
                <span class="delete">
                  <i class="material-icons" @click="btnDelete">delete</i>
                </span>
              </span>
            </li>
          </template>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      todoText: "",
      todoList: [],
      item: {
        task: "",
        like: "favorite_border",
      },
    };
  },
  methods: {
    btnDelete(event) {
      console.log(event.target.innerText);

      // console.log(event.target.parentElement.parentElement.innerHTML);
      const item = event.target.parentElement.parentElement.parentElement;
      item.remove();
    },
    btnFavorite(event) {
      console.log(event.target);
      const target = event.target;
      // console.log(`favorite : ${target.innerText}`);
      if (target.innerText === "favorite_border") {
        target.innerText = "favorite";
      } else {
        target.innerText = "favorite_border";
      }
    },
    inputTextFocus() {
      const target = this.$refs.refInputText;
      console.log(`inputTextFocus : ${target}`);

      this.todoList.push(target.value);

      target.value = "";
      target.focus();
    },
    addItem(event) {
      console.log(`keyEnter : ${event.target}`);
      this.inputTextFocus();
    },
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
