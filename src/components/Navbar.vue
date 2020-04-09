<template>
  <b-navbar wrapper-class="container">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <img
          src="./../assets/three_tails.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        About Me
      </b-navbar-item>
      <b-navbar-item href="#">
        My Services
      </b-navbar-item>
      <b-navbar-item href="#">
        Boarding Forms
      </b-navbar-item>
      <b-navbar-item href="#">
        Contact
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-dropdown label="Account">
        <b-navbar-item href="#">
          My Bookings
        </b-navbar-item>
        <b-navbar-item href="#">
          My Account
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
