<template>
    <div>
      <h1>{{msg}}</h1>
        This is the CONTACT section
        <app-contactform></app-contactform>
        <app-instagramfeed></app-instagramfeed>
    </div>
</template>

<script>
export default {
    data () {
      return {
        msg: 'CONTACT PAGE',
        title: 'Contact'
      }
    }
}
</script>

<style lang="css">
</style>
