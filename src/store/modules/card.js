import * as types from '../mutation-types'
import * as constants from '../config'

import axios from 'axios'

// initial state
const state = {
  cardList: [],
  nextHref: '',
  nextData: [],
  scrollLoading: false
}

// getters
const getters = {
  cardList: state => state.cardList,
  scrollLoading: state => state.scrollLoading
}

// actions
const actions = {
  // mutation 不能异步；state要在mutation里修改
  getData: ({ commit }) => {
    // https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=e582b63d83a5fb2997d1dbf2f62705da&limit=50&offset=0&tags=chill%20house
    axios.get(constants.API + '&tags=' + constants.TYPE.chill + '%20house').then(response => {
      response.data.collection.forEach(function (item) {
        item.isActive = false
        item.isPlaying = false
      })
      console.log(response.data.collection)
      commit(types.CHANGE_DATA, {list: response.data.collection, href: response.data.next_href})
      commit(types.FORMAT_IMG_URL)
      commit(types.FORMAT_SONG_TITLE)
      // console.log(state.cardList.length)
    }, response => {
      console.log('请求出错')
    })
  },
  loadMore: ({ commit }) => {
    axios.get(state.nextHref).then(response => {
      response.data.collection.forEach(function (item) {
        item.isActive = false
        item.isPlaying = false
      })
      commit(types.CHANGE_NEXT_DATA, {data: response.data.collection, href: response.data.next_href})
      commit(types.FORMAT_IMG_URL, {img: response.data.collection})
      // commit(types.RECOVER_SCROLL)
    })
  },
  loadStop: ({ commit }) => {
    commit(types.RECOVER_SCROLL)
  }
}

// mutations
const mutations = {
  [types.CHANGE_DATA] (state, {list, href}) {
    state.cardList = list
    state.nextData = list
    state.nextHref = href
  },
  [types.FORMAT_IMG_URL] (state) {
    state.nextData.forEach(function (item) {
      if (item.artwork_url) item.artwork_url = item.artwork_url.replace('large', 't300x300')
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
    state.cardList = state.cardList.concat(data)
    // console.log(state.cardList)
    state.nextHref = href
    // 这里要改成false
    state.scrollLoading = false
  },
  [types.RECOVER_SCROLL] (state) {
    state.scrollLoading = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
