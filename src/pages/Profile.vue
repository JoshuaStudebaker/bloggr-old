<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
    <div class="row">
      <form-component />
    </div>
    <div class="row">
      <blogs-component v-for="iBlog in blogs" :key="iBlog.id" :blogProp="iBlog" />
    </div>
  </div>
</template>

<script>
import blogsComponent from "../components/BlogsComponent";
import formComponent from "../components/FormComponent";
export default {
  name: "Profile",
  components: {
    blogsComponent,
    formComponent,
  },
  mounted() {
    this.$store.dispatch("getUserBlogs");
  },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
