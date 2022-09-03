
<template>
  <div class="home">
    <h1>Home</h1>
    <p>Total Item : {{ post.length }}</p>
    <Post :posts="post" />
  </div>
</template>

  <script>
import getPosts from "../composables/getPosts";
import Post from "../components/Post.vue";
export default {
  components: { Post },
  setup() {
    const { post, err, load } = getPosts();
    load();
    return { post };
  },
  components: { Post },
};
</script>