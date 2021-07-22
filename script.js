let quote = [];
const quoteTxt = document.querySelector("#quote");
const getQuote = document.querySelector("#get-quote");

getQuote.addEventListener("click", loadQuote);

function loadQuote() {
	//data = [];

	fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
		.then((response) => response.json())
		.then((data) => console.log(data));
}
