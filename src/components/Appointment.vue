<template>
  <div class="container">
    <div class="calendar">
      <h1 class="title has-text-centered">Book an Appointment</h1>
      <v-date-picker
        v-model="range"
        mode="range"
        is-inline
      />
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {range: {}};
  }
};
</script>

<style lang="scss">
.calendar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}
</style>