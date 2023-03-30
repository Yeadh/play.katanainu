$(function () {
console.log('From Main Js')

$(window).on('load', function () {
	//preloader();
	aosAnimation();
	parollerActive();
	wowAnimation();
	mainSlider()
});


/*=============================================
	=    		 Add Class		      =
=============================================*/
	function myFunction() {
		var element = document.getElementById("myDIV");
		element.classList.add("mystyle");
	}
/*=============================================
	=    		 Remove Class		      =
=============================================*/

	$(".go_down").click(function () {
		$(".purchase-title-paragraph p").removeClass("hide_text");
	});
/*=============================================
	=    		 Main Slider		      =
=============================================*/


function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationDuration = $this.data('duration');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.css({
				'animation-duration': $animationDuration,
				'-webkit-animation-duration': $animationDuration
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}



/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-wrap li.menu-item-has-children ul').length) {
	$('.menu-wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}

//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 345) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}

/*=============================================
	=    		 Main Slider		      =
=============================================*/
// $('.main-slider').not('.slick-initialized').on('init', function(){
// 	console.log('Main slider init')
// }).on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 	let $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 	doAnimations($animatingElements);
// }).slick({
// 	autoplay: false,
// 	autoplaySpeed: 10000,
// 	dots: false,
// 	fade: true,
// 	arrows: true,
// 	prevArrow: '<button type="button" class="slick-prev"><i class="fa-sharp fa-solid fa-angle-left"></i></button>',
// 	nextArrow: '<button type="button" class="slick-next"><i class="fa-sharp fa-solid fa-angle-right"></i></button>',
// 	responsive: [{
// 		breakpoint: 767,
// 		settings: {
// 			dots: false,
// 			arrows: false
// 		}
// 	}]
// });

function doAnimations(elements) {
	let animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	elements.each(function () {
		let $this = $(this);
		let $animationDelay = $this.data('wow-delay');

		let $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
	});
}
/*=============================================
	=    	NFT slider		     =
=============================================*/
$('.nft-slider').children('.nft-item').each(function(indx, el){
	setInterval(function(){
		nftRotation(el)
	}, 3000)
})

function nftRotation(child){
	if(child.classList.contains('active')){
		child.classList.remove('active')
		child.classList.add('prev')
	}else if(child.classList.contains('next')){
		child.classList.remove('next')
		child.classList.add('active')
	}else if(child.classList.contains('prev')){
		child.classList.remove('prev')
		child.classList.add('next')
	}
}

/*=============================================
	=    	Text Active		     =
=============================================*/
function parollerActive() {
	$('.paroller').paroller({
		transition: 'transform 0s ease'
	});
}


/*=============================================
	=    	Coin Slider Active		     =
=============================================*/
$('.coin-slider-active').owlCarousel({
	loop: true,
	margin: 15,
	items: 1,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['', '<i class="fa-solid fa-arrow-right"></i>'],
	nav: true,
	dots: true,
	responsive: {
		0: {
			items: 1,
			center: false,
			nav: false,
		},
		575: {
			items: 1,
			center: false,
			nav: false,
		},
		768: {
			items: 1,
			center: false,
		},
		992: {
			items: 1,
			center: false,
		},
		1200: {
			items: 1
		},
	}
})

/*=============================================
	=    	Coin Slider Active		     =
=============================================*/
$('.roadmap-active').owlCarousel({
	loop: true,
	margin: 0,
	items: 4,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	nav: false,
	dots: true,
	responsive: {
		0: {
			items: 1,
			center: false,
			nav: false,
		},
		575: {
			items: 1,
			center: false,
			nav: false,
		},
		768: {
			items: 2,
			center: false,
		},
		992: {
			items: 3,
			center: false,
		},
		1200: {
			items: 5
		},
	}
})


/*=============================================
	=    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=    		Action Active		      =
=============================================*/
// $('.action-active').slick({
// 	dots: false,
// 	infinite: true,
// 	speed: 1000,
// 	autoplay: false,
// 	arrows: true,
// 	centerMode: true,
// 	centerPadding: '540px',
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
//  	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
//  	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>',
// 	responsive: [
// 		{
// 			breakpoint: 1500,
// 			settings: {
// 				centerPadding: '300px',
// 			}
// 		},
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				centerPadding: '150px',
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				centerPadding: '80px',
// 			}
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				arrows: false,
// 				centerPadding: '15px',
// 			}
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				centerMode: false,
// 				arrows: false,
// 				centerPadding: '15px',
// 			}
// 		},
// 	]
// });

/*=============================================
	=    		Characters Slider	      =
=============================================*/
$('#cascade-slider').cascadeSlider({});


// Ecosystem slider
// $('.eco-slider').slick({
// 	infinite:true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	dots: false,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>'
// });


/*=============================================
	=    		Gallery Active		      =
=============================================*/
// $('.gallery-active')
// .on('afterChange init', function(event, slick, direction){
//     // remove all prev/next
//     slick.$slides.removeClass('prevdiv').removeClass('nextdiv');

//     // find current slide
//     for (var i = 0; i < slick.$slides.length; i++)
//     {
//         var $slide = $(slick.$slides[i]);
//         if ($slide.hasClass('slick-current')) {
//             // update DOM siblings
//             $slide.prev().addClass('prevdiv');
//             $slide.next().addClass('nextdiv');
//             break;
//         }
//     }
//   }
// )
// .on('beforeChange', function(event, slick) {
//     // optional, but cleaner maybe
//     // remove all prev/next
//     slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
// })
// .slick({
// 	dots: false,
// 	infinite: true,
// 	speed: 500,
// 	autoplay: false,
// 	centerMode: true,
// 	centerPadding: '440px',
// 	arrows: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>',
// 	asNavFor: '.gallery-nav',
// 	responsive: [
// 		{
// 			breakpoint: 1500,
// 			settings: {
// 				centerPadding: '300px',
// 			}
// 		},
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				centerPadding: '200px',
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				centerPadding: '80px',
// 			}
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				centerPadding: '50px',
// 				arrows: false,
// 			}
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				centerPadding: '15px',
// 				arrows: false,
// 			}
// 		},
// 	]
// });
// $('.gallery-nav').slick({
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	asNavFor: '.gallery-active',
// 	dots: false,
// 	centerMode: false,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>',
// 	focusOnSelect: true,
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 5,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 4,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 3,
// 				slidesToScroll: 1,
// 				arrows: false,
// 			}
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 				arrows: false,
// 			}
// 		},
// 	]
// });


/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.grid').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-item',
		}
	});
	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.product-license li').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*=============================================
	=    		 Aos Active  	         =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}


/*=============================================
	=    		weapons slider	      =
=============================================*/
// $('.weapons-slider').not('.slick-initialized').on('init', function (event, slick) {
// 	//weaponSlider(slick)
// 	console.log('Weapons slider init')
// }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

// }).on('afterChange', function (event, slick, currentSlide) {

// }).slick({
// 	dots: false,
// 	infinite: true,
// 	speed: 500,
// 	autoplay: false,
// 	// variableWidth: true,
// 	draggable: false,
// 	centerMode: true,
// 	initialSlide: 4,
// 	centerPadding: '820px',
// 	arrows: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>',
// 	asNavFor: '.weapon-nav'
// });
// $('.weapon-nav').not('.slick-initialized').slick({
// 	slidesToShow: 10,
// 	slidesToScroll: 1,
// 	asNavFor: '.weapons-slider',
// 	arrows: true,
// 	dots: false,
// 	centerMode: false,
// 	prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icons/gallery_left_arrow.png" alt=""></button>',
// 	nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icons/gallery_right_arrow.png" alt=""></button>',
// 	focusOnSelect: true,
// 	responsive: [{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 10,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		},
// 		{
// 			breakpoint: 992,
// 			settings: {
// 				slidesToShow: 7,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 767,
// 			settings: {
// 				slidesToShow: 5,
// 				slidesToScroll: 1,
// 				arrows: false,
// 			}
// 		},
// 		{
// 			breakpoint: 575,
// 			settings: {
// 				slidesToShow: 3,
// 				slidesToScroll: 1,
// 				arrows: false,
// 			}
// 		},
// 	]
// });

/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


});