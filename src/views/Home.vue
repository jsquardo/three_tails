<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Slideshow />
    <Appointment />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slideshow from "../components/Slideshow";
import Appointment from '../components/Appointment'
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
