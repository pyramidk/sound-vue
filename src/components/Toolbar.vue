<template>
  <div class="toolbar">
    <div class="container">
      <div class="toolbar-items">
        <router-link to="/songs/chill" class="toolbar-item toolbar-genre active">chill</router-link>
        <router-link to="/songs/deep" class="toolbar-item toolbar-genre">DEEP</router-link>
        <router-link to="/songs/tech" class="toolbar-item toolbar-genre">chill</router-link>
        <router-link to="/foo" class="toolbar-item toolbar-genre">chill</router-link>
        <router-link to="/foo" class="toolbar-item toolbar-genre">chill</router-link>
        <router-link to="/foo" class="toolbar-item toolbar-genre">chill</router-link>
        <router-link to="/foo" class="toolbar-item toolbar-genre">chill</router-link>
        <router-link to="/foo" class="toolbar-item toolbar-genre">chill</router-link>
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

