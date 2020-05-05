<template name="Slideshow">
  <div class="inline mt-4 mb-4">
    <div class="slideshow-styles">
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader />
        </template>

        <!-- <template v-slot:pagination>
          <flux-pagination />
        </template>
        <template v-slot:controls>
          <flux-controls />
        </template>-->
      </vue-flux>
    </div>
  </div>
</template>

<script>
import {
  VueFlux,
  // FluxCaption,
  // FluxControls,
  // FluxIndex,
  // FluxPagination,
  FluxPreloader
} from "vue-flux";

export default {
  name: "Slideshow",
  components: {
    VueFlux,
    // FluxCaption,
    // FluxControls,
    // FluxIndex,
    // FluxPagination,
    FluxPreloader
  },
  data: () => ({
    options: {
      allowFullscreen: false,
      allowToSkipTransition: false,
      autohideTime: 2500,
      autoplay: true,
      bindKeys: false,
      delay: 2000,
      enableGestures: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3
    },
    images: [
      "https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ],
    transitions: ["slide"]
  })
};
</script>

<style>
</style>