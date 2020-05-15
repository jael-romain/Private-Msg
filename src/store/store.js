import Vue from 'vue'
import {
  firebaseAuth
} from "boot/firebase"
import {
  firebaseDatabase
} from "src/boot/firebase"


let msg_ref

const getters = {
    users: state => {
        let filtered_list = {}
        Object.keys(state.users).forEach(key => {
            if(key !== state.info.userid){
                filtered_list[key] = state.users[key]
            }
        })
        return filtered_list
    }
}   


const actions = {
  register_user({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
        let id = firebaseAuth.currentUser.uid
        firebaseDatabase.ref("users/" + id).set({
          name: payload.name,
          email: payload.email,
          online: true
        })
      })
      .catch(e => {
        console.log(e.message)
      })
  },

  user_login({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e.message)
      })
  },

  user_logout() { firebaseAuth.signOut()},

  auth_state_change({ commit, dispatch, state }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        // Logged in
        let id = firebaseAuth.currentUser.uid
        firebaseDatabase.ref("users/" + id).once("value", snapshot => {
          let user_info = snapshot.val()
          commit("set_info", {
            name: user_info.name,
            email: user_info.email,
            userid: id
          })
        })

        dispatch("update_user", {
            userid: id,
            updates: {
                online : true
            }
        })

        dispatch("get_users")

        this.$router.push("/users")
      } 
      else {
        // logged out
        dispatch("update_user", {
            userid: state.info.userid,
            updates: {
                online : false
            }
        })
        commit('set_info', {})
        this.$router.replace('/').catch(error => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        })
      }
    });
  },

  update_user({}, payload) {
      if(payload.userid){
        firebaseDatabase.ref("users/" + payload.userid).update(payload.updates)
      }
  },

  get_users({ commit }){
      firebaseDatabase.ref("users").on("child_added", snapshot => {
          let details = snapshot.val()
          let userid = snapshot.key
          commit("add_user", {userid, details})
      })
      firebaseDatabase.ref("users").on("child_changed", snapshot => {
          let details = snapshot.val()
          let userid = snapshot.key
          commit("user_update", {userid, details})
      })
  },

  get_chat({state, commit}, user_chat_id){
      let userid = state.info.userid
      msg_ref = firebaseDatabase.ref("chats/" + userid + "/" + user_chat_id)
      msg_ref.on("child_added", snapshot => {
        let msg_id = snapshot.key  
        let msg_info = snapshot.val()
          
        commit("add_msgs", {msg_id, msg_info })
      })
  },

  stop_chat({ commit }){
      if(msg_ref){
          msg_ref.off("child_added")
          commit("clear_chat")
      }
  },

  send_msg({}, payload){
    let userid = state.info.userid
    firebaseDatabase.ref("chats/" + userid + "/" + payload.other_user_id).push(payload.message)

    payload.message.sender = "no"

    firebaseDatabase.ref("chats/" + payload.other_user_id + "/" + userid).push(payload.message)
  }

}


const mutations = {
  set_info(state, payload) {
    state.info = payload
  },

  add_user(state, payload) {
    Vue.set(state.users, payload.userid, payload.details)
  },

  user_update(state, payload){
    Object.assign(state.users[payload.userid], payload.details)
  },

  add_msgs(state, payload){
    Vue.set(state.msgs, payload.msg_id, payload.msg_info)
  },

  clear_chat(state){
    state.msgs = {}
  }

}

const state = {

  info: {},
  users: {},
  msgs: {}

}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}
