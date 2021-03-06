import Vue from 'vue'

import checkToken from 'mixins/check-token'

import App from './App'
import DswLoading from 'plugins/loading'

import './index.styl'

Vue.config.productionTip = false

Vue.use(DswLoading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  mixins: [checkToken],
  render: (h) => h(App)
})
