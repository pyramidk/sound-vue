<template>
  <div class="hello">
    <CNav></CNav>
    <div class="songs">
      <Toolbar></Toolbar>
      <div class="container">
        <div class="content">
          <Card></Card>
          <Spinner></Spinner>
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
import Spinner from './Spinner'

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
    Player,
    Spinner
  }
}
</script>
