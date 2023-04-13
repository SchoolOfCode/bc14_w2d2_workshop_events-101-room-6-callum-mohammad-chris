const button = document.querySelector("#click-me");

function handleClick(event) {
  console.log("You clicked me!")
  console.log(event)
  if (event.shiftKey){
	button.textContent = "Hi Anna"
	document.querySelector("h1").textContent = "Hi Anna"
	document.title = "Hi Anna"
  }
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
