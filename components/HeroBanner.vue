<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    class="c-hero-banner overflow-hidden relative flex flex-col items-center justify-center pt-5 pb-32 bg-black"
  >
    <img
      :data-loading="optimisedImage.lqip"
      :data-srcset="optimisedImage.sizes.srcSet"
      :data-src="optimisedImage.src"
      alt="Casemates Rehearsal Room"
      class="absolute z-10 inset-0 w-full h-full object-cover c-hero-banner__image"
    />
    <div
      class="relative text-center z-20"
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-delay="200"
    >
      <h1 class="text-4xl md:text-5xl text-white leading-tight px-5">
        {{ title }}
      </h1>
      <p>
        <btn class="text-lg md:text-xl mt-3" color="primary" to="/book"
          >Book Now</btn
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    optimisedImage() {
      return {
        webp: require(`~/assets/images/big-room.jpg?webp`),
        lqip: require(`~/assets/images/big-room.jpg?resize&size=50`),
        sizes: require(`~/assets/images/big-room.jpg?resize&sizes[]=500&sizes[]=800&sizes[]=1200&sizes=1600`),
        src: require(`~/assets/images/big-room.jpg`)
      }
    }
  }
}
</script>

<style scoped>
.c-hero-banner {
  min-height: 65vh;
}

.c-hero-banner::before {
  content: ' ';
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
}

.c-hero-banner__image {
  transition: all 1s ease-out;
}
.c-hero-banner__image[lazy='loading'] {
  filter: blur(100px);
  transform: scale(1.05);
}
</style>
