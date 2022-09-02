
<template>
  <div class="home">
    <h1>Home</h1>
    <Post :posts="post" />
  </div>
</template>

  <script>
import { ref } from "vue";
import Post from "../components/Post.vue";
export default {
  components: { Post },
  setup() {
    const post = ref([
      {
        title: "welcome to the Pong blog",
        body: "heh There thanks for visiting us",
        id: 1,
      },
      { title: "Top 5 css tips", body: "Learn css by created", id: 2 },
    ]);
    return { post };
  },
  components: { Post },
};
</script>