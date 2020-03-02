import Vue from "vue";
import Router from "vue-router";
import First from "../components/first.vue";
import Second from "../components/Second.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "First",
      component: First
    },
    {
      path: "/second",
      name: "Second",
      components: Second
    }
  ]
});
