import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";
import { blogsService } from "../services/BlogsService";

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

    // SECTION Blog Service Actions
    async getAllBlogs({ commit }) {
      let blogs = await blogsService.getAllBlogs();
      commit("setAllBlogs", blogs);
    },

    async getActiveBlog({ commit }, blogId) {
      console.log("store", blogId);
      let blog = await blogsService.getActiveBlog(blogId);
      console.log("store", blog);
      commit("setActiveBlog", blog);
    },

    async createBlog({ commit, state }, blogInputs) {
      let addedBlog = await blogsService.createBlog(blogInputs);
      commit("setAllBlogs", [...state.blogs, addedBlog]);
    },

    async getCommentsByBlog({ commit }, blogId) {
      let activeComments = await blogsService.getCommentsByBlog(blogId);
      commit("setComments", activeComments);
    },
  },
});
