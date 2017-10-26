import * as aTypes from '../action-types'
import * as types from '../mutation-types'
import * as constants from '../config'

import axios from 'axios'

const state = {
  cardList: [],
  nextHref: '',
  nextData: [],
  scrollLoading: false,
  typeNow: 'chill',
  width: 10,
  formateList: [],
  currentPage: 1
}

const getters = {
  cardList: state => state.cardList,
  scrollLoading: state => state.scrollLoading,
  typeNow: state => state.typeNow,
  formateList: state => state.formateList
}

const actions = {
  [aTypes.GET_MUSIC_LIST]: ({ commit }, index) => {
    commit(types.CLEAR_DATA, { type: index })
    axios.get(`${constants.API}&tags=${constants.TYPE[index]}`)
      .then(resp => {
        resp.data.collection.forEach(item => {
          commit(types.FORMAT_RESPONSE, { para: item })
        })
        commit(types.GET_WIDTH, { width: resp.data.collection.length })
        commit(types.GET_DATA, { list: resp.data.collection, href: resp.data.next_href })
        commit(types.FORMAT_SONG_TITLE)
      }, response => {
        console.log('请求出错')
      })
      .then(() => {
        axios.get(`${constants.IMAGEAPI}${constants.TYPE[index]}&rpp=40&image_size=440&consumer_key=bSMgHdOHOQICt1q6gkNCumjh1hsLzkn9gmEZ3zcv`)
          .then(resp => {
            commit(types.CHANGE_IMG_URL, { imgData: resp.data.photos })
          })
      })
  },
  loadMore: ({ commit }) => {
    axios.get(state.nextHref)
      .then(resp => {
        resp.data.collection.forEach(item => {
          commit(types.FORMAT_RESPONSE, { para: item })
        })
        commit(types.GET_WIDTH, { width: resp.data.collection.length })
        commit(types.CHANGE_NEXT_DATA, { data: resp.data.collection, href: resp.data.next_href })
      })
      .then(() => {
        commit(types.GET_CURRENT_PAGE)
        axios.get(constants.IMAGEAPI + state.typeNow + '&rpp=40' + '&image_size=440&consumer_key=bSMgHdOHOQICt1q6gkNCumjh1hsLzkn9gmEZ3zcv' + '&page=' + state.currentPage)
          .then(resp => {
            commit(types.CHANGE_IMG_URL, { imgData: resp.data.photos })
          })
      })
  },
  loadStop: ({ commit }) => {
    commit(types.RECOVER_SCROLL)
  },
  clear: ({ commit }) => {
    commit(types.CLEAR_DATA)
  }
}

const mutations = {
  [types.FORMAT_RESPONSE] (state, { para }) {
    para.isActive = false
    para.isPlaying = false
    para.artwork_url = ''
    para.user.avatar_url = ''
  },
  [types.GET_CURRENT_PAGE] (state) {
    state.currentPage ++
  },
  [types.GET_DATA] (state, { list, href }) {
    state.nextData = list
    state.nextHref = href
  },
  [types.FORMAT_SONG_TITLE] (state) {
    state.nextData.forEach(item => {
      if (!item.title) return ''
      const arr = item.title.replace('–', '-').split(' - ')
      item.title = arr[arr.length - 1].split(' (')[0]
    })
  },
  [types.CHANGE_IMG_URL] (state, { imgData }) {
    for (let i = 0; i < state.width; i++) {
      state.nextData[i].artwork_url = imgData[i].image_url
      state.nextData[i].user.avatar_url = imgData[i].image_url
    }
    // 这里得到最终需要渲染的数据
    state.cardList = state.cardList.concat(state.nextData)
  },
  [types.GET_WIDTH] (state, { width }) {
    state.width = width
  },
  [types.CHANGE_NEXT_DATA] (state, { data, href }) {
    state.nextData = data
    state.nextHref = href
    state.scrollLoading = false
  },
  [types.RECOVER_SCROLL] (state) {
    state.scrollLoading = true
  },
  // router
  [types.CLEAR_DATA] (state, { type }) {
    state.cardList = []
    state.typeNow = type
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
