const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const copy = document.getElementById('copy');

btn.addEventListener('click', function(){
  let hexColor = '#';
  for(let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

copy.addEventListener('click', copyColor);

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function copyColor() {
  let text = color.innerText;
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  color.appendChild(createInput);
  createInput.value = text;
  createInput.select();
  document.execCommand('copy');
  color.removeChild(createInput);
  pop.classList.add('showing');
}

