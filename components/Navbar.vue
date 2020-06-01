<template>
  <div
    class="py-3 px-5 bg-black border-b-4 lg:border-b-6 border-solid border-primary"
  >
    <div class="flex items-center justify-between max-w-screen-lg mx-auto">
      <nuxt-link to="/"><logo class="w-32 sm:w-auto"/></nuxt-link>
      <nav class="block">
        <ul class="flex">
          <li
            v-for="(link, index) in links"
            :key="`link-${index}`"
            class="ml-2 md:text-lg lg:text-xl"
          >
            <nuxt-link
              :to="link.url"
              class="block p-3 py-2 md:px-5 md:py-1 text-white opacity-75 hover:opacity-100 transition duration-200"
              :class="{}"
              >{{ link.name }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import logo from '~/components/Logo.vue'
export default {
  components: {
    logo
  },
  data() {
    return {
      links: [
        {
          name: 'Studios',
          url: '/studios'
        },
        {
          name: 'Book',
          url: '/book'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply opacity-100;
}
</style>
