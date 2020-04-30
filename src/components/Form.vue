<template>
  <section>
    <b-field
      label="Name"
      :label-position="labelPosition"
    >
      <b-input
        placeholder="Name"
        type="name"
        :v-model="name"
      ></b-input>
    </b-field>

    <b-field
      label="Email"
      :label-position="labelPosition"
    >
      <b-input
        placeholder="Email"
        type="email"
      >
      </b-input>
    </b-field>

    <b-field
      label="Subject"
      :label-position="labelPosition"
    >
      <b-input
        placeholder="Subject"
        type="text"
      >
      </b-input>
    </b-field>

    <!-- <b-field>
      <b-input
        placeholder="URL"
        type="url"
      ></b-input>
    </b-field> -->

    <b-field
      class="mb_none"
      label="Message"
      :label-position="labelPosition"
    >
      <b-input
        type="textarea"
        minlength="10"
        maxlength="100"
        placeholder="Write your message..."
      >
      </b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button is-primary">
          Send message
        </button>
      </p>
    </b-field>
  </section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      labelPosition: "inside",
      name: ""
    };
  }
};
</script>