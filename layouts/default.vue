<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<script>
import navbar from '~/components/Navbar'
export default {
  components: {
    navbar
  }
}
</script>
<style>
html {
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-white text-text font-body;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
