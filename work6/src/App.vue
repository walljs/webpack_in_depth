<template>
  <div class="title">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: 'Hello Vue by TypeScript'
    }
  }
})
</script>

<style lang="css" scoped>
  .title {
    color: red;
    text-align: center;
  }
</style>
