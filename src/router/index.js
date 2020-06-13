import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Detail from "../views/Detail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
