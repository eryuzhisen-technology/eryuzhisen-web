import css1 from '../../common/css/normalize.less'
import css2 from '../../common/css/component.less'

import Vue from 'vue'
import Back from './back.vue'
import store from '../../server/store'

new Vue({
  el: '#app',
  store,
  render: h => h(Back)
})

