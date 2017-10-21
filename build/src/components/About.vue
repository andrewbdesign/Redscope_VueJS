<template>
<div>

    <app-nav></app-nav>

    <!-- Hero section -->
    <div id="hero-section">
        <div id="menu-button">
            <svg height="32px" id="menu1" style="enable-background:new 0 0 32 32; fill:#fff;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        </div>
		<div class="bg-image about-bg-image"></div>
		<div class="hero-logo-container">
			<div class="about-hero-text-mobile"><h1>We the<br>Story Tellers</h1></div>
			<div class="about-hero-text">
				<h1>We the&nbsp;
    				<span id="words">
    					<span id="word-01"></span>
    					<span id="word-02"></span>
    					<span id="word-03"></span>
    					<span id="word-04"></span>
    				</span>
				</h1>
			</div>
			<div class="gradient-about"></div>
            <div class="arrow-container">
				<img class="down-arrow" src="../assets/img/down-arrow.svg" alt="">
			</div>
		</div>
	</div>

    <!-- About section -->
    <div id="about-section" class="about-top">
        <div class="container about-container">
            <div class="row">
                <div class="about-copy six columns">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                </div>
                <div class="img-b six columns">
                    <img class="letter-a" src="static/img/letters/letter-a-icon.png" alt="">
                    <img class="letter-a-bg" src="static/img/letters/letter-a-bg.jpg" alt="">
                </div>
            </div>
        </div>
    </div>

    <app-showreel></app-showreel>
    <app-team></app-team>
    <app-cta></app-cta>
</div>

</template>

<script>
import Team from './team/Team.vue';

export default {
    data: function() {
        return {
            homePage: false,
            title: 'About',
            description: `We are a boutique creative Video/content production studio. A team of hybrid creatives, collaborators and modern storytellers that create moving and inspiring content.`
        }
    },
    components: {
        'app-team': Team
    },
    // created() {
    // },
    mounted(){
        document.title = 'Redscope | About'
        window.scrollTo(0, 0)
        // About text animation
    	var aboutText = new TimelineMax({repeat:-1})
    	var words = ['Story Tellers', 'Explorers', 'Creators', 'Collaborators']
    	TweenMax.from('.about-hero-text', 1, {alpha:0, ease:Power1.easeOut}, '0')

    	$('#word-01').html(words[0])
    	$('#word-02').html(words[1])
    	$('#word-03').html(words[2])
    	$('#word-04').html(words[3])

    	var word01Width = $('#word-01').outerWidth(),
    		word02Width = $('#word-02').outerWidth(),
    		word03Width = $('#word-03').outerWidth(),
    		word04Width = $('#word-04').outerWidth();

    	var weThe = 170 // We The text width
    	var containerText = 560 // container Text Width

    	var word01Offset = (560 - (word01Width + weThe) )/2,
    		word02Offset = (560 - (word02Width + weThe) )/2,
    		word03Offset = (560 - (word03Width + weThe) )/2,
    		word04Offset = (560 - (word04Width + weThe) )/2


    	var mySplitText01 = new SplitText('#word-01', {type:"chars"}),
    		mySplitText02 = new SplitText('#word-02', {type:"chars"}),
    		mySplitText03 = new SplitText('#word-03', {type:"chars"}),
    		mySplitText04 = new SplitText('#word-04', {type:"chars"});

    	var firstTween = new TimelineLite()
    	firstTween.staggerFromTo('#word-01 div', .5, {alpha:0}, {alpha:1}, .1, '0')

    	aboutText.staggerTo('#word-01 div', .3, {alpha:0}, .1, '3.7')

    	aboutText.staggerFromTo('#word-02 div', .5, {alpha:0}, {alpha:1}, .1, '4')
    	aboutText.staggerTo('#word-02 div', .3, {alpha:0}, .1, '7.7')

    	aboutText.staggerFromTo('#word-03 div', .5, {alpha:0}, {alpha:1}, .1, '8')
    	aboutText.staggerTo('#word-03 div', .3, {alpha:0}, .1, '11.7')

    	aboutText.staggerFromTo('#word-04 div', .5, {alpha:0}, {alpha:1}, .1, '12')
    	aboutText.staggerTo('#word-04 div', .3, {alpha:0}, .1, '15.7')

    	aboutText.staggerFromTo('#word-01 div', .5, {alpha:0}, {alpha:1}, .1, '16')
        TweenMax.from('.arrow-container', .7, {autoAlpha:0, ease:Power1.easeOut}, '0')

        var downArrow = new TimelineMax({repeat: -1})
    	downArrow.to('.down-arrow', 1, {y:10, ease:Power1.easeOut}, '0')
    	downArrow.to('.down-arrow', 1, {y:0, ease:Power1.easeOut}, '1')

        // Scroll magic
        var controller = new ScrollMagic.Controller();

        var aboutCopyText = new TimelineMax();
    	aboutCopyText.from('#about-section .img-b', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, '0')
    				 .from('.about-copy', .7, {y:40, autoAlpha:0, ease:Power1.easeOut}, '.4')
    	var scene01 = new ScrollMagic.Scene({
    	    triggerElement: '#about-section .img-b', // element
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

    	var teamMenu = new TimelineMax();
    	teamMenu.staggerFrom('#team-section .bio-column', 1, {y:40, autoAlpha:0, ease:Power1.easeOut}, .12, '0')
    	var scene03 = new ScrollMagic.Scene({
            triggerElement: '#team-section', // element
            triggerHook: 0.5,
            reverse: true,
        })
        .setTween(teamMenu)
        .addTo(controller)

        // create a scene
        var menuBtn01 = new TimelineMax();
        menuBtn01.to('#menu1', 0, {css:{fill: '#db1e26'}, ease:Power1.easeOut}, '.01')
        var scene04 = new ScrollMagic.Scene({
            triggerElement: '#team-section', // element
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

// =========
// Variables
// =========
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;

// ==========================================
// About section
// ==========================================

#about-section {
	background: #151515;
	padding: 260px 0 100px;
	color: #fff;
	.img-a {
		text-align: center;
		position: relative;
		bottom: 190px;
		left: 0;
		height: 220px;
		img {
			max-width: 400px;
			width: 100%;
		}
		.letter-r {
			position: absolute;
			left: 0;
			top: 10px;
			z-index: 30;
		}
		.letter-r-bg {
			position: absolute;
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
	}
	.divider-link {
		display: inline-block;
		margin: 0;
	}
}

.fade-in {
	opacity: 1 !important;
}


.boxer-man {
    .character {
        position: absolute;
        width: 80%;
        z-index: 40;
        left: -11%;
        top: -10%;
    }
    .bg {
        position: absolute;
        width: 100%;
        z-index: 30;
    }
}

.img-b {
    position: relative;
    bottom: 350px;
    right: 0;
    z-index: 1;
    .letter-a {
        position: absolute;
        right: 30px;
        bottom: -50px;
        max-width: 390px;
        z-index: 30;
    }
    .letter-a-bg {
        position: absolute;
        right: 110px;
        top: -200px;
        z-index: 20;
        width: 310px;
    }
}
@media (min-width: $mobile) {
    .img-b {
        bottom: 100px;
        right: 40px;
        .letter-a {
            right: 0;
            bottom: -50px;
            max-width: 490px;
        }
        .letter-a-bg {
            right: -20px;
            bottom: -130px;
            max-width: 750px;
        }
    }
}
@media (min-width: $tablet) {
    .img-b {
        .letter-a {
            right: -80px;
            max-width: 800px;
        }
    }
}
// About showreel
// ===========================
.about-showreel {
  margin-bottom: 0 !important;
}

.about-container {
  max-width: 820px;
}
// Team section
// ===========================

#team-section {
    padding: 100px 0 30px;
    background: #f4f4f4;
    .container {
        max-width: 680px;
    }
    h1 {
        text-align: center;
        margin-bottom: 40px;
        font-size: 2em;
    }
    video {
        width: 100% !important;
        height: auto !important;
    }
    p.member-name {
        font-family: 'Fira Sans', sans-serif;
        font-weight: 700;
        text-align: center;
    }
    p.member-role {
        font-size: 12px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 17px;
        padding-top: 6px;
    }
    p.member-description {
        margin-bottom: 30px;
        text-align: center;
    }
    .column {
        margin: 0 30px;
    }
}


.bg-image.about-bg-image {
    background: url('./../assets/img/about-hero-image.jpg')
}

.about-copy {
    position: relative;
    z-index: 20;
    bottom: 70px;
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
        font-size: 50px;
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

.about-hero-text-mobile h1 {
    text-align: center;
    color: #fff;
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 230px;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    font-size: 38px;
}
@media (min-width: $mobile) {
    .about-hero-text-mobile h1 {
        font-size: 70px;
        width: 400px;
        height: 300px;
    }
}
@media (min-width: $tablet) {
    .about-hero-text {
        display: block;
    }
    .about-hero-text-mobile {
        display: none;
    }
}

.about-top {
    padding-top: 440px !important;
    padding-bottom: 0 !important;
    overflow: hidden;
}

.gradient-about {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: -moz-linear-gradient(top, rgba(21,21,21,0) 0%, rgba(21,21,21,1) 81%);
    background: -webkit-linear-gradient(top, rgba(21,21,21,0) 0%,rgba(21,21,21,1) 81%);
    background: linear-gradient(to bottom, rgba(21,21,21,0) 0%,rgba(21,21,21,1) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=  '#00151515', endColorstr='#151515',GradientType=0 );
}

#hero-section {
	position: relative;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: calc(100vh + 1px);
	background: #000;
	video {
		position: absolute;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		z-index: 0;
		transform: translateX(-50%) translateY(-50%);
	}
	.hero-logo-container {
		position: relative;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;

		#hero-logo {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
			max-width: 360px;
			width: 80%;
			z-index: 20;
		}
	}
	#video,
	.bg-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: 50% 50%;
		overflow: hidden;
	}
	#video {
		opacity: 0;
	}
	.overlay-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: 1;
		opacity: .5;
	}
}

.right-copy-home {
    position: relative;
    top: 70px;
}

.arrow-container {
	position: absolute;
	top: 87%;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	z-index: 3;
	height: 60px;
	text-align: center;
	border-radius: 22px;
	color: #fff;
	// cursor: pointer;
}


</style>
