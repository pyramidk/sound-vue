<template>
  <div class="songs-row grid" v-infinite-scroll="loadMore" infinite-scroll-disabled="scrollLoading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
    <div class="col-1-5 clearfix" v-for="(item, index) in cardList" :index="index">
      <div class="card song-card">
        <div class="song-card-image" :style="{ backgroundImage: 'url(' + item.artwork_url + ')'}" @click='playHandler(index)'>
          <div class="toggle-play-button">
            <i class="toggle-play-button-icon ion-ios-play"></i>
          </div>
        </div>
        <div class="song-card-user">
          <img alt="user avatar" class="song-card-user-image" :src=item.user.avatar_url>
          <div class="song-card-details">
            <a class="song-card-title" href="/#/songs/160771494" :title=item.title>{{item.title}}</a>
            <a class="song-card-user-username" href="/#/users/6433865" :title=item.user.username>{{item.user.username}}</a>
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
    return {}
  },
  methods: {
    loadMore: function () {
      // console.log(this.$store.state)
      // 不能多次loading
      // this.busy = this.$store.state.card.scrollLoading
      this.$store.dispatch('loadMore')
      console.log('执行loadmore')
    },
    playHandler (index) {
      this.$store.dispatch('play', index)
      console.log(this)
      this.$refs.audio.play()
    }
  },
  computed: mapGetters([
    'cardList',
    'scrollLoading'
  ])
}
</script>

