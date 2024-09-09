/*
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');


	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}

	const closeModalEcs = (e) => {
		if (e.key === 'Escape' && modal.classList.contains('modal--visible')) {
			switchModal()
		}
	}

	const closeModalOnClickOutside = (e) => {
		if (e.target === modal) {
			switchModal()
		}
	}

	modalBtn.forEach(btn => {
		btn.addEventListener('click', switchModal);
	})

	closeBtn.addEventListener('click', switchModal);
	document.addEventListener('keydown', closeModalEcs);
	modal.addEventListener('click', closeModalOnClickOutside);
})*/


$(function(){
	const modal = $('.modal'),
				modalBtn = $('[data-toggle=modal]'),
				closeBtn = $('.modal__close'),
				backUpButton = $('.back-to-up').hide(),
				backUpLink = $('.back-to-up__link');

	const swiper = new Swiper('.swiper', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})



	$('.slide-target__card').on('click', function() {
		const slideIndex = $(this).data('slide');


		$('.slide-target__card').removeClass('slide-target__card--active');
		$(this).addClass('slide-target__card--active');
	})

	const switchModal = () => {
		modal.toggleClass('modal--visible');
	}

	const closeModalEcs = (e) => {
		if (e.key === 'Escape' && modal.hasClass('modal--visible')) {
			switchModal();
		}
	}

	const closeModalOnClickOutside = (e) => {
		if ($(e.target).is(modal)) {
			switchModal();
		}
	}

	$(window).on('scroll', () => {
		const scroll = $(window).scrollTop();

		if (scroll > 500) {
			backUpButton.fadeIn()
		} else {
			backUpButton.fadeOut()
		}
	});

	backUpLink.on('click', (e) => {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
	})

	var next1 = $('.slider-1 .swiper-button-next');
	var prev1 = $('.slider-1 .swiper-button-prev');
	var bullets1 = $('.slider-1 .swiper-pagination');

	next1.css('left', prev1.width() + 10 + bullets1.width()+ 10)
	bullets1.css('left', prev1.width() + 10)

	var next2 = $('.slider-2 .swiper-button-next');
	var prev2 = $('.slider-2 .swiper-button-prev');
	var bullets2 = $('.slider-2 .swiper-pagination');

	next2.css('left', prev2.width() + 10 + bullets2.width()+ 10)
	bullets2.css('left', prev2.width() + 10)


	modalBtn.on('click', switchModal);
	closeBtn.on('click', switchModal);
	document.onkeydown = closeModalEcs;
	modal.on('click', closeModalOnClickOutside);
});


