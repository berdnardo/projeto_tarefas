import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import User from "../views/User.vue";
import UserLogin from "../components/UserLogin.vue";
import UserContent from "../components/UserContent.vue";

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
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      {
        path: "/user",
        components: {
          login: UserLogin,
          task: UserContent,
      },
    }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
