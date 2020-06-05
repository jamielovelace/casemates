<template>
  <div
    class="rounded-md shadow-xl"
    :class="{
      'bg-primary': color === 'primary',
      'bg-secondary': color === 'secondary',
      'bg-black': color === 'black',
      'bg-white': color === 'white'
    }"
  >
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
