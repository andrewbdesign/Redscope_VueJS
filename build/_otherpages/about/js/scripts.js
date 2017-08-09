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
    ]

    preloadimages(i).done( () => showWebsite() )
}

function showWebsite() {
    $('#website-section').show()
    showReel()
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
		console.log(item, i)
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

// Listeners
$('.instagram').on('click', '.image', function(){
    var img = this.dataset.img;
    var url = this.dataset.url;
    window.open(url)
});

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
