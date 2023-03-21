


const button = document.querySelector("#click-me");

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

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
