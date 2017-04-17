import * as types from '../mutation-types'

import axios from 'axios'

// initial state
// shape: [{ id, quantity }]
const state = {
  cardList: [],
  nextHref: '',
  nextData: []
}

// getters
const getters = {
  cardList: state => state.cardList
}

// actions
const actions = {
  // mutation 不能异步；state要在mutation里修改
  getData: ({ commit }) => {
    console.log('test')
    axios.get('https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=e582b63d83a5fb2997d1dbf2f62705da&limit=40&offset=0&tags=chill%20house').then(response => {
      commit(types.CHANGE_DATA, {list: response.data.collection, href: response.data.next_href})
      commit(types.FORMAT_IMG_URL)
      commit(types.FORMAT_SONG_TITLE)
      console.log(state.cardList.length)
    }, response => {
      console.log('请求出错')
    })
  },
  loadMore: ({ commit }) => {
    axios.get(state.nextHref).then(response => {
      console.log(response)
      commit(types.CHANGE_NEXT_DATA, {data: response.data.collection, href: response.data.next_href})
    })
  }
}

// mutations
const mutations = {
  [types.CHANGE_DATA] (state, {list, href}) {
    state.cardList = list
    state.nextHref = href
    console.log(state.nextHref)
  },
  [types.FORMAT_IMG_URL] (state) {
    state.cardList.forEach(function (item) {
      item.artwork_url = item.artwork_url.replace('large', 't300x300')
    })
  },
  [types.FORMAT_SONG_TITLE] (state) {
    state.cardList.forEach(function (item) {
      if (!item.title) {
        return ''
      }
      const arr = item.title.replace('–', '-').split(' - ')
      item.title = arr[arr.length - 1].split(' (')[0]
    })
  },
  [types.CHANGE_NEXT_DATA] (state, {data, href}) {
    console.log('next')
    state.nextData = data
    console.log(state.nextData)
    state.cardList = state.cardList.concat(data)
    console.log(state.cardList)
    state.nextHref = href
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
