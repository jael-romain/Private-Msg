<template>
  <q-page flex column>
    <div class="q-pa-md column col">
      <q-chat-message
        v-for="(message, key) in msgs"
        :key="key"
        :text="[message.msg]"
        :sent="message.sender == 'yes' ? true : false"
        :bg-color="message.sender == 'yes' ? 'primary' : 'grey-5'"
        :text-color="message.sender == 'yes' ? 'white' : ''"
      />
    </div>
    <q-footer elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>
          <q-form @submit.prevent="onsend">
            <q-input standout="bg-grey-1 text-white" square filled dense placeholder="Enter Message" v-model="new_msg" id="msg_input">
              <template v-slot:after>
                <q-btn type="submit" class="glossy" square dense unelevated icon="send" text-color="white" @click="onsend"/>
              </template>
            </q-input>
          </q-form>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      new_msg: "",
    };
  },

  computed: {
    ...mapState('store', ['msgs'])
  },

  methods: {
    ...mapActions("store", ["get_chat", "stop_chat", "send_msg"]),
      onsend() {
          this.send_msg({
            message: {
              msg : this.new_msg,
              sender : 'yes'
            },

            other_user_id: this.$route.params.user_chat_id
          })
        this.new_msg = ""
      }
  }, 

  mounted() {
    
    this.get_chat(this.$route.params.user_chat_id)
  },

  destroyed() {
    this.stop_chat()
  }
};
</script>

<style scoped>

</style>