<template>
  <form class="form-inline" @submit.prevent="createBlog">
    <div class="form-group">
      <input
        type="text"
        v-model="newBlog.title"
        class="form-control"
        placeholder="Blog Title"
        aria-describedby="helpId"
      />
      <textarea class="form-control" v-model="newBlog.body" rows="10" placeholder="Content..."></textarea>
      <!-- Changed to TextArea
      <input
        type="text"
        class="form-control"
        v-model="newBlog.body"
        placeholder="Content..."
        aria-describedby="helpId"
      />-->
      <input
        type="text"
        class="form-control"
        v-model="newBlog.imgUrl"
        placeholder="Img Url..."
        aria-describedby="helpId"
      />
      <!-- TODO Individual Tags are Strings in Objects, which are then in arrays.... tags: [{ type: String }]-->
      <!-- Take Strings, and, by space, put into an object array, perhaops -->
      <input
        type="text"
        class="form-control"
        v-model="newBlog.tags"
        placeholder="Add tags"
        aria-describedby="helpId"
      />
    </div>
    <button type="submit" class="btn btn-success">Create Blog</button>
  </form>
</template>

<script>
export default {
  name: "blog-form",
  data() {
    return {
      newBlog: {},
    };
  },

  method: {
    createBlog() {
      this.$store.dispatch("createBlog", this.newBlog);
      for (let key in this.newBlog) {
        this.newBlog[key] = null;

        // REVIEW Grabbed this from Cars.vue Greglist
        // "The object retains reference. Therefore, we can't just reset it, and instead we will need to restart the form"
      }
    },
  },
};
</script>

<style>
</style>