<template>
  <div class="hello">
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Nav
  }
}
</script>
