<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <navbar class="flex-shrink" />
      <nuxt class="flex-grow" />
      <site-footer class="flex-shrink mt-auto" />
    </div>
  </div>
</template>
<script>
import navbar from '~/components/Navbar'
import siteFooter from '~/components/Footer'
export default {
  components: {
    navbar,
    siteFooter
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
  @apply bg-white text-body font-body;
}
</style>
