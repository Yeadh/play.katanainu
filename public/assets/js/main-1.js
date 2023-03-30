console.log('Main Js');
$(function () {
	/*=============================================
	=    	Text Active		     =
	=============================================*/
	function parollerActive() {
		$('.paroller').paroller({
			transition: 'transform 0s ease'
		});
	}

	parollerActive();
})

$(function () {
	/*=============================================
		=    		 Main Slider		      =
	=============================================*/
	$('.main-slider').not('.slick-initialized').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		let $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	}).slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-sharp fa-solid fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-sharp fa-solid fa-angle-right"></i></button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: false
			}
		}]
	});

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
		=    		Mobile Menu			      =
	=============================================*/
	//SubMenu Dropdown Toggle
	if ($('.menu-area li.menu-item-has-children ul').length) {
		$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

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
})

// $(function(){
// 	let carousel = $(".weapons-slider").waterwheelCarousel({});

// 	// $('#prev').bind('click', function () {
// 	// 	carousel.prev();
// 	// 	return false
// 	// });

// 	// $('#next').bind('click', function () {
// 	// 	carousel.next();
// 	// 	return false;
// 	// });
// });




$(function () {
	/*=============================================
		=    		Gallery Active		      =
	=============================================*/
	$('.gallery-active').not('.slick-initialized')
		.on('afterChange init', function (event, slick, direction) {

		})
		.on('beforeChange', function (event, slick) {

		})
		.slick({
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: false,
			centerMode: true,
			centerPadding: '440px',
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/gallery_left_arrow.png" alt=""></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/icons/gallery_right_arrow.png" alt=""></button>',
			asNavFor: '.gallery-nav'
		});
	$('.gallery-nav').not('.slick-initialized').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.gallery-active',
		dots: false,
		centerMode: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/gallery_left_arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/gallery_right_arrow.png" alt=""></button>',
		focusOnSelect: true,
		responsive: [{
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
	$('.action-active').not('.slick-initialized').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		arrows: false,
		centerMode: true,
		centerPadding: '540px',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	})

	$('#cascade-slider').cascadeSlider({});


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
	// Ecosystem slider
	$('.eco-slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/gallery_left_arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/gallery_right_arrow.png" alt=""></button>'
	});
})


$(function () {
	/*=============================================
		=    	Roadmap slider		     =
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
				items: 1,
				center: false,
			},
			992: {
				items: 1,
				center: false,
			},
			1200: {
				items: 5
			},
		}
	})

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
})



$(function () {

	function weaponSlider(slick) {
		let slides = slick.$slides
		slides[slick.currentSlide - 1].children[0].children[0].style.transform = 'scale(0.7)'
		slides[slick.currentSlide - 1].children[0].children[0].style.transformStyle = 'preserved-3d'
		slides[slick.currentSlide - 1].children[0].children[0].style.transition = '0.4s all'

		slides[slick.currentSlide - 2].children[0].children[0].style.transform = 'scale(0.5)'
		slides[slick.currentSlide - 2].children[0].children[0].style.transformStyle = 'preserved-3d'
		slides[slick.currentSlide - 2].children[0].children[0].style.transition = '0.4s all'

		slides[slick.currentSlide + 1].children[0].children[0].style.transform = 'scale(0.7)'
		slides[slick.currentSlide + 1].children[0].children[0].style.transformStyle = 'preserved-3d'
		slides[slick.currentSlide + 1].children[0].children[0].style.transition = '0.4s all'

		slides[slick.currentSlide + 1].children[0].children[0].style.transform = 'scale(0.5)'
		slides[slick.currentSlide + 1].children[0].children[0].style.transformStyle = 'preserved-3d'
		slides[slick.currentSlide + 1].children[0].children[0].style.transition = '0.4s all'
		slides[slick.currentSlide + 2].children[0].children[0].style.transform = 'scale(0.5)'
		slides[slick.currentSlide + 2].children[0].children[0].style.transformStyle = 'preserved-3d'
		slides[slick.currentSlide + 2].children[0].children[0].style.transition = '0.4s all'
	}
	/*=============================================
		=    		weapons slider	      =
	=============================================*/
	$('.weapons-slider').not('.slick-initialized').on('init', function (event, slick) {
		//weaponSlider(slick)
	}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

	}).on('afterChange', function (event, slick, currentSlide) {

	}).slick({
		dots: false,
		infinite: loop,
		speed: 500,
		autoplay: false,
		// variableWidth: true,
		draggable: false,
		centerMode: true,
		initialSlide: 4,
		centerPadding: '820px',
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/gallery_left_arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/gallery_right_arrow.png" alt=""></button>',
		asNavFor: '.weapon-nav'
	});
	$('.weapon-nav').not('.slick-initialized').slick({
		slidesToShow: 10,
		slidesToScroll: 1,
		asNavFor: '.weapons-slider',
		arrows: true,
		dots: false,
		centerMode: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/gallery_left_arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/gallery_right_arrow.png" alt=""></button>',
		focusOnSelect: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
				}
			},
		]
	});
})