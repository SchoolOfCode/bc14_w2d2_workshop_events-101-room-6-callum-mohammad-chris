


const button = document.querySelector("#click-me");
const flowerButton = document.querySelector(".task-2")

function handleClick(event) {
  // If clicked, console log you clicked me!
  console.log('You Clicked Me!')
  console.log(event)
  if(event.shiftKey===true){
    event.target.textContent = "NAILED IT!"
  }
  else{
    event.target.textContent = "Click Me..."
  }
  // If shift key pressed, change the inner text of the button to be NAILED IT
}

function changeTitle(event){
  document.title = "💐🌷🌼"
}

button.addEventListener("click", handleClick);

flowerButton.addEventListener("click", changeTitle)

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
