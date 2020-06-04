<template>
  <div class="py-10 px-5">
    <div class="max-w-screen-lg mx-auto grid grid-cols-12 gap-10">
      <div class="col-span-12 md:col-span-8" data-anchor="studios">
        <user-content>
          <h1 class="mb-5">Studios</h1>
        </user-content>
        <card
          v-for="(studio, index) in studios"
          :key="index"
          class="md:flex md:flex-row-reverse mb-5"
          data-aos="fade-up"
          data-aos-easing="ease-out"
          :data-aos-delay="(index + 1) * 100"
          data-aos-anchor="[data-anchor='studios']"
        >
          <div class="md:w-1/2">
            <img
              class="md:rounded-r-md w-60 min-h-full object-cover"
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            />
          </div>
          <div class="p-6 md:flex-1 md:w-1/2 flex flex-col items-start">
            <h2 class="text-primary mb-0 text-2xl">The Big Room</h2>
            <p class="text-body mb-1">
              Weekdays: £12/hour (before 5pm). <br />
              Evenings &amp; Weekend: £15/hour
            </p>
            <div class="mb-3">
              <h4 class="text-primary mt-3">Room Size</h4>
              <p class="text-sm">11.2 x 6.7m</p>
              <h4 class="text-primary mt-3">Included Backline</h4>
              <ul class="grid grid-cols-2 text-sm">
                <li class="mb-1">2 x Mackie SRM 450 Speakers</li>
                <li class="mb-1">Allen & Heath ZED10 Mixer</li>
                <li class="mb-1">Drum Kit</li>
                <li class="mb-1">Bass Rig</li>
                <li class="mb-1">2x Valve Guitar Amps</li>
              </ul>
            </div>
            <btn class="mt-auto flex-shrink" to="/book" color="primary"
              >Book Now</btn
            >
          </div>
        </card>
      </div>
      <div class="col-span-12 md:col-span-4">
        <card
          color="black"
          class="text-white"
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-delay="100"
          data-aos-anchor="[data-anchor='studios']"
        >
          <user-content class="p-8">
            <h2>Available Backline</h2>
            <div v-for="(item, index) in backline" :key="index">
              <h3>{{ item.title }}</h3>
              <ul>
                <li
                  v-for="(thing, subindex) in item.items"
                  :key="subindex"
                  class="text-gray-500"
                >
                  {{ thing }}
                </li>
              </ul>
            </div>
          </user-content>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  data() {
    return {
      studios: [{}, {}, {}],
      backline: [
        {
          title: 'Guitar Combos',
          items: [
            'Backstar HT Stage 60',
            'Vox AC30C2',
            'Carvin Belair 2×12',
            'Fender Hot Rod Deluxe III',
            'Orange Rocker 30 x2'
          ]
        },
        {
          title: 'Guitar Heads',
          items: ['Marshall TSL100 JCM2000', 'Orange TH30', 'Blackstar HT20']
        },
        {
          title: 'Guitar Cabs',
          items: ['Marshall 1960a 4×12 x4', 'Orange PPC4x12']
        },
        {
          title: 'Bass Heads',
          items: [
            'Ashdown MAG300',
            'Peavey MAX450',
            'Ashdown MAG600',
            'Ashdown Evo II 500'
          ]
        },
        {
          title: 'Bass Cabs',
          items: [
            'Ampeg SVT Classic 8×10 x2',
            'Ampeg SVT Classic 6×10',
            'Ashdown Mag410',
            'Peavey 410TVX'
          ]
        },
        {
          title: 'Drum Shells',
          items: [
            'Mapex Meridian Series Maple x2',
            'Mapex Meridian Series Birch x2',
            'Pearl Export'
          ]
        }
      ]
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>

<style></style>
