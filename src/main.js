import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

new Vue({
  axios,
  VueAxios,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
