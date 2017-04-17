import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { formatSongTitle } from '../utils/FormatUtils'

Vue.use(Vuex)

const state = {
  bgList: []
}

const mutations = {
  start () {
    axios.get('https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=e582b63d83a5fb2997d1dbf2f62705da&limit=50&offset=0&tags=chill%20house').then(response => {
      console.log(response)
      state.bgList = response.data.collection
      state.bgList.forEach(function (item) {
        item.artwork_url = item.artwork_url.replace('large', 't300x300')
      })
      state.bgList.forEach(formatSongTitle)
      console.log(state.bgList)
    }, response => {
      console.log('请求出错')
    })
  },
  getImgUrl (str) {
    // console.log(str)
    str = str.replace('large', 't300x300')
    // console.log(str)
  }
}

const actions = {
  start: ({ commit }) => commit('start')
}

const getters = {
  bgList: state => state.bgList
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
