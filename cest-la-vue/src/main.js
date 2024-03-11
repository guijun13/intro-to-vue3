import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/user",
      component: () => import("@/views/UserPage.vue"),
    },
    {
      path: "/user/:name",
      component: () => import("@/views/UserDetailedPage.vue"),
    },
  ],
});

app.use(router);
app.mount("#app");
