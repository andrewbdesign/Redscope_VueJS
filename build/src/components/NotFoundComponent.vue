<template lang="html">
    <div class="not-found">
        <h1>404</h1>
        <p>Sorry! Page not found</p>
        <router-link to="/">Click here to go home?</router-link>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
    .not-found {
        background: #282828;
        color: #fff;
        text-align: center;
        padding: 180px 0;
    }
    a {
        color: #db1e26;
        text-decoration: none;
    }
</style>
