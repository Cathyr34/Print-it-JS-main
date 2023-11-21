const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

let currentIndex = 0;

var dotsContainer = document.querySelector('.dots');
dotsContainer.innerHTML = ''; // Supprime les points existants

// Boucle pour créer un point pour chaque diapo
for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    if (i == currentIndex) {
        dot.classList.add('dot_selected'); //ajoute la classe ‘dot_selected’
    }
    dotsContainer.appendChild(dot);
}

// Ajoute des écouteurs d'événements
  	document.querySelector('.arrow_right').addEventListener('click', nextSlide);
  	document.querySelector('.arrow_left').addEventListener('click', previousSlide);

function updateSlide() {
	const slide = slides[currentIndex];
	const imgElement = document.querySelector('.banner-img');
	const textElement = document.querySelector('#banner p');
  
// Met à jour la diapo
	imgElement.src = "./assets/images/slideshow/" + slide.image;
	textElement.innerHTML = slide.tagLine;
	var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
        if (i == currentIndex) {
            dots[i].classList.add('dot_selected');
        } else {
            dots[i].classList.remove('dot_selected');
        }
    }
}
  
// Met à jour currentIndex
  	updateSlide();

function nextSlide() {
    currentIndex++;
    if (currentIndex == slides.length) {
        currentIndex = 0;
    }
    console.log('nextSlide a été appelé, currentIndex est maintenant : ' + currentIndex);
    updateSlide();
}

function previousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    console.log('previousSlide a été appelé, currentIndex est maintenant : ' - currentIndex);
    updateSlide();
}