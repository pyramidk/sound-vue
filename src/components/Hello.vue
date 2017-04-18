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
    <Player></Player>
    </div>
  </div>
</template>

<script>
import CNav from './Nav'
import Toolbar from './Toolbar'
import Card from './SongCard'
import Player from './Player'

// import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.test()
    this.getData()
  },
  methods: {
    getData () {
      this.$store.dispatch('getData')
    },
    test () {}
  },
  components: {
    CNav,
    Toolbar,
    Card,
    Player
  }
}
</script>
