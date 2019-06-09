import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Staff from "./views/Staff.vue";
import drlamm from "./views/Doctor.vue";
import biopsy from "./views/Biopsy.vue";
import cystectomy from "./views/Cystectomy.vue";
import clinical from "./views/Clinical.vue";
import turbt from "./views/Turbt.vue";
import turp from "./views/Turp.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about/staff",
      name: "staff",
      component: Staff
    },
    {
      path: "/about/drlamm",
      name: "drlamm",
      component: drlamm
    },
    {
      path: "/about/clinical",
      name: "clinical",
      component: clinical
    },
    {
      path: "/procedures/biopsy",
      name: "biopsy",
      component: biopsy
    },
    {
      path: "/procedures/cystectomy",
      name: "cystectomy",
      component: cystectomy
    },
    {
      path: "/procedures/turbt",
      name: "turbt",
      component: turbt
    },
    {
      path: "/procedures/turp",
      name: "turp",
      component: turp
    }
  ]
});
