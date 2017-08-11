<template lang="html">
  <div id="works-section">
			<div class="container">
				<div class="row">
					<div class="works">
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Sony-1.jpg" -->
								<video id="work-01" playsinline muted loop data-video="https://www.youtube.com/embed/U3K3gFHsajs">
									 <source src="../../assets/img/works/Sony-1.mp4" type="video/mp4">
									 	<source src="../../assets/img/works/Sony-1.webm" type="video/webm">
								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">SONY MUSEUM | Sid Tapia x SONY</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Taku-1.jpg"  -->
								<video id="work-02" playsinline muted loop data-video="https://www.youtube.com/embed/0nl2yp2mL94">
										<source src="../../assets/img/works/Taku-1.mp4" type="video/mp4">
										<source src="../../assets/img/works/Taku-1.webm" type="video/webm">
								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">CLRBLND Exhibition - TA-KU x SONY</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="works">
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Fitnessplanet-1.jpg" -->
								<video id="work-03" playsinline muted loop data-video="https://www.youtube.com/embed/OhWGznK517w">
										<source src="../../assets/img/works/Fitnessplanet-1.mp4" type="video/mp4">
										<source src="../../assets/img/works/Fitnessplanet-1.webm" type="video/webm">
								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">Fitness Playground Social Promo</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Hype_Girl-1.jpg"  -->
								<video id="work-04" playsinline muted loop data-video="https://www.youtube.com/embed/gTWEgk4uGqI">
									 <source src="../../assets/img/works/Hype_Girl-1.mp4" type="video/mp4">
									 	<source src="../../assets/img/works/Hype_Girl-1.webm" type="video/webm">
								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">Hype Girl Lookbook Season 1</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

					<div class="row">
					<div class="works">
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Adidashypeparty-1.jpg" -->
								<video id="work-05" playsinline muted loop data-video="https://www.youtube.com/embed/-73xEK26Tes">
    									<source src="../../assets/img/works/Adidashypeparty-1.mp4" type="video/mp4">
									 	<source src="../../assets/img/works/Adidashypeparty-1.webm" type="video/webm">

								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">Hypesessions 2016 | Adidas Future Party</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
						<div class="six columns video-column">
							<div class="hover-container">
                <!-- poster="../../assets/img/works/Piers_Nye-1.jpg" -->
								<video id="work-06" playsinline muted loop data-video="https://www.youtube.com/embed/W4Ckgz8djoQ">
									    <source src="../../assets/img/works/Piers_Nye-1.mp4" type="video/mp4">
									 	<source src="../../assets/img/works/Piers_Nye-1.webm" type="video/webm">
								</video>
								<div class="hover-overlay">
									<p>
										<div class="title">Pier One New Years Eve</div>
										<img class="play-icon" src="../../assets/img/play.svg" alt="">
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    mounted: function() {
        // Works hover
        var md = new MobileDetect(window.navigator.userAgent);
        if(md.phone() || md.tablet()) {
        	$('.hover-overlay').css('opacity', 1)
        	$('.play-icon').css('display', 'none')
        } else {
        	$('.video-column video').on('mouseover', function(){
        		$(this).get(0).play()
        		$(this).next().css('opacity', 1)
        	}).on('mouseout', function(){
        		$(this).get(0).currentTime = 0;
        		$(this).get(0).pause()
        		$(this).next().css('opacity', 0)
        		$(this).load()
        	})
        }
    }
}
</script>

<style lang="scss" scoped>
// ==========================================
// Works section
// ==========================================
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
#works-section {
    overflow: hidden;
    background: #f4f4f4;
    padding: 150px 0 50px;
    position: relative;
    z-index: 2000;
    .container {
        max-width: 680px;
    }
    .works {
        text-align: center;
        position: relative;
        bottom: 30px;
        img {
            width: 100%;
            pointer-events: all;
            cursor: pointer;
        }
        video {
            width: 100% !important;
            height: auto !important;
        }

        .hover-container {
            width: 100%;
            position: relative;
            pointer-events: all;
            height: 100%;
            cursor: pointer;
            .hover-overlay {
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
                pointer-events: none;
                position: absolute;
                bottom: 7px;
                text-align: left;
                width: 100%;
                height: 50px;
                line-height: 60px;
                color: #fff;
                background: -moz-linear-gradient(top, rgba(21,21,21,0) 0%, rgba(21,21,21,0) 19%, rgba(21,21,21,1) 100%);
                background: -webkit-linear-gradient(top, rgba(21,21,21,0) 0%,rgba(21,21,21,0) 19%,rgba(21,21,21,1) 100%);
                background: linear-gradient(to bottom, rgba(21,21,21,0) 0%,rgba(21,21,21,0) 19%,rgba(21,21,21,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=  '#00151515', endColorstr='#151515',GradientType=0 );

            }

            .title,
            .year {
                display: inline;
                font-family: 'Fira Sans', sans-serif;
                font-size: 14px;
            }
            .title {
                font-weight: 400;
                padding-left: 10px;
            }
            .year {
                font-weight: 700;
            }
            .play-icon {
                position: absolute;
                width: 20px;
                right: 10px;
                bottom: 10px;
            }
        }
    }
    .video-column {
        margin-bottom: 10px;
    }
}

#more-works {
    padding: 20px 0;
    background: #d1161f;
    text-align: center;
    color: #fff;
    cursor: pointer;
    pointer-events: all;
    h1 {
        letter-spacing: 1px;
        font-size: 26px;
    }
}
@media(max-width: $mobile) {
    .hover-overlay {
        opacity: 1;
    }
}
</style>
