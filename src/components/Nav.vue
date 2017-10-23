<template lang="pug">
  div(class="nav")
  	div(class="container")
  		div(class="nav-logo")
  			i(class="icon ion-radio-waves")
  		div(class="nav-nav float-left")
  			div(class="nav-nav-item")
  				a(class="nav-nav-item-link active"
            href="/#/songs"
            title=""
            ) Sound
  		div(class="nav-nav float-right")
  			div(class="nav-nav-item")
  				div(class="nav-search")
  					i(class="icon ion-search")
  					input(
              class="nav-search-input"
              type="text"
              placeholder="SEARCH"
            )
  			div(class="nav-nav-item")
  				div(class="nav-user popover")
  					div(class="nav-user-link")
  						i(class="icon ion-person")
  						i(class="icon ion-chevron-down")
</template>

<script>
export default {}
</script>

