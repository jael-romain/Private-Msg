(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),s=(n("a481"),n("96cf"),n("c973")),u=n.n(s),o=(n("7d6e"),n("e54f"),n("0ca9"),n("5b0d"),n("2b0e")),c=n("1f91"),i=n("42d2"),f=n("b178");o["a"].use(f["a"],{config:{},lang:c["a"],iconSet:i["a"]});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],l=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),h=n.n(l),b=n("2f62");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _,v={name:"App",methods:g({},Object(b["b"])("store",["auth_state_change"])),mounted:function(){this.auth_state_change()}},w=v,y=n("2877"),O=Object(y["a"])(w,d,p,!1,null,null,null),k=O.exports,x=(n("f751"),n("7f7f"),n("643a")),j=n.n(x),P=n("59ca"),D=(n("000b"),n("ea7b"),n("66ce"),{apiKey:"AIzaSyBkyhXZX19Gpj69KjLDrA24ZurCh9NDJ60",authDomain:"chat-e0c59.firebaseapp.com",databaseURL:"https://chat-e0c59.firebaseio.com",projectId:"chat-e0c59",storageBucket:"chat-e0c59.appspot.com",messagingSenderId:"1065778268006",appId:"1:1065778268006:web:357a3dd7faf3c5b36aeaa7"}),A=P["initializeApp"](D),S=A.auth(),E=A.database(),I={users:function(e){var t={};return Object.keys(e.users).forEach((function(n){n!==e.info.userid&&(t[n]=e.users[n])})),t}},U={register_user:function(e,t){j()(e),S.createUserWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e);var n=S.currentUser.uid;E.ref("users/"+n).set({name:t.name,email:t.email,online:!0})})).catch((function(e){console.log(e.message)}))},user_login:function(e,t){j()(e),S.signInWithEmailAndPassword(t.email,t.password).then((function(e){console.log(e)})).catch((function(e){console.log(e.message)}))},user_logout:function(){S.signOut()},auth_state_change:function(e){var t=this,n=e.commit,r=e.dispatch,a=e.state;S.onAuthStateChanged((function(e){if(e){var s=S.currentUser.uid;E.ref("users/"+s).once("value",(function(e){var t=e.val();n("set_info",{name:t.name,email:t.email,userid:s})})),r("update_user",{userid:s,updates:{online:!0}}),r("get_users"),t.$router.push("/users")}else r("update_user",{userid:a.info.userid,updates:{online:!1}}),n("set_info",{}),t.$router.replace("/").catch((function(e){if("NavigationDuplicated"!=e.name)throw e}))}))},update_user:function(e,t){j()(e),t.userid&&E.ref("users/"+t.userid).update(t.updates)},get_users:function(e){var t=e.commit;E.ref("users").on("child_added",(function(e){var n=e.val(),r=e.key;t("add_user",{userid:r,details:n})})),E.ref("users").on("child_changed",(function(e){var n=e.val(),r=e.key;t("user_update",{userid:r,details:n})}))},get_chat:function(e,t){var n=e.state,r=e.commit,a=n.info.userid;_=E.ref("chats/"+a+"/"+t),_.on("child_added",(function(e){var t=e.key,n=e.val();r("add_msgs",{msg_id:t,msg_info:n})}))},stop_chat:function(e){var t=e.commit;_&&(_.off("child_added"),t("clear_chat"))},send_msg:function(e,t){j()(e);var n=B.info.userid;E.ref("chats/"+n+"/"+t.other_user_id).push(t.message),t.message.sender="no",E.ref("chats/"+t.other_user_id+"/"+n).push(t.message)}},$={set_info:function(e,t){e.info=t},add_user:function(e,t){o["a"].set(e.users,t.userid,t.details)},user_update:function(e,t){Object.assign(e.users[t.userid],t.details)},add_msgs:function(e,t){o["a"].set(e.msgs,t.msg_id,t.msg_info)},clear_chat:function(e){e.msgs={}}},B={info:{},users:{},msgs:{}},C={namespaced:!0,actions:U,getters:I,mutations:$,state:B};o["a"].use(b["a"]);var J=function(){var e=new b["a"].Store({modules:{store:C},strict:!1});return e},V=n("8c4f"),q=[{path:"/",component:function(){return n.e(4).then(n.bind(null,"713b"))},children:[{path:"",component:function(){return n.e(6).then(n.bind(null,"56b4"))}},{path:"/users",component:function(){return n.e(7).then(n.bind(null,"051b"))}},{path:"/chat/:user_chat_id",component:function(){return n.e(5).then(n.bind(null,"ab55"))}}]}];q.push({path:"*",component:function(){return n.e(3).then(n.bind(null,"e51e"))}});var z=q;o["a"].use(V["a"]);var K=function(){var e=new V["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:z,mode:"hash",base:""});return e},L=function(){return N.apply(this,arguments)};function N(){return N=u()(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof J){e.next=6;break}return e.next=3,J({Vue:o["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=J;case 7:if(t=e.t0,"function"!==typeof K){e.next=14;break}return e.next=11,K({Vue:o["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=K;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(k)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function W(){return X.apply(this,arguments)}function X(){return X=u()(a.a.mark((function e(){var t,n,r,s,u,c,i,f,d;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,n=t.app,r=t.store,s=t.router,u=!0,c=function(e){u=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),f=[void 0],d=0;case 11:if(!(!0===u&&d<f.length)){e.next=29;break}if("function"===typeof f[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,f[d]({app:n,router:s,store:r,Vue:o["a"],ssrContext:null,redirect:c,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new o["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),X.apply(this,arguments)}W()},"5b0d":function(e,t,n){}},[[0,1,2]]]);