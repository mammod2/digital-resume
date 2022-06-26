import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
createApp(App).mount("#app");
createApp(App).use(mdiVue, {
  icons: mdijs,
});
