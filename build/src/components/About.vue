<template>
<div>
    <app-nav></app-nav>
  <div id="about-section" class="about-top">
      <div id="menu-button">
          <svg height="32px" id="menu1" style="enable-background:new 0 0 32 32; fill:#fff;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
      </div>
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
    },
    created() {
        window.scrollTo(0, 0)
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
