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
  computed: {},
  methods: {},
  components: {},
};
</script>

<style>
</style>