import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  list: []
}

const mutations = {
  start () {
    axios.get('https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=e582b63d83a5fb2997d1dbf2f62705da&limit=50&offset=0&tags=chill%20house').then(response => {
      console.log(response)
      state.list = response.data.collection
      state.list.forEach(function (item) {
        item.artwork_url = item.artwork_url.replace('large', 't300x300')
      })
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
  list: state => state.list
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
