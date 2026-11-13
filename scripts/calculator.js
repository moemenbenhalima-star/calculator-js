let numbr = '';
let numbr2 = '';
let calcula = '';
let result = 0;


for (let i = 0; i <= 9; i++) {
  document.querySelector(`.js-${i}`).addEventListener('click', () => {
    if (calcula === '') numbr += i;   // no operator yet -> first number
    else numbr2 += i;                 // operator chosen -> second number
    console.log(numbr, calcula, numbr2);
  });
}


document.querySelectorAll('.js-op').forEach(btn => {
  btn.addEventListener('click', () => {
    calcula = btn.dataset.op;
    console.log(calcula);
  });
});

function calcul() {
  const a = Number(numbr);
  const b = Number(numbr2);

  if (calcula === '+') result = a + b;
  else if (calcula === '-') result = a - b;
  else if (calcula === '*') result = a * b;
  else if (calcula === '/') result = b === 0 ? 'Error' : a / b;

  console.log(result);
  numbr = String(result);   
  numbr2 = '';
  calcula = '';
}

// equals button: <button class="js-equal">=</button>
document.querySelector('.js-equal').addEventListener('click', calcul);

document.querySelector('.js-rest').addEventListener('click' , ()=>{
  rest();
  console.log(0);
});

function rest(){
  numbr = '';
  numbr2 = '';
  calcula = '';
  result = 0;
}

