<template>
  <div class="home">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero
  }
};
</script>
