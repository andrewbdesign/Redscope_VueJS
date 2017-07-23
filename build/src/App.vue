<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>This is the NAV</div>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view></router-view>
    <div>This is the FOOTER</div>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
