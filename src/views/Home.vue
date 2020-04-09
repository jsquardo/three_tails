<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Slideshow />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Slideshow
  }
};
</script>
