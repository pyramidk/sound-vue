import * as types from '../mutation-types'

// initial state
const state = {
  playList: '',
  playNow: '',
  playStatus: false
}

// getters
const getters = {
  playStatus: state => state.playStatus
}

// actions
const actions = {
  play: ({ commit, rootState }, index) => {
    commit(types.GET_PLAYLIST, {rootState})
    commit(types.GET_PLAY_NOW, {index: index})
    console.log(index)
    console.log(state.playNow)
  },
  playHandler: ({ commit }) => {
    console.log('test')
  }
}

// mutations
const mutations = {
  [types.GET_PLAYLIST] (state, {rootState}) {
    state.playList = rootState.card.cardList
  },
  [types.GET_PLAY_NOW] (state, {index}) {
    state.playNow = state.playList[index].stream_url
    state.playStatus = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
