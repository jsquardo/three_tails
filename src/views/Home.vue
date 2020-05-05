<template>
  <div class="home">
    <Navbar />
    <Hero />
    <div class="container">
      <div class="flex_it mt-2 mb-2">
        <Slideshow />
        <Appointment />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Slideshow,
    Appointment,
    Footer
  }
};
</script>

<style>
.mb-2 {
  margin-bottom: 2rem !important;
}
</style>