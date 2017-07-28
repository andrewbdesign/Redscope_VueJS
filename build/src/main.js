// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import Cta from './components/shared/CtaButton'
import Showreel from './components/showreel/Showreel'
import InstagramFeed from './components/shared/InstagramFeed'

Vue.config.productionTip = false
Vue.component('app-nav', Nav)
Vue.component('app-footer', Footer)
Vue.component('app-showreel', Showreel)
Vue.component('app-cta', Cta)
Vue.component('app-instagramfeed', InstagramFeed)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// InstagramFeed
console.log('hi')
var ig = {};
// !!! USE YOUR OWN TOKEN
ig.token = '1132227865.66dbdc4.f568369f12cf49ea8494b82e1a3b5464';

ig.init = function() {
  $('.instagram').each(function(i) {
    var args = {};
    args.container = $(this);
    args.userid = args.container.data('userid');
    args.limit = args.container.data('limit');
    args.feedurl = 'https://api.instagram.com/v1/users/' + args.userid + '/media/recent/?access_token=' + ig.token + '&count=' + args.limit + '&callback=?';
    args.html = '';
    // PASS ARGS TO QUERY
    ig.query(args);
  });
}

ig.query = function(args) {
  $.getJSON(args.feedurl, {}, function(data) {
    // PASS QUERY DATA TO BUILDER
    ig.build(data, args);
  });
}

ig.build = function(data, args) {
  $.each(data.data, function(i, item) {
    var videoLink;
    if (item.caption) var caption = item.caption.text;
    var thumb = item.images.low_resolution.url;
    var img = item.images.standard_resolution.url;
    var videoType = item.type === 'video';
    if (videoType) {
      videoLink = item.videos.standard_resolution.url;
    }
    // console.log(item, i)
    var instaLink = item.link;
    var commentCount = item.comments.count;
    var likeCount = item.likes.count;
    //get 1280 size photo [hack until avail in api]
    var hires = img.replace('s640x640', '1080x1080');
    args.html += '<a class="image" style="background-image: url(' + thumb + ');" data-img="' + hires + '" data-url="' + instaLink + '">';
    args.html+= '<span class="caption"><img class="icon-heart" src="http://redscopefilms.com/img/icon/icon-heart.svg"> ' + likeCount +  '<img class="icon-comment" src="http://redscopefilms.com/img/icon/icon-comment.svg">' + commentCount + ' </span>'
    args.html += '</a>';
    // PASS TO OUTPUT
    ig.output(args);
  });
}

ig.output = function(args) {
  args.container.html(args.html);
}

ig.view = {
  viewer: $('.igviewer'),
  image: $('.igviewer img'),
  open: function(img) {
    ig.view.viewer.removeClass('hidden');
    ig.view.image.attr('src', img);
  },
  close: function() {
    ig.view.viewer.addClass('hidden');
    ig.view.image.attr('src', '');
  }
}

ig.init();

$('.instagram').on('click', '.image', function(){
  var img = this.dataset.img;
	var url = this.dataset.url;
	window.open(url)
});



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
