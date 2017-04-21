<template>
  <div id="app">
  	<CNav></CNav>
    <div class="songs">
      <Toolbar></Toolbar>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CNav from './components/Nav'
import Toolbar from './components/Toolbar'
import Player from './components/Player'
export default {
  name: 'app',
  components: {
    CNav,
    Toolbar,
    Player
  }
}
</script>
