import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";
// import { blogsService } from "../services/BlogsService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    activeComments: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },

    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },

    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog;
    },

    setComments(state, activeComments) {
      state.activeComments = activeComments;
    },
  },
  actions: {
    // SECTION Profile Actions
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    // SECTION Blog Actions
    async getAllBlogs({ commit }) {
      let res = await api.get("blogs");
      let blogs = res.data;
      commit("setAllBlogs", blogs);
    },

    async getActiveBlog({ commit }, blogId) {
      let res = await api.get("blogs/" + blogId);
      let activeBlog = res.data;
      commit("setActiveBlog", activeBlog);
    },

    async createBlog({ commit, state }, newBlogInputs) {
      let res = await api.post("blogs", newBlogInputs);
      let newBlog = res.data;
      commit("setAllBlogs", [...state.blogs, newBlog]);
    },

    // SECTION Comment Actions
    // REVIEW Check this, res.data? etc
    async getCommentsByBlog({ commit, dispatch }, blogId) {
      console.log("store-comments", blogId);
      let res = await api.get("blogs/" + blogId + "/comments");
      // dispatch("getActiveBlog", )
      let activeComments = res.data;
      console.log("store-comments-activeComments", activeComments);
      commit("setComments", activeComments);
    },
  },
});
