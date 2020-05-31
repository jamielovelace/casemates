<template>
  <div class="py-3 px-5 bg-black">
    <div class="flex items-center justify-between max-w-screen-lg mx-auto">
      <logo class="w-32 sm:w-auto" />
      <nav class="block">
        <ul class="flex">
          <li
            v-for="(link, index) in links"
            :key="`link-${index}`"
            class="ml-2 md:text-lg"
          >
            <nuxt-link
              :to="link.url"
              class="block p-3 py-2 md:px-5 text-white opacity-75 hover:opacity-100 transition duration-200"
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
          name: 'Contact',
          url: '/contact'
        },
        {
          name: 'Book',
          url: '/book'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
