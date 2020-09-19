<template>
  <div class="home container-fluid">
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
};
</script>
