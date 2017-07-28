<template>
<div>
  <div id="about-section" class="about-top">
    <div class="container about-container">
      <div class="row">
        <div class="about-copy six columns">

          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="img-b six columns">
          <img class="letter-a" src="../assets/img/letters/letter-a-icon.png" alt="">
          <img class="letter-a-bg" src="../assets/img/letters/letter-a-bg.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <app-showreel></app-showreel> -->
  <app-team></app-team>
  <app-cta></app-cta>
</div>
</template>

<script>
import Team from './team/Team.vue';

export default {
    data: function() {
        return {
            title: 'About',
            description: `We are a boutique creative Video/content production studio. A team of hybrid creatives, collaborators and modern storytellers that create moving and inspiring content.`
        }
    },
    components: {
        'app-team': Team
    }
}
</script>

<style lang="scss">
h1 {
    font-size: 40px;
}
#about-section {
    background: #151515;
    padding: 150px 0;
    color: #fff;
    overflow: hidden;
    .container {
        max-width: 820px;
    }
}
.about-copy {
    position: relative;
    z-index: 20;
}
.about-hero-text {
	display: none;
	position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    text-align: center;
	h1 {
		color: #fff;
		z-index: 300;
		position: relative;
		font-size: 40px;
		letter-spacing: 1px;
		display: inline-block;
		width: 520px;
		text-align: left;
	}
	#word-01,
	#word-02,
	#word-03,
	#word-04 {
		position: absolute;
	}
}

.img-b {
    position: relative;
    .letter-a {
        width: 100%;
        position: absolute;
        z-index: 300;
    }
    .letter-a-bg {
        position: absolute;
        top: 0;
        width: 80%;
    }
}

</style>
