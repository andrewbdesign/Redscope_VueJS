<template>
<div id="instagram-feed">
  <div class="container">
    <h1>Follow us on Instagram</h1>
    <div class="instagram" data-userid="1132227865" data-limit="4">@redscopefilms</div>
    <div class="igviewer hidden"><img src=""></div>
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
        // InstagramFeed
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

    }
}
</script>

<style lang="scss">
$mobile: 560px;
$tablet: 820px;
$desktop: 1024px;
#instagram-feed {
    padding: 70px 0;
    .container {
        max-width: 1040px;
        width: 100%;
    }
    h1 {
        text-align: center;
        margin: 0 0 40px;
        font-size: 2em;
    }
}
@media (min-width: $mobile) {
    .icon-column {
        font-size: 12px;
        overflow: hidden;
    }
}
@media (min-width: 630px) {
    .icon-column {
        padding-left: 0;
        font-size: 14px;
    }
}
@media(min-width: $tablet) {
    .icon-column {
        padding-left: 50px;
        overflow: visible;
        font-size: 1rem;
    }
}

.instagram {
    text-align: center;
}

.copyright {
    text-align: center;
    font-family: 'Cousine', sans-serif;
}
@media (min-width: $mobile) {
    .copyright {
        text-align: right;
    }

}
@media (min-width: $mobile) {
    .container-showreel-thumbnail {
        transform: scale(1);
    }
}

// INSTRAGRAM

.igviewer {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: RGBA(29, 31, 32, 0.9);
    z-index: 9000;

    img {
        display: block;
        margin: 3rem auto;
        // // height: calc(100vh - 2rem);
        height: 80vh;
        width: auto !important;
        box-shadow: 0 10px 40px 10px rgba(0, 0, 0, 0.8);
    }
    &.hidden {
        display: none;
    }
}

.instagram {
    position: relative;
    margin: 0 auto;
    width: 100%;

    .image {
        display: block;
        width: 80vw;
        height: 80vw;
        position: relative;
        margin: 0 auto 12px;
        background-size: 100%;
        background-position: 50% 50%;
        transition: background 200ms ease-in-out;
        background-repeat: no-repeat;
        background-color: #000;
        cursor: pointer;
        .caption {
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            background-color: rgba(0,0,0,0.2);
            color: #FFF;
            font-size: 12px;
            padding: 50% 0;
            font-family: Cousine,sans-serif;
            text-align: center;
            transition: opacity 200ms ease-in-out;
            .icon-comment,
            .icon-heart {
                display: inline-block;
                width: 14px;
            }
            .icon-comment {
                margin-left: 25px;
                margin-right: 5px;
                position: relative;
                top: 2px;
            }
            .icon-heart {
                margin-right: -3px;
                position: relative;
                top: 2px;
            }
        }
        &:hover {
            // background-size: 105%;
            .caption {
                opacity: 1;
            }
        }
    }
}
@media(min-width: $mobile) {
    .instagram {
        width: 548px;
        .image {
            width: 270px;
            height: 270px;
            display: inline-block;
            margin-right: 8px;
            margin-bottom: 4px;
            margin-top: 0;
        }
        .image:nth-child(2n+0) {
            margin-right: 0;
        }
    }
}
@media (min-width: $tablet) {
    .instagram {
        width: 766px;
        .image {
            width: 250px;
            height: 250px;
            margin-right: 8px;
        }
        .image:nth-child(2n+0) {
            margin-right: 8px;
        }
        .image:nth-child(3n+0) {
            margin-right: 0;
        }
    }
}
@media (min-width: $desktop) {
    .instagram {
        width: $desktop;
        .image {
            margin-right: 8px;
        }
        .image:nth-child(3n+0) {
            margin-right: 8px;
        }
        .image:nth-child(4n+0) {
            margin-right: 0;
        }
    }
}
</style>
