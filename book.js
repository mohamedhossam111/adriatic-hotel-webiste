console.log('test')

let checkIn = document.getElementById('check-in').value
let stay = document.getElementById('stay').valueAsNumber
let guest  = document.getElementById('guest').valueAsNumber
let roomType = document.getElementById('drop').value

let submit = document.getElementById('btn1')

const finalPrice = 0;

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    
    if(guest > 2){
        return finalPrice = 100
    }

})

