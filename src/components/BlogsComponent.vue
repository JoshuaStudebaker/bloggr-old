<template>
  <div class="blogs-component">
    <router-link :to="{name:'blog-window', params: {blogId: blogProp.id}}">
      <div>
        <h5>{{blogProp.title}}</h5>
        <p>{{blogProp.body}}</p>
      </div>
    </router-link>>
  </div>
</template>

<script>
export default {
  name: "blogs-component",
  props: ["blogProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>