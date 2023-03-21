const button = document.querySelector('#click-me');
const flowerButton = document.querySelector('.task-2');

function handleClick(event) {
	// If clicked, console log you clicked me!
	console.log('You Clicked Me!');
	console.log(event);
	if (event.shiftKey === true) {
		event.target.textContent = 'NAILED IT!';
	} else {
		event.target.textContent = 'Click Me...';
	}
	// If shift key pressed, change the inner text of the button to be NAILED IT
}

function changeTitle(event) {
	document.title = '💐🌷🌼';
}

button.addEventListener('click', handleClick);

flowerButton.addEventListener('click', changeTitle);

document.querySelector('#title-changer').addEventListener('keyup', e => {
	console.log(e.target.value);
});

//task 3
//Write a function that takes in an event object as a parameter.
//When that function is called, read the value from the value property, which is nested in an object on the target property of the event. Set the text in the h1 tag on the page to be that value.
let h1 = document.querySelector('h1');
let titleText = document.querySelector('#title-changer');
// function to change h1 textContent to event's target value
function changeH1(event) {
	console.log(event);
	h1.textContent = event.target.value;
}

titleText.addEventListener('keyup', changeH1);
