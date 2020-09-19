<template>
  <div class="home">
    <h1>Welcome</h1>
    <!-- TODO Create Form with newBlog inputs -->
    <div>
      <form class="form-inline" @submit.prevent="createBlog">
        <div class="form-group">
          <input
            type="text"
            v-model="newBlog.title"
            class="form-control"
            placeholder="Blog Title"
            aria-describedby="helpId"
          />
          <input
            type="text"
            class="form-control"
            v-model="newBlog.body"
            placeholder="Type..."
            aria-describedby="helpId"
          />
        </div>
        <button type="submit" class="btn btn-success">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </form>
    </div>
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
