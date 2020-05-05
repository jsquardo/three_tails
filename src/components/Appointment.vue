<template>
  <div class="form_width">
    <div class="padTopBot">
      <h1 class="title has-text-centered">Book an Appointment</h1>
      <b-field>
        <b-input placeholder="Name" type="name" icon="account" icon-clickable></b-input>
      </b-field>

      <b-field>
        <b-select icon="account" placeholder="How many animals?">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </b-select>
      </b-field>

      <b-field>
        <b-input
          placeholder="Email"
          v-model="email"
          type="email"
          icon="email"
          icon-right="close-circle"
          icon-right-clickable
          @icon-right-click="clearIconClick"
        ></b-input>
      </b-field>

      <b-field>
        <b-datepicker placeholder="Select days..." v-model="dates" icon="calendar-today" range></b-datepicker>
      </b-field>
      <b-field class="last_item">
        <b-input maxlength="200" type="textarea" placeholder="Add a message..."></b-input>
      </b-field>

      <b-field>
        <!-- Label left empty for spacing -->
        <p class="control">
          <button class="button is-primary">Send message</button>
        </p>
      </b-field>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      range: {},
      name: "",
      email: "",
      dates: [],
      comment: ""
    };
  },
  methods: {
    clearIconClick() {
      this.email = "";
    }
  }
};
</script>

<style lang="scss">
.padTopBot {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.button_width {
  max-width: 25%;
}

.last_item {
  margin-bottom: 0 !important;
}

.button {
  background-color: #a7d3d0 !important;
}

/* #a7d3d0 */
</style>