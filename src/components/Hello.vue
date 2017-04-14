<template>
  <div class="hello">
    <CNav></CNav>
    <div class="songs">
      <Toolbar></Toolbar>
      <div class="container">
        <div class="content">
          <div class="songs-row grid">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
          </div>
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
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    CNav,
    Toolbar,
    Card,
    Player
  }
}
</script>
