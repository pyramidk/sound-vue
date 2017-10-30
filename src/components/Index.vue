<template lang="pug">
  div(class="content")
    Card
    Spinner
</template>

<script>
import * as aTypes from '../store/action-types'
import Card from './SongCard'
import Spinner from './Spinner'

export default {
  components: {
    Card,
    Spinner
  },
  data () {
    return {
      type: 'chill'
    }
  },
  watch: {
    '$route' (to, from) {
      this.type = to.params.id
      this.$store.dispatch(aTypes.GET_MUSIC_LIST, this.type)
    }
  },
  mounted () {
    this.$store.dispatch(aTypes.GET_MUSIC_LIST, this.type)
  }
}
</script>
