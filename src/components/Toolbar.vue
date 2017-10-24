<template lang="pug">
  div(class="toolbar")
    div(class="container")
      div(class="toolbar-items")
        <router-link to="/songs/chill" class="toolbar-item toolbar-genre" :class="{'router-link-active': typeNow === 'chill'}">悠然</router-link>
        <router-link to="/songs/deep" class="toolbar-item toolbar-genre">深邃</router-link>
        <router-link to="/songs/dubstep" class="toolbar-item toolbar-genre">贝斯</router-link>
        <router-link to="/songs/house" class="toolbar-item toolbar-genre">舞曲</router-link>
        <router-link to="/songs/progressive" class="toolbar-item toolbar-genre">亢奋</router-link>
        <router-link to="/songs/tech" class="toolbar-item toolbar-genre">质感</router-link>
        <router-link to="/songs/trance" class="toolbar-item toolbar-genre">迷幻</router-link>
        <router-link to="/songs/tropical" class="toolbar-item toolbar-genre">舒适</router-link>
        div(class="toolbar-item toolbar-filter toolbar-times")
          i(class="icon ion-funnel")
          a(class="toolbar-time " href="") 7 days
          a(class="toolbar-time ") 30 days
          a(class="toolbar-time ") 90 days
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'typeNow'
  ])
}
</script>

