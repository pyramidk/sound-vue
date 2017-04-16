<template>
  <div class="songs-row grid">
    <div class="col-1-5 clearfix" v-for="item in list">
      <div class="card song-card">
        <div class="song-card-image" :style="{ backgroundImage: 'url(' + item.artwork_url + ')'}">
          <div class="toggle-play-button">
            <i class="toggle-play-button-icon ion-ios-play"></i>
          </div>
        </div>
        <div class="song-card-user">
          <img alt="user avatar" class="song-card-user-image" src="">
          <div class="song-card-details">
            <a class="song-card-title" href="/#/songs/160771494" title="">When The Beat Drops Out</a>
            <a class="song-card-user-username" href="/#/users/6433865" title="Lulleaux">Lulleaux</a>
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
  computed: mapGetters([
    'list'
  ])
}
</script>

