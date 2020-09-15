<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MyComp />
  </div>
</template>

<script>
import MyComp from "@/components/MyComp.vue";

export default {
  name: "Home",
  components: {
    MyComp
  }
};
</script>
