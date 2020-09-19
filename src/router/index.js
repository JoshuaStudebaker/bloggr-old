import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "@bcwdev/auth0-vue";

// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
// @ts-ignore
import BlogWindow from "../pages/BlogWindow.vue";
// @ts-ignore
import CreateWindow from "../pages/CreateWindow.vue";
// @ts-ignore
import EditWindow from "../pages/EditWindow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },

  {
    path: "/create",
    name: "create-window",
    component: CreateWindow,
    beforeEnter: authGuard,
  },

  {
    path: "/blogs/:blogId/edit",
    name: "edit-window",
    component: EditWindow,
    beforeEnter: authGuard,
  },

  {
    //REVIEW
    path: "/blogs/:blogId",
    name: "blog-window",
    component: BlogWindow,
    // beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
