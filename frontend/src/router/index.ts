import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import User from "../views/User.vue";
import UserContent from "../components/UserContent.vue";
import AdminContent from "../components/AdminContent.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/admin",
        components: {
          main: AdminContent,
        },
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      {
        path: "/user",
        components: {          
          task: UserContent,
      },
    }
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
