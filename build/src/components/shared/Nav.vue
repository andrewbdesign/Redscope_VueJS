<template>
      <div id="menu-list">
			<img class="close-btn" src="../../assets/img/icon/icon-cross.svg" alt="">
			<div class="menu-container">
				<div class="container">
				<div class="row">
					<div class="six columns left-menu">

						<a href="#"><img class="redscope-menu-logo" src="../../assets/img/logo-redscope.svg"></a>

						<div class="left-menu-mobile">
							<router-link to="/">Home</router-link>
							<router-link to="/about">About</router-link>
							<router-link to="/contact">Contact</router-link>
						</div>

						<div class="address">
							<p v-html="address"></p>
						</div>

						<a href="mailto:contact@redscopefilms.com"> {{ email }}</a>
						<a href="tel:+61406685233"> {{ contactNumber }}</a>
						<div class="social-media-menu">
							<a href="https://www.facebook.com/redscopefilms/">
								<img src="../../assets/img/icon/logo-facebook.svg" alt="">
							</a>
							<a href="https://www.instagram.com/redscopefilms/">
								<img src="../../assets/img/icon/logo-instagram.svg" alt="">
							</a>
							<a href="https://vimeo.com/redscopefilms">
								<img src="../../assets/img/icon/logo-vimeo.svg" alt="">
							</a>
						</div>

					</div>
					<div class="six columns right-menu">
						<router-link to="/">Home</router-link>
						<router-link to="/about">About</router-link>
						<router-link to="/contact">Contact</router-link>
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
                address: '319-325 Trafalgar St,<br>Petersham NSW 2049',
                email: 'E: contact@redscopefilms.com',
                contactNumber: 'Ph: 0406 685 233',

            }
        },
        mounted() {
            $("#menu-button").click(function(){
                $('#menu-list').fadeIn()
                $("body").addClass("modal-open")
                TweenMax.set('.right-menu a', {alpha:0, y:-10,})
                var tl = new TimelineMax()
                tl.staggerTo('.right-menu a', .6, {alpha:1, y:0, ease:Power1.eaesOut}, .2, '0')
            })

            $('.close-btn').click(function(){
            	$('#menu-list').fadeOut()
            	$("body").removeClass("modal-open")
            })

            $('#menu-list a').click(function(){
            	$('#menu-list').fadeOut()
            	$("body").removeClass("modal-open")
            })
        }
    }
</script>

<style lang="scss">
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;


#menu-button {
	position: fixed;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    z-index: 2300;
	pointer-events: all;
	cursor: pointer;
}

#menu1 {
	transition: all .1s ease-out;
}

.invert-colour {
	fill: #de1f26 !important;
}

#menu-list {
	display: none;
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 3300;
    background: #000;
	opacity: .97;
	.menu-container {
		position: absolute;
		padding: 20px;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: auto;
		width: 100%;
		height: 100%;
	}
	@media (min-width: $mobile) {
		.menu-container {
			padding: 60px;
			height: 500px;
		}
	}
	.redscope-menu-logo {
        width: 240px;
        height: 72px;
		margin-bottom: 30px;
	}
	p {
		color: #fff;
	}

	a {
		display: block;
		text-align: left;
		color: #fff;
		text-decoration: none;
		padding-bottom: 60px;
		font-size: 40px;
		font-family: 'Fira Sans', sans-serif;
		font-weight: 700;
        margin-right: 5px;
		letter-spacing: 1px;
	}
	.close-btn {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		pointer-events: all;
		z-index: 300;
	}
	a:hover {
		color: #d11c23;
	}

	.left-menu {
		p {
			margin-bottom: 20px;
		}
		a {
			font-family: 'Cousine', sans-serif;
			font-size: 16px;
			padding: 0;
			margin-bottom: 20px;
			font-weight: 400;
		}
		a:hover {
			color: #fff;
		}
		.left-menu-mobile a {
			font-family: 'Fira Sans', sans-serif;
			font-size: 30px;
		}
		.social-media-menu {
			font-size: 16px;
			padding: 0;
			margin-bottom: 20px;
			a {
				display: inline;
			}
			img {
				width: 30px;
				height: 30px;
			}
		}

	}

	.right-menu {
		display: none;
		a {
			padding-left: 0;
			padding-bottom: 20px;
			font-size: 30px;
			text-transform: uppercase;
		}
	}
	@media (min-width: $mobile) {
		.right-menu {
			display: block;
			a {
				padding-left: 30px;
				padding-bottom: 30px;
				font-size: 40px;
			}
		}
		.left-menu-mobile {
			display: none;
		}
	}
	@media (min-width: $tablet) {
		.right-menu {
	    margin-top: 70px;
	    position: relative;
	    left: 31px;
		}
		.right-menu a{
	    padding-bottom: 64px;
	    font-size: 60px;
			padding-left: 0;
		}
		.menu-container {
			width: 790px;
		}
	}
}

</style>
