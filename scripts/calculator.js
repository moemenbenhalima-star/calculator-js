let numbr = '';
function saisir (){
  for (let i=0; i<=9 ;i++){
    document.querySelector(`.js-${i}`).addEventListener('click' , ()=>{
      numbr+=String(i)
      console.log(numbr);
    });
  };
}

saisir();

let numbr2 ='';
function saisir2 (){
  for (let i=0; i<=9 ;i++){
    document.querySelector(`.js-${i}`).addEventListener('click' , ()=>{
      numbr2+=String(i)
      console.log(numbr2);
    });
  };
}

