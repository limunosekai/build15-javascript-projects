const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  // 0 - 3의 랜덤 숫자
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}