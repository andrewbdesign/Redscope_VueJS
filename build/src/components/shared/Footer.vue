<template lang="html">
  <div>
  <div id="footer-section">
			<div class="container">
				<div class="row">
					<div class="four columns">
						<div class="logo-redscope-footer">
              <router-link to="/">
                <img src="../../assets/img/logo-redscope.svg" alt="">
              </router-link>
						</div>
					</div>
					<div class="four columns icon-column">
						<p><img class="icons icon-pin" src="../../assets/img/icon/icon-pin.svg" alt="">319-325 Trafalgar St,<br>Petersham NSW 2049</p>
						<p><a href="mailto:contact@redscopefilms.com">contact@redscopefilms.com</a></p>
						<p><a href="tel:+61406685233">0406 685 233</a></p>
					</div>
					<div class="four columns">
						<div class="social-container">
							<div class="social-media-links">
								<p>
									<a href="https://www.facebook.com/redscopefilms/" target="_blank">
										<img src="../../assets/img/icon/logo-facebook.svg" alt="">
									</a>
									<a href="https://www.instagram.com/redscopefilms/" target="_blank">
										<img src="../../assets/img/icon/logo-instagram.svg" alt="">
									</a>
									<a href="https://vimeo.com/redscopefilms" target="_blank">
										<img src="../../assets/img/icon/logo-vimeo.svg" alt="">
									</a>
								</p>

							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
  <div class="footer-nav">
    <div class="container">
      <div class="row">
        <div class="eight columns">
          <p><a href="#showreel-section">Showreel</a> <span class="divider-link">|</span> <!--<a href="works.html">Works</a> <span class="divider-link">|</span> --><router-link to="/about">About</router-link> <span class="divider-link">|</span> <router-link to="/contact">Contact</router-link></p>
        </div>
        <div class="four columns copyright">Copyright © Redscope</div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
#footer-section {
    background: #282828;
    padding: 50px 0;
    color: #fff;
    p {
        font-size: 14px;
        text-align: center;
        margin-bottom: 10px;
        color: #fff;
        @media (min-width: $mobile) {
            text-align: left;
        }
        img {
            width: 100%;
        }
    }
    a {
        color: #fff;
        text-decoration: none;
        display: inline;
        font-family: 'Cousine', sans-serif;
    }
    .icons {
        width: 20px;
        height: 20px;
        position: relative;
        margin-left: -20px;

    }
    .icon-pin {
        top: 4px;
        right: 16px;
    }
    .icon-email {
        right: 10px;
        top: 5px;
    }
    .icon-phone {
        right: 10px;
        top: 5px;
    }
    .icon-column {
        padding-bottom: 20px;
        position: relative;
        top: 10px;
    }
    .logo-redscope-footer {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 130px;
        img {
            position: absolute;
            width: 90%;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            max-width: 220px;
        }
    }
    .social-container {
        position: relative;
        width: 100%;
        height: 70px;
    }
    .social-media-links {
        position: relative;
        bottom: 0;
        height: 40px;
        a {
            display: inline-block;
            margin-right: 10px;
        }
        img {
            width: 40px;
            height: 40px;
        }
    }
    @media (min-width: $mobile) {
        .social-container {
            height: 130px;
        }
        .social-media-links {
            position: absolute;

        }
    }
}

.footer-nav {
    background: #222222;
    padding: 20px 0;
    color: #fff;
    p {
        text-align: center;
    }
    .divider-link {
        display: inline-block;
        margin: 0;
    }
    @media(min-width: $mobile) {
        .divider-link {
            margin: 0 15px;
        }
        p {
            text-align: left;
        }
    }
    a {
        color: #fff;
        text-decoration: none;
    }
}
.copyright {
    text-align: center;
    font-family: 'Cousine', sans-serif;
    margin-top: 20px;
}
@media (min-width: $mobile) {
    .copyright {
        text-align: right;
    }
}
</style>
