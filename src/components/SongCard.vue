<template>
  <div class="songs-row grid" v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollLoading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
    <div class="col-1-5 clearfix" v-for="(item, index) in cardList" :index="index">
      <div class="card song-card">
        <div class="song-card-image" :style="{ backgroundImage: 'url(' + item.artwork_url + ')'}" @click='tooglePlay(index)'>
          <div class="toggle-play-button" :class="{'active': item.isActive, 'is-playing': item.isPlaying}">
            <i class="toggle-play-button-icon ion-ios-play"></i>
            <i class="toggle-play-button-icon ion-radio-waves"></i>
          </div>
        </div>
        <div class="song-card-user">
          <img alt="user avatar" class="song-card-user-image" :src=item.user.avatar_url>
          <div class="song-card-details">
            <a class="song-card-title" :title=item.title>{{item.title}}</a>
            <a class="song-card-user-username" :title=item.user.username>{{item.user.username}}</a>
            <div class="song-heart song-card-heart popover ">
              <i class="icon ion-ios-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      index: ''
    }
  },
  methods: {
    loadMore: function () {
      // 不能多次loading
      this.$store.dispatch('loadStop')
      this.$store.dispatch('loadMore')
    },
    playHandler (index) {
      this.index = index
      this.$store.dispatch('getPlayData', index)
      /* 问题：获取其它组件的refs */
      this.$parent.$parent.$children.forEach(item => {
        // 执行player.vue的play方法
        if (item.$refs.audio) item.play(index)
      })
    },
    pauseHandler (index) {
      this.$parent.$parent.$children.forEach(item => {
        if (item.$refs.audio) item.pause(index)
      })
    },
    tooglePlay (index) {
      this.$nextTick(() => {
        if (!this.$store.state.player.playStatus || this.index !== index) {
          this.playHandler(index)
        } else {
          this.pauseHandler(index)
        }
      })
    }
  },
  computed: mapGetters([
    'cardList',
    'scrollLoading',
    'playStatus'
  ])
}
</script>

