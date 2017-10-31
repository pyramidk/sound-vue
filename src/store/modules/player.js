import * as aTypes from '../action-types'
import * as mTypes from '../mutation-types'

const state = {
  playList: '',
  playNow: {
    user: {
      username: ''
    }
  },
  playStatus: false,
  activeNum: 0
}

const actions = {
  getPlayData: ({ commit, rootState }, index) => {
    commit(mTypes.GET_PLAYLIST, { rootState })
    commit(mTypes.GET_PLAY_NOW, { index: index })
  },
  [aTypes.MUSIC_PLAY] ({ commit, rootState }, index) {
    commit(mTypes.CHANGE_TO_PLAY, { rootState, index: index })
  },
  [aTypes.MUSIC_STOP] ({ commit, rootState }) {
    commit(mTypes.CHANGE_TO_PAUSE, { rootState })
  }
}

const mutations = {
  [mTypes.GET_PLAYLIST] (state, { rootState }) {
    state.playList = rootState.card.cardList
  },
  [mTypes.GET_PLAY_NOW] (state, { index }) {
    state.playNow = state.playList[index]
  },
  [mTypes.CHANGE_TO_PLAY] (state, { rootState, index }) {
    state.playStatus = true
    // active
    if (state.activeNum !== index || state.activeNum === 0) {
      rootState.card.cardList[state.activeNum].isActive = false
      rootState.card.cardList[state.activeNum].isPlaying = false
      if (!rootState.card.cardList[state.activeNum].isPlaying) {
        state.activeNum = index
      }
      rootState.card.cardList[index].isActive = true
      rootState.card.cardList[index].isPlaying = true
    } else {
      rootState.card.cardList[index].isPlaying = true
    }
  },
  [mTypes.CHANGE_TO_PAUSE] (state, { rootState }) {
    state.playStatus = false
    // playing相关
    rootState.card.cardList[state.activeNum].isPlaying = false
  }
}

export default {
  state,
  actions,
  mutations
}
