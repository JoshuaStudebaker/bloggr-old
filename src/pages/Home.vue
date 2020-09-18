<template>
  <div class="home">
    <h1>Welcome</h1>
    <!-- TODO Create Form with newBlog inputs -->
    <blogs-component v-for="iBlog in blogs" :key="iBlog.id" :blogProp="iBlog" />
  </div>
</template>

<script>
import blogsComponent from "../components/BlogsComponent";
export default {
  name: "home",
  data() {
    return {
      newBlog: {},
    };
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  methods: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
    },
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  components: {
    blogsComponent,
  },
};
</script>
