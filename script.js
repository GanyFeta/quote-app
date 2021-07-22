let quote = [];
const getQuote = document.querySelector("#get-quote");
loadQuote();
getQuote.addEventListener("click", loadQuote);

function loadQuote() {
	//let loadedQuote = undefined;
	fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
		.then((response) => response.json())
		.then(function (data) {
			quote.push(data);
			document.getElementById("quote").innerHTML = JSON.stringify(data.data[0].quoteText);
			document.getElementById("author").innerHTML = JSON.stringify(data.data[0].quoteAuthor);
		});
}
