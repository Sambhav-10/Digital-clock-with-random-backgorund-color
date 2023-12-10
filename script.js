const clock =document.querySelector("#clock")
const background =document.getElementById('page')

setInterval(function (){
    let random = Math.floor(Math.random()*232655 +1)
    background.style.backgroundColor = `#${random}`;
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)

