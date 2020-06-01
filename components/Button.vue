<template>
  <component
    :is="type"
    :href="href"
    :to="to"
    class="transition duration-200 transform active:scale-95 px-8 py-2 rounded-full text-white inline-block cursor-pointer font-bold"
    :class="`bg-${color} hover:bg-${color}-light`"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    type() {
      if (this.href) {
        return 'a'
      } else {
        return 'nuxt-link'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
