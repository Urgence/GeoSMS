// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDaUzCfHBBxHd-AweAhrC-tsV5_stILiZQ',
    libraries: 'places'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(require('./App').default)
})