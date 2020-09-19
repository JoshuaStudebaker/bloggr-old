<template>
  <div class="blog-window">
    <h3>{{activeBlog.title}}</h3>
    <p>{{activeBlog.body}}</p>
    <comments-component
      v-for="iComment in activeComments"
      :key="iComment.id"
      :commentsProp="iComment"
    />
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
    this.$store.dispatch("getCommentsByBlog", this.$route.params.blogId);
  },
  computed: {
    activeBlog() {
      return this.$store.state.activeBlog;
    },
    activeComments() {
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