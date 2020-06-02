<template>
  <div class="rounded-md shadow-xl" :class="`bg-${color}`">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style scoped></style>
