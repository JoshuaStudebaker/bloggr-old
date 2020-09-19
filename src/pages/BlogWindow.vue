<template>
  <div class="blog-window">
    <h3>{{activeBlog.title}}</h3>
    <h5>{{activeBlog.creator.name}}</h5>
    <p>{{activeBlog.body}}</p>
    <button type="button" class="btn btn-danger" @click="editRedirect">Edit/Delete Post</button>

    <comments-component
      v-for="iComment in activeComments"
      :key="iComment.id"
      :commentsProp="iComment"
    />
  </div>
</template>
// 
<script>
import commentsComponent from "../components/CommentsComponent";
export default {
  name: "blog-window",
  components: {
    commentsComponent,
  },
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

  methods: {
    editRedirect() {
      this.$store.dispatch("editRedirect", this.activeBlog.id);
    },
  },
};
</script>

<style>
</style>