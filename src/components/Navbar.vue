<template>
  <b-navbar wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="./../assets/TT-LOGO-PNG.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <!-- <router-view></router-view> -->
    </template>

    <template slot="end">
      <b-navbar-item href="#">Home</b-navbar-item>
      <b-navbar-item>About</b-navbar-item>
      <b-navbar-item href="#">My Services</b-navbar-item>
      <b-navbar-item><a href="https://www.dropbox.com/s/yws4irr2xscq3kx/Rainbow%20protocal-merged%20%281%29.pdf?dl=0" target="_blank">Important Files</a></b-navbar-item>
      <b-navbar-item href="#">Contact</b-navbar-item> 
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
