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
      this.$store.dispatch(aTypes.GET_MUSIC_LIS, index)
    }
  },
  components: {
    Card,
    Spinner
  }
}
</script>
