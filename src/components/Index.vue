<template lang="pug">
  div(class="content")
    Card
    Spinner
</template>

<script>
import Card from './SongCard'
import Spinner from './Spinner'

export default {
  data () {
    return {
      type: 'chill'
    }
  },
  watch: {
    '$route' (to, from) {
      this.type = to.params.id
      this.getData(this.type)
    }
  },
  mounted () {
    this.getData(this.type)
  },
  methods: {
    getData (index) {
      this.$store.dispatch('getMusicList', index)
    }
  },
  components: {
    Card,
    Spinner
  }
}
</script>
