<template>
  <main class="home container-fluid">
    <div class="row">
      <!-- <button type="button" class="btn btn-primary" @click="redirectToBlogForm">Create your blog</button>
      <form-component />-->
    </div>
    <div class="row">
      <blogs-component v-for="iBlog in blogs" :key="iBlog.id" :blogProp="iBlog" />
    </div>
  </main>
</template>

<script>
import blogsComponent from "../components/BlogsComponent";
// import formComponent from "../components/FormComponent";
export default {
  name: "home",
  components: {
    blogsComponent,
    formComponent,
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  methods: {
    // redirectToBlogForm() {
    //   this.$store.dispatch("redirectToBlogForm");
  },
};
</script>
