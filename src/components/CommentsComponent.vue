<template>
  <div class="comments-component">
    <p>{{commentsProp.body}}</p>
  </div>
</template>

<script>
export default {
  name: "comments-component",
  props: [commentsProp],
  data() {
    return {};
  },
  // computed: {
  //   activeComments() {
  //     return this.$store.state.activeComments;
  //   },
};
</script>

<style>
</style>