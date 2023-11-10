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

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

function updateSlide() {
	const slide = slides[currentIndex];
	const imgElement = document.querySelector('.banner-img');
	const textElement = document.querySelector('#banner p');
  
	// Met à jour l'image
	imgElement.src = "./assets/images/slideshow/" + slide.image;
  
	// Met à jour le texte
	textElement.innerHTML = slide.tagLine;
  
	// Met à jour les points
	updateDots();
  }
  
  // Met à jour le slide
  updateSlide();

  function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide();
  }
  
  function previousSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide();
  }
  
  // Ajoute des écouteurs d'événements
  document.querySelector('.arrow_right').addEventListener('click', nextSlide);
  document.querySelector('.arrow_left').addEventListener('click', previousSlide);

