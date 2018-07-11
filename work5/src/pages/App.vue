<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Webpack'
    }
  }
}
</script>

<style lang="css" scoped>
.title {
  color: red;
}
</style>
