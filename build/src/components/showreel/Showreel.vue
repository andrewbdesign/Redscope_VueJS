<template>
    <div>
        <div id="showreel-section" class="about-showreel">
    		<div class="bg-image-sections"></div>
    		<div class="gradient-mask-feather"></div>
    		<div class="container-showreel-thumbnail">
    			<img class="showreel-play-btn" src="static/img/showreel/showreel-play-btn.png" alt="">
    			<div class="background-container">
    				<div class="boxer-man"></div>
    				<div class="ocean-bg"></div>
    				<div class="swimmer-girl">
    					<div class="swimmer-girl-container swimmer-inner">
    						<img class="swimmer-girl-01" src="static/img/showreel/02-swimmer-girl-01.png" alt="">
    					</div>
    				</div>
    				<div class="food-bg"></div>
    				<div class="fashion-bg"></div>
    				<div class="phone-dude">
    					<div class="phone-dude-container phone-inner">
    						<img class="phone-dude-01" src="static/img/showreel/05-phone-dude-01.png" alt="">
    					</div>
    				</div>
    				<div class="phone-bg"></div>
    				<div class="hype-shoes">
    					<div class="hype-shoes-container hype-shoes-inner">
    						<img class="hype-shoes-01" src="static/img/showreel/06-hype-shoes-01.png" alt="">
    					</div>
    				</div>
    				<div class="hype-shoes-bg"></div>
    			</div>
    			<img class="boxer-character" src="static/img/showreel/01-boxer-man.png" alt="">
    			<div class="swimmer-girl-container">
    				<img class="swimmer-girl-02" src="static/img/showreel/02-swimmer-girl-02.png" alt="">
    			</div>
    			<img class="food-dudes" src="static/img/showreel/03-food-dudes.png">
    			<img class="fashion-chick" src="static/img/showreel/04-fashion-chick.png">
    			<div class="phone-dude">
    				<div class="phone-dude-container">
    					<img class="phone-dude-02" src="static/img/showreel/05-phone-dude-02.png" alt="">
    				</div>
    			</div>
    			<div class="hype-shoes">
    				<div class="hype-shoes-container">
    					<img class="hype-shoes-02" src="static/img/showreel/06-hype-shoes-02.png" alt="">
    				</div>
    			</div>
    			<div class="showreel-btn">Play showreel</div>
    		</div>
    	</div>

        <!-- Showreel Overlay -->
        <div id="showreel-player-video">
    		<iframe id="showreel-video" src="" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    	</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        TweenMax.set('#loader-logo', {autoAlpha:0})
    	TweenMax.set('.boxer-character', {alpha:0})
    	TweenMax.set('.boxer-man', {alpha:0})
    	TweenMax.set('.swimmer-girl-container', {alpha:0})
    	TweenMax.set('.ocean-bg', {alpha:0})
    	TweenMax.set('.food-bg', {alpha:0})
    	TweenMax.set('.food-dudes', {alpha:0})
    	TweenMax.set('.fashion-chick', {alpha:0})
    	TweenMax.set('.fashion-bg', {alpha:0})
    	TweenMax.set('.phone-bg', {alpha:0})
    	TweenMax.set('.phone-dude-container', {alpha:0})
    	TweenMax.set('.hype-shoes-bg', {alpha:0})
    	TweenMax.set('.hype-shoes-container', {alpha:0})

        let showreelAnimation;

        showreelAnimation = new TimelineMax({repeat:-1})

        // Boxer man
        showreelAnimation.fromTo('.boxer-character, .boxer-man', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '0')
        showreelAnimation.fromTo('.boxer-character', 6, {scale:.9, x:0}, {scale:1, x:-20, ease:Power1.easeOut}, '0')
        showreelAnimation.fromTo('.boxer-man', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '0')
        showreelAnimation.to('.boxer-character, .boxer-man', .4, {alpha:0, ease:Power1.easeOut}, '4')

        // Swimming chick
        showreelAnimation.fromTo('.swimmer-girl-container, .ocean-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '4')
        showreelAnimation.fromTo('.swimmer-girl-container', 6, {scale:.9, x:0}, {scale:1, x:20, ease:Power1.easeOut}, '4')
        showreelAnimation.fromTo('.ocean-bg', 6, {scale:1.2, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '4')
        showreelAnimation.to('.swimmer-girl-container, .ocean-bg', .2, {alpha:0, ease:Power1.easeOut}, '8')

        // Food dudes
        showreelAnimation.fromTo('.food-dudes, .food-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '8')
        showreelAnimation.fromTo('.food-dudes', 6, {scale:.98, x:0}, {scale:1, ease:Power1.easeOut}, '8')
        showreelAnimation.fromTo('.food-bg', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '8')
        showreelAnimation.to('.food-dudes, .food-bg', .2, {alpha:0, ease:Power1.easeOut}, '12')

        // Fashion chick
        showreelAnimation.fromTo('.fashion-chick, .fashion-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '12')
        showreelAnimation.fromTo('.fashion-chick', 6, {scale:.96, x:0}, {scale:1, ease:Power1.easeOut}, '12')
        showreelAnimation.fromTo('.fashion-bg', 6, {scale:1.02, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '12')
        showreelAnimation.to('.fashion-chick, .fashion-bg', .2, {alpha:0, ease:Power1.easeOut}, '16')

        // Phone dude
        showreelAnimation.fromTo('.phone-dude-container, .phone-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '16')
        showreelAnimation.fromTo('.phone-dude-container', 6, {scale:.98, x:0}, {transformOrigin:'50% 100%', scale:1, ease:Power1.easeOut}, '16')
        showreelAnimation.fromTo('.phone-bg', 6, {scale:1.02, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '16')
        showreelAnimation.to('.phone-dude-container, .phone-bg', .2, {alpha:0, ease:Power1.easeOut}, '20')

        // Shoe Chick
        showreelAnimation.fromTo('.hype-shoes-container, .hype-shoes-bg', .4, {alpha:0}, {alpha:1, ease:Power1.easeOut}, '20')
        showreelAnimation.fromTo('.hype-shoes-container', 6, {scale:1.03, x:0}, {transformOrigin:'0% 100%', scale:1, ease:Power1.easeOut}, '20')
        showreelAnimation.fromTo('.hype-shoes-bg', 6, {scale:1.1, x:0}, {scale:1, transformOrigin:'50% 50%', ease:Power1.easeOut}, '20')
        showreelAnimation.to('.hype-shoes-container, .hype-shoes-bg', .2, {alpha:0, ease:Power1.easeOut}, '26')

        // ========
        // Showreel
        // ========
        $('.container-showreel-thumbnail').click(function(){
            $('iframe#showreel-video').attr('src', 'https://player.vimeo.com/video/207907570')
            $("body").addClass("modal-open")
            $("#showreel-player-video").fadeIn()
        })

        $('#showreel-player-video').click(function() {
            $('iframe#showreel-video').attr('src', '')
            $("#showreel-player-video").fadeOut()
            $("body").removeClass("modal-open")
        })
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
// ================
// Showreel section
// ================

#showreel-section {
	background: #151515;
	height: 600px;
	margin: 0;
	overflow: hidden;
	position: relative;
	.showreel-play-btn {
        position: absolute;
        z-index: 420;
        width: 100px;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
	}
	.bg-image-sections {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #151515;
	}
	.boxer-man {
		background-image: url('../../assets/img/showreel/01-boxer-man-bg.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		.character {
			position: absolute;
			width: 100%;
			z-index: 40;
			bottom: 0;
			margin: auto;
			left: -50px;
    	    width: 540px;
		}
		@media(min-width: $mobile) {
			.boxer-man .character {
    		    left: -30px;
    		    width: 650px;
			}
		}
	}
	.ocean-bg {
		background-image: url('../../assets/img/showreel/02-swimmer-bg.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.swimmer-girl {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.swimmer-inner {
		z-index: 10 !important;
	}
	.swimmer-girl-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 300;
        left: -80px;
        bottom: 85px;
		.swimmer-girl-01 {
			position: absolute;
    	    width: 442px;
    	    bottom: -63px;
    	    left: 104px;
			z-index: -10;
		}
		.swimmer-girl-02 {
			position: absolute;
    	    width: 399px;
    	    left: 252px;
    	    top: 143px;
		}
	}
	@media (min-width: $mobile) {
		.swimmer-girl-container {
    	    left: 140px;
    	    bottom: 90px;
		}
	}
	.food-bg {
		background-image: url('../../assets/img/showreel/03-food-dudes-bg.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.food-dudes {
		position: absolute;
		width: 550px;
        bottom: 40px;
        left: -70px;
        z-index: 50;
	}
	@media (min-width: $mobile) {
		.food-dudes {
	    width: 620px;
			bottom: 40px;
			left: 20px;
		}
	}
	.fashion-bg {
		background-image: url('../../assets/img/showreel/04-fashion-bg.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.fashion-chick {
		position: absolute;
		width: 340px;
		bottom: 40px;
		left: 20px;
		z-index: 50;
	}
	@media (min-width: $mobile) {
		.fashion-chick {
			left: 180px;
		}
	}
	.swimmer-girl {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.phone-inner {
		z-index: 10 !important;
	}
	.phone-dude-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 300;
		left: -100px;
		bottom: 90px;
		.phone-dude-01 {
			position: absolute;
			width: 452px;
			bottom: -43px;
			left: 126px;
			z-index: -10;
		}
		.phone-dude-02 {
			position: absolute;
			width: 410px;
            left: 260px;
            top: 42px;
		}
	}
	@media (min-width: $mobile) {
		.phone-dude-container {
			left: 0;
		}
	}
	.phone-bg {
		background-image: url('../../assets/img/showreel/05-phone-dude-bg.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.hype-shoes-inner {
		z-index: 10 !important;
	}
	.hype-shoes-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 300;
		left: 0;
		bottom: 0;
		.hype-shoes-01 {
			position: absolute;
			width: 532px;
			bottom: 54px;
			left: -14px;
			z-index: -10;
		}
		.hype-shoes-02 {
			position: absolute;
			width: 164px;
			left: -85px;
			top: 144px;
		}
	}
	.hype-shoes-bg {
		background-image: url('../../assets/img/showreel/06-hype-shoes-bg.jpg');
		background-size: cover;
		background-position: 'center bottom';
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.container-showreel-thumbnail {
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
		right: 0;
		bottom: 0;
		max-width: 700px;
		max-height: 400px;
		z-index: 400;
		border: 2px solid #fff;
		pointer-events: all;
		transform: scale(.8);
		overflow: hidden;
		cursor: pointer;
		pointer-events: all !important;
		.background-container {
			width: 100%;
			height: 100%;
			position: absolute;
			overflow: hidden;
		}
		.boxer-character {
			position: absolute;
			bottom: 0;
    	    left: -150px;
    	    width: 650px;
		}
		@media (min-width: $mobile) {
			.boxer-character {
				left: -50px;
				width: 660px;
			}
		}
	}
	.showreel-btn {
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 60px;
		border-top: 2px solid #FFF;
		line-height: 55px;
		font-size: 26px;
		font-family: 'Fira Sans', sans-serif;
		font-weight: 400;
		color: #fff;
		background: #151515;
		z-index: 400;
		transition: background .2s ease-in;
	}
	p {
		text-align: center;
	}
	button {
		text-align: center;
		color: #fff;
		border-radius: 0px;
		width: 100%;
		letter-spacing: 0;
	}
}
.container-showreel-thumbnail:hover .showreel-btn{
	background: #cf1427 !important;
}
@media (min-width: $tablet) {
	.container-showreel-thumbnail {
		overflow: visible !important;
	}
	.showreel-btn {
		z-index: 200;
	}
}

.showreel-btn:hover{
	background: pink;
}

#showreel-player-video {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;
    background: rgba(0,0,0,0.98);
    width: 100%;
    height: 100%;
    pointer-events: all;
    cursor: pointer;
	iframe {
		width: 100%;
		height: 50%;
	}
}

#showreel-player-video{
	position: fixed;
}
#showreel-player-video iframe {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 90%;
	height: 40%;
}

@media (min-width: $desktop) {
	#showreel-player-video iframe {
		width: 960px;
		height: 540px;
	}
}
</style>
