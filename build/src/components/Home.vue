<template>
<div>
  <div id="about-section">
    <div id="menu-button">
        <svg height="32px" id="menu1" style="enable-background:new 0 0 32 32; fill:#fff;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
    </div>
    <div class="container">
      <div class="row">
        <div class="six columns">
          <div class="letter-r-container">
            <img class="letter-r" src="../assets/img/letters/letter-r-icon.png" alt="">
            <img class="letter-r-bg" src="../assets/img/letters/letter-r-bg.jpg" alt="">
          </div>
        </div>
        <div class="six columns">
          <h1>We the<br>Story Tellers</h1>
          <p>We create, produce, and bring your story, brief and brand to life through content. We're a team of collaborators that are down to earth, no fuss, simple and ambitious to push your ideas to the next level</p>
          <router-link to="/about">Who we are</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- <app-showreel></app-showreel> -->
  <app-works></app-works>
  <app-cta></app-cta>
</div>
</template>

<script>
import Works from './works/Works.vue'

export default {
    components: {
        'app-works': Works
    }
}
</script>

<style lang="scss" scoped>
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
// ==========================================
// About section
// ==========================================
#menu1 {
    position: fixed;
    top: 10px;
    right: 10px;
}
#about-section {
    overflow: hidden;
    background: #151515;
    padding: 100px 0;
    .container {
        max-width: $tablet;
    }
}

.letter-r-container {
    position: relative;
}

.letter-r {
    width: 100%;
    z-index: 100;
    position: relative;
}

.letter-r-bg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
}

h1 {
    margin: 0;
    font-size: 40px;
    line-height: 40px;
    color: #c7c7c7;
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-weight: 700;
    position: relative;
    z-index: 300;
}
p {
    max-width: 420px;
    color: #fff;
    margin-bottom: 0;
    position: relative;
    z-index: 300;
}
a {
    display: inline-block;
    margin-top: 20px;
    color: #cf1427;
    text-decoration: none;
    font-family: 'Cousine', sans-serif;
    font-weight: 400;
    cursor: pointer;
    &:hover {
        color: #a90e1e;
    }
}
</style>
