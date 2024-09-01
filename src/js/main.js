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
				closeBtn = $('.modal__close');


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



	modalBtn.on('click', switchModal);
	closeBtn.on('click', switchModal);
	document.onkeydown = closeModalEcs;
	modal.on('click', closeModalOnClickOutside);
});