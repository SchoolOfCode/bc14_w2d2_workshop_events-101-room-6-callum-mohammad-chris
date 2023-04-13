const button = document.querySelector("#click-me");

button.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("You clicked me!")
  console.log(event)
 	button.textContent = "Hi Maggie"
	document.querySelector("h1").textContent = "Hi Maggie! Move the mouse over the picture and try typing in the box below!"
	document.title = "Hi Maggie"
  }


const flowerButton = document.querySelector(".task-2")
flowerButton.addEventListener("click", changeTitle)

function changeTitle(event){
	document.title = "💐🌷🌼"
}

let titleInput = document.querySelector("#title-changer")
titleInput.addEventListener("keyup", changeHeading )
document.querySelector("#title-changer").placeholder =("Type in me Maggie!")

function changeHeading(event){
	document.querySelector("h1").textContent = event.target.value
}

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

let image = document.querySelector("img")
image.addEventListener("mouseenter", changeColour)
image.addEventListener("mouseleave", changeColourBack)

function changeColour(event){
  document.querySelector("h1").style.color = "hotpink"
}

function changeColourBack(event){
  document.querySelector("h1").style.color = "initial"
}

let checkbox = document.querySelector("#check-box")
checkbox.addEventListener("click", addClass)

function addClass(event){
    if (checkbox.checked === true){
      document.querySelector("h1").classList.add("funky")
  }else{
    document.querySelector("h1").classList.remove("funky")
  }
}