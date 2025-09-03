 // AOS.init({
 // 	duration: 800,
 // 	easing: 'slide'
 // });


// WhatsApp click: current tab goes to sent-contact, WhatsApp opens in new tab
function attachWhatsAppHandler() {
	document.querySelectorAll('.wa-trigger').forEach(function(btn) {
		if (!btn.classList.contains('wa-handler-attached')) {
			btn.classList.add('wa-handler-attached');
			btn.addEventListener('click', function(e) {
				e.preventDefault();
				window.location.href = 'sent-contact.html?whatsapp=1';
				window.open('https://wa.me/5531993791793?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%meu%procedimento%C3%A7%C3%A3o%20de%20sobrancelhas%20no%20Bella%20Lumea.%20Pode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F', '_blank');
			});
		}
	});
}
document.addEventListener('DOMContentLoaded', attachWhatsAppHandler);
// In case of dynamic content, also try after 1s
setTimeout(attachWhatsAppHandler, 1000);
(function($) {

	"use strict";

	// Slide down animation for services dropdown
	$(document).ready(function() {
		var $dropdownToggle = $('#navbarDropdownMenuLink');
		var $dropdownMenu = $('#services-navbar-list');
		if ($dropdownToggle.length && $dropdownMenu.length) {
			// Prevent default Bootstrap dropdown behavior
			$dropdownToggle.off('click').on('click', function(e) {
				e.preventDefault();
				var isShown = $dropdownMenu.hasClass('show');
				if (!isShown) {
					$dropdownMenu.stop(true, true).slideDown(250).addClass('show');
				} else {
					$dropdownMenu.stop(true, true).slideUp(200, function() {
						$dropdownMenu.removeClass('show');
					});
				}
			});
			// Hide dropdown when clicking outside
			$(document).on('click', function(e) {
				if (!$dropdownMenu.is(e.target) && $dropdownMenu.has(e.target).length === 0 && !$dropdownToggle.is(e.target)) {
					if ($dropdownMenu.hasClass('show')) {
						$dropdownMenu.stop(true, true).slideUp(200, function() {
							$dropdownMenu.removeClass('show');
						});
					}
				}
			});
		}
	});

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: true,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0,
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-work').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});


	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// ...existing code...


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();




})(jQuery);

