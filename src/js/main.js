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

	var swiper = new Swiper('.slider-1', {
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

	var next1 = $('.slider-1 .swiper-button-next');
	var prev1 = $('.slider-1 .swiper-button-prev');
	var bullets1 = $('.slider-1 .swiper-pagination');

	next1.css('left', prev1.width() + 10 + bullets1.width()+ 10)
	bullets1.css('left', prev1.width() + 10)

	var swiper2 = new Swiper('.slider-2', {
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

	var next2 = $('.slider-2 .swiper-button-next');
	var prev2 = $('.slider-2 .swiper-button-prev');
	var bullets2 = $('.slider-2 .swiper-pagination');

	next2.css('left', prev2.width() + 10 + bullets2.width()+ 10)
	bullets2.css('left', prev2.width() + 10)

	$('.slide-target__card').on('click', function() {
		const slideIndex = $(this).data('slide');// Проверка значения slideIndex

		// Переключаем слайд на указанный индекс
		swiper2.slideTo(slideIndex);

		$('.slide-target__card').removeClass('slide-target__card--active');
		$(this).addClass('slide-target__card--active');
	});

	var swiper3 = new Swiper('.slider-3', {
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

	$('.slide-target__card').on('click', function () {
		var slideIndex = $(this).data('slide'); // Получаем индекс слайда из атрибута data-slide

		if (!isNaN(slideIndex)) {  // Проверяем, что slideIndex — это число
			// Переключаем слайд на указанный индекс для обоих слайдеров
			swiper2.slideTo(slideIndex);
			swiper3.slideTo(slideIndex);

			// Обновляем активный класс у всех переключателей
			$('.slide-target__card').removeClass('slide-target__card--active');
			$(this).addClass('slide-target__card--active');
		}
	});

	$('.slide-target__card').first().addClass('slide-target__card--active');

	function handleIntersection(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Запускаем анимацию, если элемент виден
				$(entry.target).css('animation-play-state', 'running');
				observer.unobserve(entry.target); // Останавливаем наблюдение за элементом
			}
		});
	}

	// Настройки Intersection Observer
	let observerOptions = {
		threshold: 0.1 // Сработает, когда хотя бы 10% элемента будет видно
	};

	// Создаем новый Intersection Observer
	let observer = new IntersectionObserver(handleIntersection, observerOptions);

	// Наблюдаем за всеми элементами с атрибутом data-animate
	$('[data-animate]').each(function() {
		observer.observe(this);
	});

	new WOW().init();

	// Валидация формы
	$('.modal__form').validate({
		errorClass: "invalid",
		rules: {
			// строчное правило
			userName: {
				required: true,
				minlength: 2,
			},
			userPhone: "required",
			// правило-объект (блок)
			userEmail: {
				required: true,
				email: true
			}
		}, // сообщения
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче двух букв",
			},
			userPhone: "Телефон обязателен",
			userEmail: {
				required: "Обязательно укажите email",
				email: "Введите в формате: name@domain.com"
			}
		}
	})

	// Маска для номера телефона
	$('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"})

	modalBtn.on('click', switchModal);
	closeBtn.on('click', switchModal);
	document.onkeydown = closeModalEcs;
	modal.on('click', closeModalOnClickOutside);

});


