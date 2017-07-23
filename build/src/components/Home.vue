<template>
<div id="about-section">
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
  <!-- <app-showreel></app-showreel> -->
  <!-- <app-works></app-works> -->
  <!-- <app-cta></app-cta> -->
  <!-- <app-instagramfeed></app-instagramfeed> -->
</div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
// ==========================================
// About section
// ==========================================
#about-section {
    background: #151515;
    padding: 100px 0;
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
