<template>
<div>
    <app-nav></app-nav>
    <app-herosection></app-herosection>

    <div id="about-section">
        <div id="menu-button">
            <svg height="32px" id="menu1" style="enable-background:new 0 0 32 32; fill:#fff;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        </div>
        <div class="container">
            <div class="row">
                <div class="img-a six columns">
                    <div class="letter-r-container">
                        <img class="letter-r" src="static/img/letters/letter-r-icon.png" alt="">
                        <img class="letter-r-bg" src="static/img/letters/letter-r-bg.jpg" alt="">
                    </div>
                </div>
                <div class="six columns right-copy-home">
                    <h1> {{ title }}</h1>
                    <p> {{ description }}</p>
                    <router-link to="/about">Who we are</router-link>
                </div>
            </div>
        </div>
    </div>

  <app-showreel></app-showreel>
  <app-works></app-works>
  <app-cta></app-cta>
</div>
</template>

<script>
import Works from './works/Works.vue'

export default {
    data: function() {
        return {
            title: 'We the Story Tellers',
            description: `We create, produce, and bring your story, brief and brand to life through content. We're a team of collaborators that are down to earth, no fuss, simple and ambitious to push your ideas to the next level`
        }
    },
    components: {
        'app-works': Works
    },
    created() {
        window.scrollTo(0, 0)
    },
    mounted() {
        document.title = 'Redscope | Home'

        var controller = new ScrollMagic.Controller();

        // create a scene
		var aboutCopyText = new TimelineMax();
		aboutCopyText.from('#about-section .img-a', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, '0')
					 .from('.right-copy-home', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, '.4')
		var scene01 = new ScrollMagic.Scene({
            triggerElement: '#about-section .img-a', // element
		    triggerHook: 0.7,
			reverse: true,
		})
		.setTween(aboutCopyText)
		.addTo(controller)

        var showReelTween = new TimelineMax();
    	showReelTween.from('#showreel-section .container-showreel-thumbnail', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, '0')
    	var scene02 = new ScrollMagic.Scene({
            triggerElement: '#showreel-section', // element
            triggerHook: 0.7,
            reverse: true,
        })
    	.setTween(showReelTween)
        .addTo(controller)

        // create a scene
        var worksTl = new TimelineMax();
        worksTl.staggerFrom('#works-section .video-column', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, .2, '0')
        var scene03 = new ScrollMagic.Scene({
            triggerElement: '#works-section', // element
            triggerHook: 0.5,
            reverse: true,
        })
        .setTween(worksTl)
        .addTo(controller)

        // create a scene
        var menuBtn01 = new TimelineMax();
        menuBtn01.to('#menu1', 0, {css:{fill: '#db1e26'}, ease:Power1.easeOut}, '.01')
        var scene04 = new ScrollMagic.Scene({
            triggerElement: '#works-section', // element
            triggerHook: .1,
            reverse: true,
        })
        .setTween(menuBtn01)
        .addTo(controller)

        var menuBtn02 = new TimelineMax();
        menuBtn02.to('#menu1', 0, {css:{fill: '#FFFFFF'}, ease:Power1.easeOut}, '.01')
        var scene05 = new ScrollMagic.Scene({
            triggerElement: '#contact-section', // element
            triggerHook: .1,
            reverse: true,
        })
        .setTween(menuBtn02)
        .addTo(controller)

        var menuBtn03 = new TimelineMax();
        menuBtn03.to('#menu1', 0, {css:{fill: '#db1e26'}, ease:Power1.easeOut}, '.01')
        var scene06 = new ScrollMagic.Scene({
            triggerElement: '#instagram-feed', // element
            triggerHook: .1,
            reverse: true,
        })
        .setTween(menuBtn03)
        .addTo(controller)

        var menuBtn04 = new TimelineMax();
        menuBtn04.to('#menu1', 0, {css:{fill: '#FFFFFF'}, ease:Power1.easeOut}, '.01')
        var scene06 = new ScrollMagic.Scene({
            triggerElement: '#footer-section', // element
            triggerHook: .1,
            reverse: true,
        })
        .setTween(menuBtn04)
        .addTo(controller)
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
#about-section {
	background: #151515;
//	height: 100vh;
	padding: 260px 0 100px;
	color: #fff;
	.img-a {
		text-align: center;
		position: relative;
		bottom: 190px;
		left: 0;
		height: 220px;
		// transition: all 1s ease-out;
		img {
			max-width: 400px;
			width: 100%;
		}

		.letter-r {
			position: absolute;
//			left: 110px;
			left: 0;
			top: 10px;
			z-index: 30;
		}
		.letter-r-bg {
			position: absolute;
//			left: 100px;
			left: 0;
			top: 40px;
			z-index: 20;
		}
	}
	@media (min-width: $mobile) {
		.img-a {
			left: 60px;
			height: auto;
		}
		.letter-r,
		.letter-r-bg {
			left: 100px;
		}
	}
	@media (min-width: $tablet) {
		.img-a {
			left: 140px;
	    height: auto;
			.letter-r {
				width: 400px;
			}
		}
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
//		font-size: 14px;
	}
	.divider-link {
		display: inline-block;
		margin: 0;
	}

}

.fade-in {
	opacity: 1 !important;
}

</style>
