/**
 * 
 *
 * This file contains all template JS functions
 *
 * @package Church 
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Navbar Fixed Top
 * 02 - Owl Carousel
          - Home Slider    
          - Who Slider
          - Pastor Slider    
          - Quote Slider
          - Supporter Slider
          - Event Slider  
          - Event Main Slider         
          - Event Two Slider
          - Testimonial Slider
          - About Slider
          - Speaker Slider
          - Priest Slider
          - Priest Two Slider
          - Ministry Slider
          - Blog Slider
          - Sermons Slider
          - Trending Sermons Slider
 * 03 - Video Play  
 * 04 - Smooth Scroll
 * 05 - Mailchimp Form
 * 06 - Popup Dialog
 * 07 - Navigation
 * 08 - Event Countdown 
 * 09 - Gallery Filter
 * 10 - Price Slider / Filter
 * 11 - Search
 * 12 - Video Popup 
 * 13 - Audio Popup 
 * 14 - Preloader

--------------------------------------------------------------*/
(function($) {
  "use strict";

  var $window = $( window )
  var navfix = $( '.navbar-fixed-top' )
  var videoitem = $( '.video-item' )
  var cmgcountdown = $( '.coming-countdown' )
  var fltrimages = $( '.filter-images' )
  var videos = $( '.videos' )
  var images = $( '.images' )
  var fltrvideos = $( '.filter-videos' )
  var fltrdtl = $( '.filter-dtl li a' )
  var fltrall = $( '.filter-all' )
  var amount = $( '#amount' )
  var sliderrange = $( '#slider-range' )
  var search = $( '.search' )
  var mplayer = $( '.mPlayer' )
  var mplayerdiv = $( '.mPlayer DIV' )

// Navbar Fixed Top
  $window.scroll(function() {
    if ($(".nav-bar").offset().top > 50) {
      navfix.addClass("top-nav-collapse");
    } else {
      navfix.removeClass("top-nav-collapse");
    }
  }); 

// Owl Carousel 
  // Home Slider    
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });
  
  // Who Slider   
    $('#who-slider').on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace) return
      var carousel = e.relatedTarget
      $('#who-count').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length)
      }).owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 3000,
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    });

  // Pastor Slider 
    $("#pastor-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 600,
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        600: {
            items: 1,
            nav: false,
            dots: true,
        },
        768: {
            items: 1,
            nav: false,
        },
        1100: {
            items: 1,
            nav: false,
        }
      }
    }); 

  // Quote Slider 
    $("#quote-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 600,
      responsive: {
        0: {
            items: 1       
        },
        600: {
            items: 1
        },
        768: {
            items: 1
        },
        1100: {
            items: 1
        }
      }
    });  

  // Supporter Slider    
    $("#supporter-slider").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 300,
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
        },
        992: {
            items: 3,
            nav: false,
        },
        1100: {
            items: 4,
            nav: false,
        }
      }
    });

  // Event Slider 
    $("#event-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 300,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: true,
        },
        1100: {
            items: 3,
            nav: true,
        }
      }
    });

  // Event Main Slider 
    $("#event-main-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,      
      margin: 30,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 600,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1100: {
            items: 3
        }
      }
    }); 

  // Event Two Slider 
    $("#event-slider-two").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            nav: true
        },
        1100: {
            items: 1,
            nav: true
        }
      }
    });

  // Testimonial Slider 
    $("#testimonial-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,      
      margin: 30,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 600,
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 2
        },
        1100: {
            items: 3
        }
      }
    }); 

    // About Slider 
    $("#abt-slider").owlCarousel({
      loop: true,
      items: 4,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      stopOnHover:true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false
        },
        600: {
            items: 2,
            nav: false,
            dots: false
        },
        768: {
            items: 3,
            nav: true
        },
        1100: {
            items: 4,
            nav: true
        }
      }
    });

  // Speaker Slider 
    $("#speaker-slider").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 11,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1100: {
            items: 5
        }
      }
    });

  // Priest Slider
   $("#priest-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1100: {
            items: 3
        }
      }
    });

  // Priest Two Slider 
    $("#priest-slider-two").owlCarousel({
      loop: true,
      items: 3,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false
        },
        600: {
            items: 2,
            nav: false,
            dots: false
        },
        768: {
            items: 3,
            nav: true
        },
        1100: {
            items: 3,
            nav: true
        }
      }
    });

  // Ministry Slider 
    $("#ministry-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 400,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            slideBy: 1
        },
        600: {
            items: 1,
            nav: false,
            dots: false
        },
        768: {
            items: 2,
            nav: true,
            margin: 50,
            slideBy: 2
        },
        1100: {
            items: 2,
            nav: true,
            slideBy: 2
        }
      }
    });
    
  // Blog Slider 
    $("#blog-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 200,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            slideBy: 1
        },
        600: {
            items: 1,
            nav: false,
            dots: false
        },
        768: {
            items: 2,
            nav: true,
            margin: 50,
            slideBy: 2
        },
        1100: {
            items: 2,
            nav: true,
            slideBy: 2
        }
      }
    });

  // Sermons Slider 
    $("#sermons-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: false,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
            slideBy: 1,
            margin:10
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
            slideBy: 1,
            margin:10
        },
        768: {
            items: 1,
            nav: false,
            slideBy: 1,            
            margin:10
        },
        1100: {
            items: 2,
            nav: true,
            slideBy: 1
        }
      }
    });

  // Trending Sermons Slider 
    $("#trending-sermons-slider").owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: true,
      autoplayTimeout: 5000,
      smartSpeed: 300,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false
        },
        600: {
            items: 1,
            nav: false,
            dots: false
        },
        768: {
            items: 1,
            nav: true
        },
        1100: {
            items: 2,
            nav: true
        }
      }
    });

//Video Play     
  $('.btn-video-play').on('click',function() {
    videoitem + $('.video-preview').append(video_url);
    $(this).hide();
    $(".video-preview p").hide();
  });     
  $('.btn-video-play-two').on('click',function() {
    videoitem + $('.video-preview-two').append(video_url);
    $(this).hide();
  });  

// Smooth Scroll
  smoothScroll.init();
    
// Mailchimp Form
  $('#subscribe-form').ajaxChimp({
      url: 'https://wporganic.us15.list-manage.com/subscribe/post?u=2e1f3a1e4ed82b11f45eb829a&amp;id=ef9c8b6caf'
  });

// Popup Dialog
  $(function() {
    $('.portfolio-popup').magnificPopup({
      delegate: '.portfolio-img a',
      type: 'image',    
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',    
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Church</small>';
        }
      }
    });
  });

// Navigation 
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  /**
   *   This function is use only live preview countdown last date display.
   *   Don't use in your html script
   */
  function get_last_date(){
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var lastDayWithSlashes = lastDay.getFullYear() + '/' + (lastDay.getMonth() + 1) + '/' + ( lastDay.getDate() ) ;
    return lastDayWithSlashes;  // return '2017/5/30';
  }

// Event Countdown 
  if(cmgcountdown.length){ 
    (cmgcountdown).each(function() {  $(this).attr('data-countdown', get_last_date() );   });
  }  

// Event Countdown 
  if(cmgcountdown.length){ 

    (cmgcountdown).each(function() {

    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      var $this = $(this).html(event.strftime('' + '<div class="counter-col"><span class="count-dtl count-days">%D </span></div> ' + '<div class="counter-col"><span class="count-dtl count-hours">%H</span></div>  ' + '<div class="counter-col"><span class="count-dtl count-minutes">%M</span></div>  ' + '<div class="counter-col"><span class="count-dtl count-seconds">%S</span></div>'));
    });
   });
  }

// Gallery Filter
  $(function(){
    fltrimages.on("click",function(){
      videos.fadeOut(400);
      images.fadeIn(400);        
      $(".filter-dtl li a").removeClass("active");
      fltrimages.addClass("active");
    });
    fltrvideos.on("click",function(){
      images.fadeOut(400);
      videos.fadeIn(400);
      fltrdtl.removeClass("active");
      fltrvideos.addClass("active");
    });
    fltrall.on("click",function(){
      images.fadeIn(400);
      videos.fadeIn(400);
      fltrdtl.removeClass("active");
      fltrall.addClass("active");
    });   
  });

// Price Slider / Filter
  sliderrange.slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 0, 450 ],
    slide: function( event, ui ) {
      amount.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  amount.val( "$" + sliderrange.slider( "values", 0 ) +
      " - $" + sliderrange.slider( "values", 1 ) );

// Search
 $('.search-icon').on('click', function (e) {
    e.preventDefault();
    search.addClass('active');
  });

  $('.search-close').on('click', function (e) {
    e.preventDefault();
    search.removeClass('active');
  });

// Video & Audio Popup 
  $(function() {
    $('.popup-video, .popup-audio').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });

// Preloader   
  $window.on('load', function(){ 
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow'); 
  });  

  // Right click disable
  $(document).bind("contextmenu", function (e) {
        e.preventDefault();
	alert("Right Click is Disabled");
  });


  /**
   *  Load Marker
   *  -----------
   */
  if( $( '.marker_show_on_map' ).length ){

      $( '.marker_show_on_map' ).map( function(){

          var map_id      =   $(this).attr( 'id' ),

              map_lat     =   parseFloat( $( '#' + map_id).attr( 'data-latitude' ) ),

              map_log     =   parseFloat( $( '#' + map_id).attr( 'data-longitude' ) ),

              marker      =   $( '#' + map_id ).attr( 'data-marker' ),

              map_zoom    =   $( '#' + map_id).attr( 'data-zoom' )

                              ?   parseInt( $( '#' + map_id ).attr( 'data-zoom' ) )

                              :   parseInt( '9' ),

              position    =   [ map_lat, map_log ];

          /**
           *  Make sure : Map is first time load on document
           *  ----------------------------------------------
           */
          if( !  $( '#' + map_id ).hasClass( 'map-load-done' ) ){

              /**
               *  Have Data ?
               *  -----------
               */
              if( $.isArray( position ) ){

                  var weddingdir_listing_marker = L.icon({

                      iconUrl: marker,

                      iconSize: [80, 80],

                      iconAnchor: [40, 80],

                      popupAnchor: [-8, -100]
                  });

                  /**
                   *  Load the Map
                   *  ------------
                   */
                  var map     =   L.map(

                                      /**
                                       *  Map load id
                                       *  -----------
                                       */
                                      map_id,

                                      /**
                                       *  Map Options
                                       *  -----------
                                       */
                                      {
                                          center              :  position,

                                          maxzoom             :  18,

                                          minZoom             :  2,

                                          zoom                :  map_zoom,

                                          scrollWheelZoom     :  false
                                      }
                                  )
                                  .setView(
                                      
                                      position,

                                      parseInt( map_zoom )
                                  );

                  /**
                   *  Title Layer
                   *  -----------
                   */
                  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

                      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',

                      subdomains: ['a','b','c']

                  } ).addTo( map );

                  /**
                   *  Marker
                   *  ------
                   */
                  L.marker( 

                      position,

                      {
                          icon    :       weddingdir_listing_marker
                      }

                  ).addTo( map );

                  /**
                   *  Inform the document with class name - map is loaded
                   *  ---------------------------------------------------
                   */
                  $( '#' + map_id ).addClass( 'map-load-done' );
              }
          }

      } );
  }

})(jQuery);