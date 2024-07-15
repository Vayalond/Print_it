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

let index = 0;

function renderBanner(indexCourant) {
	document.querySelector(".banner-img").setAttribute("src", `./assets/images/slideshow/${slides[indexCourant].image}`);
	document.querySelector("#banner > p").innerHTML = `${slides[indexCourant].tagLine}`;

	let divs = '';

	for (let indexLi = 0; indexLi < 4; indexLi++) {
		console.log("indexLi : "+ indexLi);
		console.log("indexCourant : "+ indexCourant);
		if (indexLi === indexCourant) {
			divs += `<div class="dot dot_selected"></div>`;
		}
		else {
			divs += `<div class="dot"></div>`;
		}
	}
	
	document.querySelector(".dots").innerHTML = `${divs}`;
}

document.getElementById("arrow_left").addEventListener("click", () => {
	if (index === 0) {
		index = 3;
	}
	else {
		index--;
	}
	renderBanner(index);
});

document.getElementById("arrow_right").addEventListener("click", () => {
	if (index === 3) {
		index = 0;
	}
	else {
		index++;
	}
	renderBanner(index);
});

renderBanner(index);