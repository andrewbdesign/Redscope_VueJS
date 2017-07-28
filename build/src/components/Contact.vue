<template>
    <div>
        <div id="hero-section" class="contact-hero">

			<div class="icon-letter-container">
				<img class='letter-c-icon' src="../assets/img/letters/letter-c-icon.png" alt="">
				<img class="letter-c-bg" src="../assets/img/letters/letter-c-bg.jpg" alt="">
			</div>
			<div class="email-container">
				<div class="container">
					<div class="row">
						<div class="tweleve columns">
							<a href="mailto:contact@redscope.com">
								<h1>Contact@redscope.com</h1>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="six columns icon-column">
							<p><img class="icons icon-pin" src="../assets/img/icon/icon-pin.svg" alt="">319-325 Trafalgar St,<br>Petersham NSW 2049</p>
						</div>
						<div class="six columns icon-column">
							<p><img class="icons icon-phone" src="../assets/img/icon/icon-phone.svg" alt=""><a href="tel:+61406685233">0406 685 233</a></p>
						</div>
					</div>

					<div class="row">
						<div class="twelve columns">
							<div class="social-media-menu">
							<a href="https://www.facebook.com/redscopefilms/">
								<img src="../assets/img/icon/logo-facebook.svg" alt="">
							</a>
							<a href="https://www.instagram.com/redscopefilms/">
								<img src="../assets/img/icon/logo-instagram.svg" alt="">
							</a>
							<a href="https://vimeo.com/redscopefilms">
								<img src="../assets/img/icon/logo-vimeo.svg" alt="">
							</a>
						</div>
						</div>
					</div>

				</div>


			</div>

		</div>
        <app-contactform></app-contactform>
    </div>
</template>

<script>
import contactForm from './contact-form/ContactForm.vue';

export default {
    components: {
        'app-contactform': contactForm
    }
}
</script>

<style lang="css">
</style>
