<script>

import Nav from './views/Nav.vue'

export default{
  name: 'App',
  components:{
    Nav
  }
}

</script>

<template>
  <div class="flex w-full bg-yellow-400">
    <div>
      <Nav />
    </div>
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
