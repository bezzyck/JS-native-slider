//Connect DOM - elements
let btnBack = document.querySelector('.back');
let btnNext = document.querySelector('.next');
let slideImg = document.querySelector('.slider__img');

// add array src-adress
let imgs = ['img/img_1.jpg', 'img/img_2.jpg', 'img/img_3.jpg'];

//set the variable to zero
let zero = 0;

slideImg.src = imgs[zero];

//Function for button back
btnBack.addEventListener('click', () => {
	if (zero == 0) {
		zero += imgs.length;
	}
	zero--;
	slideImg.src = imgs[zero];
});

//Function for button next
btnNext.addEventListener('click', () => {
	if (zero == imgs.length - 1) {
		zero -= imgs.length;
	}
	zero++;
	slideImg.src = imgs[zero];
});

// I know this code is not the best, 
//but this is the simplest slider implementation for me.