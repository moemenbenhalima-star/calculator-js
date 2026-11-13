let numbr = '';
let numbr2 = '';
let calcula = '';
let result = 0;


for (let i = 0; i <= 9; i++) {
  document.querySelector(`.js-${i}`).addEventListener('click', () => {
    if (calcula === '') numbr += i;   
    else numbr2 += i;                 
    console.log(numbr, calcula, numbr2);
  });
}

document.querySelector('.js-dot').addEventListener('click' , ()=>{
      if (calcula === '') numbr += '.';
      else numbr2 += '.';
      console.log(numbr, calcula, numbr2);
    });


document.querySelectorAll('.js-op').forEach(btn => {
  btn.addEventListener('click', () => {
    calcula = btn.dataset.op;
    console.log(numbr ,calcula);
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
  
}

document.querySelector('.js-equal').addEventListener('click', calcul);

document.querySelector('.js-rest').addEventListener('click' , rest);

function rest(){
  numbr = '';
  numbr2 = '';
  calcula = '';
  result = 0;
  console.log(0);
}

