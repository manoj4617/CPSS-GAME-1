const button = document.querySelector('#num-send');
const gra = document.getElementById('mainGraph');
let number;


button.addEventListener('click',()=>{
  number = document.querySelector('#num').value;
    console.log(number);

    while(number){
      if(number % 2 === 0){
        number = number / 2;
        console.log(number);
        
      }
      else{
        number = (number * 3)+ 1;
        console.log(number);

    }
  }
});
