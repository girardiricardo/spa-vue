import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import firebase from 'firebase'

Vue.use(Vuetify)

firebase.initializeApp({
  apiKey: 'AIzaSyB52BNYe4un14blQWrMV6qe078zamYEVFs',
  authDomain: 'vue-spa-5c885.firebaseapp.com',
  databaseURL: 'https://vue-spa-5c885.firebaseio.com',
  projectId: 'vue-spa-5c885'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
