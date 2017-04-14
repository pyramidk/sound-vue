<template>
  <div class="hello">
    <Nav></Nav>
    <div class="song">
      <Toolbar></Toolbar>
    </div>
  </div>
</template>

<script>
import Nav from './Nav'
import Toolbar from './Toolbar'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Nav,
    Toolbar
  }
}
</script>
