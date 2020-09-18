<template>
  <div class="blog-window">
    <h3>{{activeBlog.title}}</h3>
    <p>{{activeBlog.body}}</p>
    <!-- <comments-component v-for="c in comments" :key="c.id/> -->
  </div>
</template>

<script>
import commentsComponent from "../components/CommentsComponent";
export default {
  name: "blog-window",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.blogId);
    this.$store.dispatch("getActiveBlog", this.$route.params.blogId);
    this.$store.dispatch("getCommentsById", this.$route.params.blogId);
    // MOunt Comments
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    comments() {
      return this.$store.state.activeComments;
    },
  },
  components: {
    commentsComponent,
  },

  // methods:{

  // }
};
</script>

<style>
</style>