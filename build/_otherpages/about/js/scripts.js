$(document).ready( () => loadAssets() )

function loadAssets() {
    let i = [
        'logo-redscope.svg',
        'menu.svg',
        'cross.svg',
        // Icons
        'img/icon/icon-comment.svg',
        'img/icon/icon-comment.svg',
        'img/icon/icon-comment.svg',
        'img/icon/icon-comment.svg',
        'img/icon/icon-comment.svg',
        // Logos
        'img/icon/logo-facebook.svg',
        'img/icon/logo-instagram.svg',
        'img/icon/logo-vimeo.svg',
        // Hero image
        'img/about-hero-image.jpg'
    ]

    preloadimages(i).done( () => showWebsite() )
}

function showWebsite() {
    $('#website-section').show()
    heroSection()
    showReel()
}

function heroSection() {
    let bgImage02 = 'img/about-hero-image.jpg'
    $('.bg-image.about-bg-image').css('background-image', 'url('+ bgImage02 + ')')

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
}

// ==============
// Instragram API
// ==============
var ig = {};
// !!! USE YOUR OWN TOKEN
ig.token = '1132227865.66dbdc4.f568369f12cf49ea8494b82e1a3b5464';

ig.init = function() {
  $('.instagram').each(function(i) {
    var args = {};
    args.container = $(this);
    args.userid = args.container.data('userid');
    args.limit = args.container.data('limit');
    args.feedurl = 'https://api.instagram.com/v1/users/'+args.userid+'/media/recent/?access_token='+ig.token+'&count='+args.limit+'&callback=?';
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

  $.each(data.data,function (i,item) {
		var videoLink;
    if (item.caption) var caption = item.caption.text;
    var thumb = item.images.low_resolution.url;
    var img = item.images.standard_resolution.url;
		var videoType = item.type === 'video';
		if(videoType) {
			videoLink = item.videos.standard_resolution.url;
		}
		// console.log(item, i)
		var instaLink = item.link;

		var commentCount = item.comments.count;
		var likeCount = item.likes.count;
    //get 1280 size photo [hack until avail in api]
    var hires = img.replace('s640x640', '1080x1080');
    args.html += '<a class="image" style="background-image: url('+thumb+');" data-img="'+hires+'" data-url="' + instaLink + '">';
    // if (caption) {
		// 	var captionLength = caption;
		// 			captionLength = captionLength.length;
		// 	var textLimiter = 90;
		// 	if (captionLength > textLimiter) { caption = caption.substr(0,textLimiter); }
		// 		args.html += '<span class="caption">'+caption+'...';
		// }
		args.html+= '<span class="caption"><img class="icon-heart" src="img/icon/icon-heart.svg"> ' + likeCount +  '<img class="icon-comment" src="img/icon/icon-comment.svg">' + commentCount + ' </span>'
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

// =========
// Listeners
// =========
$('.instagram').on('click', '.image', function(){
    var img = this.dataset.img;
    var url = this.dataset.url;
    window.open(url)
});

// ===========
// Menu button
// ===========
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

// ============
// Team section
// ============
$('.bio-column video').on('mouseover', function(){
	$(this).get(0).play()
}).on('ended', function () {
	$(this).load()
})

// ================
// Showreel section
// ================
let showreelAnimation;
function showReel() {

    showreelAnimation = new TimelineMax(
        {repeat:-1}
    )

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
}


// =========
// Preloader
// =========
function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0
    var postaction = function () {}
    var arr = (typeof arr != "object") ? [arr] : arr

    function imageloadpost() {
        loadedimages++
        if (loadedimages == arr.length) {
            postaction(newimages) //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image()
        newimages[i].src = arr[i]
        newimages[i].onload = function () {
            imageloadpost()
        }
        newimages[i].onerror = function () {
            imageloadpost()
        }
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction //remember user defined callback functions to be called when images load
        }
    }
}
