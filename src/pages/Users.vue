<template>
  <q-page>
    <q-list class="q-pa-md" separator>
      <q-item v-for="(user, key) in users" :key="key" clickable v-ripple :to="'/chat/' + key">
        <q-item-section avatar>
          <q-avatar
            square
            :color="user.online ? 'primary' : 'blue-grey-12'"
            text-color="white"
          >{{ user.name.charAt(0) }}</q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("store", ["users"])
  }
};
</script>

<style>
</style>