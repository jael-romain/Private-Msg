<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          class="glossy"
          square
          unelevated
          color="primary"
          icon="arrow_back_ios"
          v-go-back.single
        />

        <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>

        <q-btn
          v-if="$route.fullPath.includes('/users') && info.userid"
          @click="user_logout"
          class="glossy absolute-right q-ma-sm"
          square
          unelevated
          color="primary"
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions("store", ["user_logout"])
  },

  computed: {
    ...mapState("store", ["info"]),
    title() {
      let title = this.$route.fullPath;
      if (title === "/") {
        return "PRIVATE MSG";
      } else if (title === "/users") {
        return "Users";
      } else {
        return "Chat";
      }
    }
  }
};
</script>
