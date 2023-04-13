const button = document.querySelector("#click-me");

button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("You clicked me!")
  console.log(event)
  if (event.shiftKey){
	button.textContent = "Hi Anna"
	document.querySelector("h1").textContent = "Hi Anna"
	document.title = "Hi Anna"
  }
}

const flowerButton = document.querySelector(".task-2")
flowerButton.addEventListener("click", changeTitle)

function changeTitle(event){
	document.title = "💐🌷🌼"
}

let titleInput = document.querySelector("#title-changer")
titleInput.addEventListener("keyup", changeHeading )
document.querySelector("#title-changer").placeholder =("Type in me Anna!")

function changeHeading(event){
	document.querySelector("h1").textContent = event.target.value
}

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
