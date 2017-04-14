<template>
  <div class="player">
  	<audio src="https://api.soundcloud.com/tracks/185991285/stream?client_id=e582b63d83a5fb2997d1dbf2f62705da"></audio>
    <div class="container">
      <div class="player-main">
        <div class="player-section player-info">
          <img alt="song artwork" class="player-image" src="https://i1.sndcdn.com/artworks-000081873185-0coftk-large.jpg">
          <div class="song-card-details">
            <a class="song-card-title" href="" title="">Words</a>
            <a class="song-card-user-username" href="/#/users/6433865" title="Lulleaux">Lulleaux</a>
          </div>
        </div>
        <div class="player-section">
          <div class="player-button">
            <i class="icon ion-ios-rewind"></i>
          </div>
          <div class="player-button">
            <i class="icon ion-ios-pause"></i>
          </div>
          <div class="player-button">
            <i class="icon ion-ios-fastforward"></i>
          </div>
        </div>
        <div class="player-section player-seek">
          <div class="player-seek-bar-wrap">
            <div class="player-seek-bar">
              <div class="player-seek-duration-bar" style="width: 32.6754%;">
                <div class="player-seek-handle"></div>
              </div>
            </div>
          </div>
          <div class="player-time">
            <span>02:29</span>
            <span class="player-time-divider">/</span>
            <span>07:36</span>
          </div>
        </div>
        <div class="player-section">
          <div class="player-button">
            <i class="icon ion-loop"></i>
          </div>
          <div class="player-button">
            <i class="icon ion-shuffle"></i>
          </div>
          <div class="player-button top-right popover">
            <i class="icon ion-android-list"></i>
          </div>
          <div class="player-button player-volume-button">
            <div class="player-volume-button-wrap">
              <i class="icon ion-android-volume-up"></i>
              <i class="icon ion-android-volume-mute"></i>
            </div>
          </div>
          <div class="player-volume">
            <div class="player-seek-bar-wrap">
              <div class="player-seek-bar">
                <div class="player-seek-duration-bar" style="width: 100%;">
                  <div class="player-seek-handle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

