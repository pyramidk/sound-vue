import * as aTypes from '../action-types'
import * as mTypes from '../mutation-types'
import {
  API,
  IMAGE_API,
  TYPE
} from '../config'

import axios from 'axios'

const state = {
  cardList: [],
  nextHref: '',
  nextData: [],
  scrollLoading: false,
  typeNow: 'chill',
  width: 10,
  currentPage: 1
}

const getters = {
  cardList: state => state.cardList,
  scrollLoading: state => state.scrollLoading,
  typeNow: state => state.typeNow
}

const actions = {
  [aTypes.GET_MUSIC_LIST]: ({ commit }, index) => {
    commit(mTypes.CLEAR_DATA, { type: index })
    axios.get(`${API}&tags=${TYPE[index]}`)
      .then(resp => {
        const songs = resp.data.collection.map(item => {
          return {
            ...item,
            [item.isActive]: false,
            [item.isPlaying]: false,
            [item.artwork_url]: '',
            [item.user.avatar_url]: ''
          }
        })
        // commit(mTypes.GET_WIDTH, { width: resp.data.collection.length })
        commit(mTypes.GET_DATA, {
          list: songs,
          href: resp.data.next_href
        })
        // commit(mTypes.FORMAT_SONG_TITLE)
      }, response => {
        console.log('请求出错')
      })
      .then(() => {
        axios.get(`${IMAGE_API}${TYPE[index]}&rpp=40&image_size=440&consumer_key=bSMgHdOHOQICt1q6gkNCumjh1hsLzkn9gmEZ3zcv`)
          .then(resp => {
            commit(mTypes.CHANGE_IMG_URL, { imgData: resp.data.photos })
          })
      })
  },
  loadMore: ({ commit }) => {
    axios.get(state.nextHref)
      .then(resp => {
        const songs = resp.data.collection.map(item => {
          return {
            ...item,
            [item.isActive]: false,
            [item.isPlaying]: false,
            [item.artwork_url]: '',
            [item.user.avatar_url]: ''
          }
        })
        commit(mTypes.GET_WIDTH, { width: resp.data.collection.length })
        commit(mTypes.CHANGE_NEXT_DATA, { data: songs, href: resp.data.next_href })
      })
      .then(() => {
        commit(mTypes.GET_CURRENT_PAGE)
        axios.get(IMAGE_API + state.typeNow + '&rpp=40' + '&image_size=440&consumer_key=bSMgHdOHOQICt1q6gkNCumjh1hsLzkn9gmEZ3zcv' + '&page=' + state.currentPage)
          .then(resp => {
            commit(mTypes.CHANGE_IMG_URL, { imgData: resp.data.photos })
          })
      })
  },
  loadStop: ({ commit }) => {
    commit(mTypes.RECOVER_SCROLL)
  },
  clear: ({ commit }) => {
    commit(mTypes.CLEAR_DATA)
  }
}

const mutations = {
  [mTypes.GET_CURRENT_PAGE] (state) {
    state.currentPage ++
  },
  [mTypes.GET_DATA] (state, { list, href }) {
    state.nextData = list
    state.nextHref = href
  },
  [mTypes.FORMAT_SONG_TITLE] (state) {
    state.nextData.forEach(item => {
      if (!item.title) return ''
      const arr = item.title.replace('–', '-').split(' - ')
      item.title = arr[arr.length - 1].split(' (')[0]
    })
  },
  [mTypes.CHANGE_IMG_URL] (state, { imgData }) {
    for (let i = 0; i < state.width; i++) {
      state.nextData[i].artwork_url = imgData[i].image_url
      state.nextData[i].user.avatar_url = imgData[i].image_url
    }
    state.cardList = state.cardList.concat(state.nextData)
  },
  [mTypes.GET_WIDTH] (state, { width }) {
    state.width = width
  },
  [mTypes.CHANGE_NEXT_DATA] (state, { data, href }) {
    state.nextData = data
    state.nextHref = href
    state.scrollLoading = false
  },
  [mTypes.RECOVER_SCROLL] (state) {
    state.scrollLoading = true
  },
  [mTypes.CLEAR_DATA] (state, { type }) {
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
