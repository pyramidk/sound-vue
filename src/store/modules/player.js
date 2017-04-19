import * as types from '../mutation-types'

// initial state
const state = {
  playList: '',
  playNow: {
    user: {
      username: ''
    }
  },
  playStatus: false
}

// getters
const getters = {
  playStatus: state => state.playStatus,
  playNow: state => state.playNow
}

// actions
const actions = {
  getPlayData: ({ commit, rootState }, index) => {
    commit(types.GET_PLAYLIST, {rootState})
    commit(types.GET_PLAY_NOW, {index: index})
  },
  play: ({ commit }) => {
    commit(types.CHANGE_TO_PLAY)
  },
  pause: ({ commit }) => {
    commit(types.CHANGE_TO_PAUSE)
  }
}

// mutations
const mutations = {
  [types.GET_PLAYLIST] (state, {rootState}) {
    state.playList = rootState.card.cardList
  },
  [types.GET_PLAY_NOW] (state, {index}) {
    state.playNow = state.playList[index]
    state.playStatus = true
  },
  [types.CHANGE_TO_PLAY] (state) {
    state.playStatus = true
  },
  [types.CHANGE_TO_PAUSE] (state) {
    state.playStatus = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
