const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(btn => {
  btn.addEventListener('click', whichBtn);
});

function whichBtn (e) {
  const styles = e.currentTarget.classList[1];
  switch(styles) {
    case 'decrease': count--; break;
    case 'increase': count++; break;
    case 'reset': count = 0; break;
  }
  if (count > 0) {
    value.style.color = 'red';
  } else if (count < 0) {
    value.style.color = 'green';
  } else {
    value.style.color = 'black';
  }
  value.textContent = count;
}
