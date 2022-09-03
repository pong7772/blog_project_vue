<template>
  <router-link :to="{ name: 'blogDetail', params: { id: post.id } }">
    <div class="post">
      {{ post.title }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["post"],
  setup(props) {},
};
</script>

<style>
.post {
  background: #efefef;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
}
.post:hover {
  background: #d7d4d4;
}
</style>