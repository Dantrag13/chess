function StartGame(a,b,c){
  let board = document.getElementById('board');
  let rows = board.getElementsByClassName('row');
  let element = rows[a].getElementsByTagName('div')[b];
  element.style.backgroundImage = "url('whitePawn.png')";
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
  elenent.style.backgroundRepeat = "no-repeat";
}
for (let i = 0; i < rows.length ; i++){
	
} 
StartGame(6,1)