import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import AboutUs from "@/pages/AboutUs.vue";
import UserLogin from "@/components/UserLogin.vue";
import ProductPage from "@/pages/ProductPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: '/products', component: ProductPage },
  { path: "/about", component: AboutUs },
  { path: "/login", component: UserLogin },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
