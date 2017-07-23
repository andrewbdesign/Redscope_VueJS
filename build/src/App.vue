<template>
  <div id="app">
    <!-- <app-nav></app-nav> -->
    <router-view></router-view>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss">
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
body {
	font-family: 'Fira Sans', sans-serif;
}

body.modal-open {
    overflow: hidden;
}

h1, h2, p {
	margin: 0;
}

h1, h2 {
	font-weight: bold;
	font-family: 'Fira Sans', sans-serif;
}

p {
	font-family: 'Cousine', sans-serif;
}
</style>
