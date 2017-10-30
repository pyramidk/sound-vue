<template lang="pug">
  div(
    v-show="playerShow"
    class="player"
  )
    audio(
      :src="playNow.stream_url + '?client_id=e582b63d83a5fb2997d1dbf2f62705da'"
      ref="audio"
      :loop="loopOne"
    )
    div(class="container")
      div(class="player-main")
        div(class="player-section player-info")
          img(
            class="player-image"
            :src="playNow.user.avatar_url"
          )
          div(class="song-card-details")
            a(
              class="song-card-title"
              :title="playNow.title"
            ) {{ playNow.title }}
            a(
              class="song-card-user-username"
              title="Lulleaux"
            ) {{ playNow.user.username }}
        div(class="player-section")
          div(
            class="player-button"
            @click="playNext(playNum - 1)"
          )
            i(class="icon ion-ios-rewind")
          div(class="player-button")
            i(
              v-show="!playStatus"
              class="icon ion-ios-play"
              @click='play(playNum)'
            )
            i(
              v-show="playStatus"
              class="icon ion-ios-pause"
              @click='pause(playNum)'
            )
          div(
            class="player-button"
            @click="playNext(playNum + 1)"
          )
            i(class="icon ion-ios-fastforward")
        div(class="player-section player-seek")
          div(
            class="player-seek-bar-wrap"
            ref="seekWrap"
            @click="progressChange($event)"
          )
            div(
              class="player-seek-bar"
              ref="playerSeekBar"
            )
              div(
                class="player-seek-duration-bar"
                :style="{width: durationBar + '%'}"
              )
                div(
                  class="player-seek-handle"
                  @mousdown="progressChange($event)"
                )
          div(class="player-time")
            span {{ currentTime }}
            span(class="player-time-divider")
            span {{ duration  }}
        div(class="player-section")
          div(
            class="player-button"
            :class="{ active: loopOne }"
            @click="repeatOne"
          )
            i(class="icon ion-loop")
          div(
            class="player-button"
            :class="{ active: random }"
            @click="randomPlay"
          )
            i(class="icon ion-shuffle")
          div(class="player-button top-right popover")
            i(class="icon ion-android-list")

          div(class="player-button player-volume-button")
            div(
              class="player-volume-button-wrap"
              @click="muteVolume"
            )
              i(class="icon ion-android-volume-up")
              i(class="icon ion-android-volume-mute")
          div(class="player-volume")
            div(
              class="player-seek-bar-wrap"
              ref="volumeWrap"
              @click="volumeChange($event)"
            )
              div(class="player-seek-bar")
                div(class="player-seek-duration-bar"
                :style="{ width: volumeDuration + '%' }"
              )
                div(class="player-seek-handle")
</template>

<script>
import { mapGetters } from 'vuex'
import * as aTypes from '../store/action-types'

export default {
  data () {
    return {
      playerShow: false,
      currentTime: '00:00',
      duration: '00:00',
      playNum: 0,
      loopOne: false,
      random: false,
      clear: {},
      durationBar: 0,
      barWidth: 0,
      volumeDuration: 50
    }
  },
  methods: {
    play (index) {
      this.$store.dispatch(aTypes.MUSIC_PLAY, index)
      this.$nextTick(() => {
        console.log('开始播放')
        this.$refs.audio.play()
        this.timeChange()
        this.playNum = index
        // 得到bar的宽
        this.barWidth = this.$refs.playerSeekBar.offsetWidth
      })
      if (!this.playerShow) this.playerShow = true
    },
    pause (index) {
      this.$store.dispatch(aTypes.MUSIC_STOP)
      this.$refs.audio.pause()
      clearInterval(this.clear)
      console.log('暂停播放')
    },
    timeFormat (number) {
      let minute = parseInt(number / 60)
      let second = parseInt(number % 60)
      minute = minute > 10 ? minute : '0' + minute
      second = second >= 10 ? second : '0' + second
      return minute + ':' + second
    },
    timeChange () {
      this.clear = setInterval(() => {
        this.currentTime = this.timeFormat(this.$refs.audio.currentTime)
        if (isNaN(this.$refs.audio.duration)) {
          this.duration = '00:00'
        } else {
          this.duration === '00:00' ? this.duration = this.timeFormat(this.$refs.audio.duration) : ''
          this.durationBar = (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100
          if (this.durationBar === 100) {
            clearInterval(this.clear)
            if (this.random) {
              let len = this.playList.length
              let number = Math.floor(Math.random() * len)
              this.playNext(number)
            }
            if (!this.loopOne && !this.random) this.playNext(this.playNum + 1)
          }
        }
      }, 1000)
    },
    progressChange (event) {
      let startPosition, movePosition, percent
      // 开始位置
      startPosition = this.$refs.playerSeekBar.offsetLeft
      // 鼠标移动的位置
      movePosition = event.clientX
      percent = (movePosition - startPosition) / this.barWidth
      // 得到百分比，然后和总时间相乘得到出currenttime
      this.$refs.audio.currentTime = this.$refs.audio.duration * percent
      this.currentTime = this.timeFormat(this.$refs.audio.currentTime)
      this.durationBar = (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100
    },
    playNext (index) {
      this.playNum = index
      this.$store.dispatch('getPlayData', index)
      this.play(index)
    },
    repeatOne () {
      this.loopOne = !this.loopOne
      this.random = false
    },
    randomPlay () {
      this.random = !this.random
      this.loopOne = false
    },
    muteVolume () {
      this.$refs.audio.volume = 0
      this.volumeDuration = 0
    },
    volumeChange (event) {
      let width, startPosition, movePosition, percent
      width = this.$refs.volumeWrap.offsetWidth
      startPosition = this.$refs.volumeWrap.offsetLeft
      movePosition = event.clientX
      percent = (movePosition - startPosition) / width
      this.$refs.audio.volume = percent
      this.volumeDuration = percent * 100
    }
  },
  computed: mapGetters([
    'playNow',
    'playStatus',
    'playList'
  ])
}
</script>

