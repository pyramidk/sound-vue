<template>
  <div class="hello">
    <CNav></CNav>
    <div class="songs">
      <Toolbar></Toolbar>
      <div class="container">
        <div class="content">
          <Card></Card>  
        </div>
      </div>
    </div>
    <!-- <Player></Player> -->
    </div>
  </div>
</template>

<script>
import CNav from './Nav'
import Toolbar from './Toolbar'
import Card from './SongCard'
import Player from './Player'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.test()
    this.start()
  },
  methods: {
    ...mapActions([
      'start'
    ]),
    test () {
      // playlist
      // this.$http.get('https://api.soundcloud.com/tracks?linked_partitioning=1&client_id=e582b63d83a5fb2997d1dbf2f62705da&limit=50&offset=0&tags=chill%20house').then(response => {
      //   console.log(response)
      //   this.list = response.data.collection
      //   console.log(this.list)
      // }, response => {
      //   // error callback
      // })
      // this.$http.post('/api/search/pc', {
      //   s: 'Coldplay',
      //   limit: 100,
      //   type: 1
      // }).then(response => {
      //   console.log(response)
      // }, response => {
      //   // error callback
      // })
    }
  },
  computed: mapGetters([
    'list'
  ]),
  components: {
    CNav,
    Toolbar,
    Card,
    Player
  }
}
</script>
