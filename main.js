document.getElementById('board').addEventListener('click', EndMove);
function EndMove() {
  event.target.style.backgroundImage = "url('whitePawn.png')";
  event.target.style.backgroundSize = "cover";
  event.target.style.backgroundPosition = "center";
  event.target.style.backgroundRepeat = "no-repeat";
  console.log(event.target);
}

document.getElementById('board').addEventListener('contextmenu', clear);
function clear() {
  event.target.style.backgroundImage = "";
  console.log(event.target);
}