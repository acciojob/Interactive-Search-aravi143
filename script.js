//your JS code here. If required.
const searchButton = document.querySelector('.btn');
searchButton.addEventListener('click',() =>{
	const searchDiv = document.querySelector('.search');
	const input = document.querySelector('.input');
	searchDiv.classList.add("active");
	input.focus();
})