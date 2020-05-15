<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'App',  

  methods: {
    ...mapActions("store", ["auth_state_change"])
  },

  mounted() {
    this.auth_state_change()
  }
}
</script>
