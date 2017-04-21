<template>
  <div class="nav">
  	<div class="container">
  		<div class="nav-logo">
  			<i class="icon ion-radio-waves"></i>
  		</div>
  		<div class="nav-nav float-left">
  			<div class="nav-nav-item">
  				<a class="nav-nav-item-link active" href="/#/songs" title="">SoundVue</a>
  			</div>
  		</div>
  		<div class="nav-nav float-right">
  			<div class="nav-nav-item">
  				<div class="nav-search">
  					<i class="icon ion-search"></i>
  					<input type="text" class="nav-search-input" placeholder="SEARCH">
  				</div>
  			</div>
  			<div class="nav-nav-item">
  				<div class="nav-user popover">
  					<div class="nav-user-link">
  						<i class="icon ion-person"></i>
  						<i class="icon ion-chevron-down"></i>
  						<i class="icon ion-chevron-up"></i>
  					</div>
  				</div>
  			</div>
  	  </div>
  	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

