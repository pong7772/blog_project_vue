<template>
  <div class="title" v-if="post">{{ post.title }}</div>
  <div v-if="post">{{ post.body }}</div>
</template>

<script>
import getSinglePost from "../composables/getSinglePost";
export default {
  props: ["id"],
  setup(props) {
    const { post, handleData } = getSinglePost(props.id);
    handleData();

    return { post };
  },
};
</script>

<style scoped>
.title {
  font-size: large;
  color: rgb(182, 122, 31);
}
</style>