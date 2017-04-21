<template>
  <div class="content">
    <Card></Card>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Card from './SongCard'
import Spinner from './Spinner'

// import { mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      type: 'chill'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      this.type = to.params.id
      this.getData(this.type)
    }
  },
  mounted () {
    this.type = this.$route.params.id
    this.getData(this.type)
  },
  methods: {
    getData (index) {
      this.$store.dispatch('getData', index)
    }
  },
  components: {
    Card,
    Spinner
  }
}
</script>
