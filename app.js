// https://icanhazdadjoke.com/api

// Get all the DOM elements we need and store them into variables
const jokeButton = document.querySelector("button")
const jokeBox = document.querySelector(".joke")

// Functions
jokeButton.addEventListener("click", getJoke)

// Single Request with Async Functions

// Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.
// OR 1.2 get jokes
async function getJoke() {
	const jokeURL = "https://icanhazdadjoke.com/"
	const response = await fetch(jokeURL, {
		headers: {
			Accept: "application/json"
		}
	})

	const data = await response.json()
	console.log(data)

	// 1.3 sets the innerHtml of our function to the value of the data
	jokeBox.innerText = data.joke
}
