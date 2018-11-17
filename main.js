

document.getElementById('table').addEventListener('click', (event) => {
  console.log(event.target);
  event.target.className = 'whitePawn';
});