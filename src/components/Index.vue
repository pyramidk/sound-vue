<template>
  <div class="content">
    <Card></Card>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Card from './SongCard'
import Spinner from './Spinner'

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
    this.getData(this.type)
  },
  methods: {
    getData (index) {
      console.log('getData')
      this.$store.dispatch('getData', index)
    }
  },
  components: {
    Card,
    Spinner
  }
}
</script>
