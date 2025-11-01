const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const hamburgerMenu = document.getElementById('hamburger-menu');

openMenuBtn.addEventListener('click', () => {
	hamburgerMenu.classList.add('active');
	document.body.classList.add('no-scroll');
});

closeMenuBtn.addEventListener('click', () => {
	hamburgerMenu.classList.remove('active');
	document.body.classList.remove('no-scroll');
});

hamburgerMenu.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		hamburgerMenu.classList.remove('active');
		document.body.classList.remove('no-scroll');
	});
});
