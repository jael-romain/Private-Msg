<template>
  <q-form @submit="submitInfo">
    <q-input
      v-if="tab === 'register'"
      v-model="credentials.name"
      placeholder="Fullname"
      hint="First and Last Names"
      filled
      class="q-my-md"
      :rules="[val => !!val || 'Must enter your name']"
    />

    <q-input
      v-model="credentials.email"
      placeholder="Email"
      hint="Valid Emails Only"
      filled
      class="q-my-md"
      type="email"
      :rules="[val => !!val || 'Must enter your email']"
    />

    <q-input
      v-model="credentials.password"
      placeholder="Password"
      hint="Must be no less than 5 and not exceed 8"
      filled
      class="q-my-md"
      type="password"
      :rules="[ val => val && val.length > 4 && val.length < 9|| 'Invalid Password']"
    />

    <q-btn flat color="primary" :label="tab" @click="submitInfo"/>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["tab"],
  data() {
    return {
      credentials: {
        name: "",
        email: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions("store", ["register_user", "user_login"]),

    submitInfo() {
      if (this.tab === "login") {
        this.user_login(this.credentials);
      } else if (this.tab === "register") {
        this.register_user(this.credentials);
      }
    }
  }
};
</script>

<style>
</style>