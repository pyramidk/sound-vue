<template>
  <div class="toolbar">
    <div class="container">
      <div class="toolbar-items">
        <router-link to="/songs/chill" class="toolbar-item toolbar-genre active">悠然</router-link>
        <router-link to="/songs/deep" class="toolbar-item toolbar-genre">深邃</router-link>
        <router-link to="/songs/dubstep" class="toolbar-item toolbar-genre">贝斯</router-link>
        <router-link to="/songs/house" class="toolbar-item toolbar-genre">舞曲</router-link>
        <router-link to="/songs/progressive" class="toolbar-item toolbar-genre">亢奋</router-link>
        <router-link to="/songs/tech" class="toolbar-item toolbar-genre">质感</router-link>
        <router-link to="/songs/trance" class="toolbar-item toolbar-genre">迷幻</router-link>
        <router-link to="/songs/tropical" class="toolbar-item toolbar-genre">舒适</router-link>
        <div class="toolbar-item toolbar-filter toolbar-times">
          <i class="icon ion-funnel"></i>
          <a class="toolbar-time " href="/#/songs?q=chill&amp;t=7" title="">7 days</a>
          <a class="toolbar-time " href="/#/songs?q=chill&amp;t=30" title="">30 days</a>
          <a class="toolbar-time " href="/#/songs?q=chill&amp;t=90" title="">90 days</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

