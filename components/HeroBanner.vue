<template>
  <div class="flex flex-col items-center py-16 c-hero-banner">
    <h1 class="text-4xl">Portsmouth's premier rehearsal studios</h1>
    <p><btn class="text-lg" to="/book">Book Now</btn></p>
  </div>
</template>

<script>
import btn from '~/components/Button'
export default {
  components: {
    btn
  }
}
</script>

<style scoped>
.c-hero-banner {
  min-height: 65vh;
}
</style>
