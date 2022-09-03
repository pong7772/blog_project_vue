
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
    const post = ref([]);
    const err = ref("");

    const load = async () => {
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!data.ok) {
          throw Error("No Data Avialable");
        }
        // console.log(await data.json());
        post.value = await data.json();
      } catch (errr) {
        err.value = errr.message;
        console.log(err.value);
      }
    };
    load();
    return { post };
  },
  components: { Post },
};
</script>