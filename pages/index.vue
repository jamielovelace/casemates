<template>
  <div class="pb-10">
    <hero-banner />
    <div class="-mt-10 lg:-mt-16 z-20 px-2 relative">
      <div
        class="max-w-screen-md mx-auto mb-5"
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-delay="350"
        data-aos-anchor=".c-hero-banner"
      >
        <card color="secondary">
          <div class="py-4 lg:py-6 px-8 lg:px-10 mb-8 text-white">
            <h3 class="text-xl">Covid 19 Update</h3>
            <p class="mt-1">
              In line with government guidelines for non-essential businesses,
              we are excited to announce that we will be reopening for full band
              rehearsals from June 15th.
            </p>
            <p class="mt-1">
              <nuxt-link class="underline" to="/covid-update"
                >Read more</nuxt-link
              >
            </p>
          </div>
        </card>
      </div>
      <div class="px-2">
        <div
          class="max-w-screen-md mx-auto mb-5"
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-anchor=".c-hero-banner"
        >
          <card>
            <div class="p-8 lg:p-10">
              <user-content>
                <h1>Music Rehearsal Studio in Portsmouth</h1>
                <p>
                  Casemates has been an established music rehearsal studio since
                  1994 and is suitable for bands at any stage of their
                  development. We have four rehearsal studios, each equipped
                  with professional backline, valve guitar amps and active PA
                  systems.
                </p>
                <p>
                  We’re situated in the Hilsea Lines in Portsmouth. An 18th
                  Century fortification full of history and impressive
                  architecture. We occupy a grade 2 listed building.
                </p>
              </user-content>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
