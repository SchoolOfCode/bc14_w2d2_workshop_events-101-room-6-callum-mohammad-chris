const button = document.querySelector("#click-me");
const flowerButton = document.querySelector(".task-2")
const header = document.querySelector("h1")
const img = document.querySelector("img")

function handleClick(event) {
  console.log("You Clicked Me!")
  console.dir(button)
  console.dir(flowerButton)
  if(event.shiftKey === true){
    event.target.textContent = 'NAILED IT!';
  }else{
    event.target.textContent = "Click Me?"
  }
}
function handleFlowerClick(event){
  document.title = "💐🌷🌼"
}
function handleCursorEnterImage(event){

  header.style.color = "hotpink"
}
function handleCursorLeaveImage(event){

  header.style.color = "initial"
}

button.addEventListener("click", handleClick);
flowerButton.addEventListener("click",handleFlowerClick)
img.addEventListener("mouseenter", handleCursorEnterImage)
img.addEventListener("mouseleave", handleCursorLeaveImage)

document.querySelector("#title-changer").addEventListener("keyup", (event) => {
  console.log(event.target.value);
  header.textContent = event.target.value
});

