import { createApp } from "vue";
import App from "./App.vue";

// add css framework
// for weater app
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// createApp(App).mount("#app");

// for corona app
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
