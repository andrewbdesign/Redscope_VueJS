<template>
    <div>
        <app-nav></app-nav>
        <div id="hero-section" class="contact-hero">
            <div id="menu-button">
                <svg height="32px" id="menu1" style="enable-background:new 0 0 32 32; fill:#fff;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </div>
			<div class="icon-letter-container">
				<img class='letter-c-icon' src="static/img/letters/letter-c-icon.png" alt="">
				<img class="letter-c-bg" src="static/img/letters/letter-c-bg.jpg" alt="">
			</div>
			<div class="email-container">
				<div class="container">
					<div class="row">
						<div class="tweleve columns">
							<a href="mailto:contact@redscope.com">
								<h1> {{ email }}</h1>
							</a>
						</div>
					</div>

					<div class="row">
						<div class="six columns icon-column">
							<p><img class="icons icon-pin" src="../assets/img/icon/icon-pin.svg" alt=""> {{ address }}</p>
						</div>
						<div class="six columns icon-column">
							<p><img class="icons icon-phone" src="../assets/img/icon/icon-phone.svg" alt=""><a href="tel:+61406685233"> {{ contactNumber }}</a></p>
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
        <app-showreel></app-showreel>
    </div>
</template>

<script>
import contactForm from './contact-form/ContactForm.vue';

export default {
    data: function() {
        return {
            email: 'contact@redscope.com',
            address: '319-325 Trafalgar St, Petersham NSW 2049',
            contactNumber: '0406 685 233'
        }
    },
    components: {
        'app-contactform': contactForm
    },
    created() {
        window.scrollTo(0, 0)
    },
    mounted() {

        var controller = new ScrollMagic.Controller();

        var menuBtn01 = new TimelineMax();
        menuBtn01.to('#menu1', 0, {css:{fill: '#db1e26'}, ease:Power1.easeOut}, '.01')
        var scene04 = new ScrollMagic.Scene({
            triggerElement: '#email-form-section', // element
            triggerHook: .1,
            reverse: true,
        })
        .setTween(menuBtn01)
        .addTo(controller)

        var menuBtn02 = new TimelineMax();
        menuBtn02.to('#menu1', 0, {css:{fill: '#FFFFFF'}, ease:Power1.easeOut}, '.01')
        var scene05 = new ScrollMagic.Scene({
            triggerElement: '#showreel-section', // element
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

<style lang="css">
</style>
