import Vue from 'vue'
import Vuex from 'vuex'

import card from './modules/card'
import player from './modules/player'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    card,
    player
  },
  strict: debug
})
