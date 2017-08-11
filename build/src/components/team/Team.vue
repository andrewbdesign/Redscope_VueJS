<template lang="html">
    <div id="team-section">
  			<div class="container team-container">
  				<h1>The Team</h1>
  				<div class="row">
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline > <!-- poster="../../assets/bio/Adam.jpg" -->
  										<source src="../../assets/bio/Adam.mp4" type="video/mp4">
  										<source src="../../assets/bio/Adam.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Adam Dionisio</p>
  							<p class="member-role">Co-Founder &amp;<br>Creative Director</p>
  							<p class="member-description">&nbsp;</p>
  						</div>
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline > <!-- poster="../../assets/bio/Benji.jpg" -->
  									 <source src="../../assets/bio/Benji.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Benji.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Benjamin Baggay</p>
  							<p class="member-role">Co-Founder &amp;<br>Creative Director</p>
  							<p class="member-description">&nbsp;</p>
  						</div>
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline> <!-- poster="../../assets/bio/Rolando.jpg" -->
  									 <source src="../../assets/bio/Rolando.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Rolando.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Rolando</p>
  							<p class="member-role">Senior Editor</p>
  							<p class="member-description">&nbsp;</p>
  						</div>

  				</div>
  				<div class="row">

  						<div class="four columns bio-column">
  							<div>
  								<video playsinline> <!-- poster="../../assets/bio/Noel.jpg" -->
  									 <source src="../../assets/bio/Noel.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Noel.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Noel</p>
  							<p class="member-role">Lead Photographer</p>
  							<p class="member-description">&nbsp;</p>
  						</div>
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline > <!-- poster="../../assets/bio/Vienna.jpg" -->
  									 <source src="../../assets/bio/Vienna.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Vienna.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Vienna</p>
  							<p class="member-role">Shooter/Photographer</p>
  							<p class="member-description">&nbsp;</p>
  						</div>
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline > <!-- poster="../../assets/bio/Em.jpg" -->
  									 <source src="../../assets/bio/Em.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Em.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Emily</p>
  							<p class="member-role">Junior Editor/Shooter</p>
  							<p class="member-description">&nbsp;</p>
  						</div>
  				</div>
  				<div class="row">
  						<div class="four columns bio-column">
  							<div>
  								<video playsinline > <!-- poster="../../assets/bio/Marvin.jpg" -->
  									 <source src="../../assets/bio/Marvin.mp4" type="video/mp4">
  									 	<source src="../../assets/bio/Marvin.webm" type="video/webm">
  								</video>
  							</div>
  							<p class="member-name">Marvin</p>
  							<p class="member-role">Drone Operator</p>
  							<p class="member-description">&nbsp;</p>
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
    mounted() {
        $('.bio-column video').on('mouseover', function(){
        	$(this).get(0).play()
        }).on('ended', function () {
        	$(this).load()
        })
    }
}
</script>

<style lang="scss" scoped>
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
	p.member-role  {
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
</style>
