<template>
  <q-page>
    <div class="q-pa-md shadow-up-14 absolute-center" style="width: 90%">
      <q-splitter v-model="splitterModel" style="height: 400px">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-primary">
            <q-tab name="info" icon="pageview" label="Info" />
            <q-tab name="register" icon="account_box" label="Register" />
            <q-tab name="login" icon="people" label="Login" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="info">
              <div class="text-h4 q-mb-md">PRIVATE MSG</div>
              <p>Jael Romain <br> Hasie Alexander <br> Sean Woodroff</p>
              <p>Private Msg is a simple instant messaging app, that allows users to chat in real time with their peers. This was done using vue.js which is a Javascript framework for building frontend UIs and Quasar which is a vue.js framework used to style vue components. Firebase was used at the backend to store user's information (name , emails , messages.....)</p>
            </q-tab-panel>

            <q-tab-panel name="register">
              <Credentials :tab="tab" />
            </q-tab-panel>

            <q-tab-panel name="login">
              <credentials :tab="tab" />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import Credentials from "../components/Credentials.vue";
export default {
  components: {
    Credentials
  },

  data() {
    return {
      tab: "info",
      splitterModel: 20
    };
  }
};
</script>
