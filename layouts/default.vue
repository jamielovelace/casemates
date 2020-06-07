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
import AOS from 'aos'
import navbar from '~/components/Navbar'
import siteFooter from '~/components/Footer'
export default {
  components: {
    navbar,
    siteFooter
  },
  mounted() {
    AOS.init()
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

img[lazy] {
  transition: filter 1s ease-out;
}
img[lazy='loading'] {
  filter: blur(10px);
}

[data-aos='fade-up'][data-aos='fade-up'] {
  transform: translate3d(0, 50px, 0);
}

[data-aos='fade-down'][data-aos='fade-down'] {
  transform: translate3d(0, -50px, 0);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
