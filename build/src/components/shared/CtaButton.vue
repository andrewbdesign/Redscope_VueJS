<template lang="html">
  <div>
    <router-link to="/contact">
      <div id="contact-section">
				<div class="overlay-colour-cta-btn"></div>
				<div class="container">
					<div class="row">
						<div class="twelve columns cta-container-hover">
							<p>Ready to hit record?</p>
							<h1>Tell us about your story <span id="arrow-cta-btn">&nbsp;></span></h1>
						</div>
					</div>
				</div>
			</div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#contact-section {
    background: #de1f26;
    position: relative;
    text-align: center;
    color: #fff;
    cursor: pointer;
    pointer-events: all;
    transition: background 0.2s ease-out;
    overflow: hidden;
    .container {
        padding: 5em;
    }
    .overlay-colour-cta-btn {
        width: 100%;
        position: absolute;
        top: -100%;
        left: 0;
        height: 100%;
        background: #c71b21;
        z-index: 0;
        pointer-events: none;
        transition: top 0.3s ease-out;

    }
    p {
        line-height: 40px;
    }
    h1 {
        letter-spacing: 1px;
        font-size: 26px;
        #arrow-cta-btn {
            position: absolute;
        }
    }

}
</style>
