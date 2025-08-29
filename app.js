
const aumentarLike1 = document.querySelector('#aumentarLike1');
const aumentarLike2 = document.querySelector('#aumentarLike2');
const aumentarLike3 = document.querySelector('#aumentarLike3');
let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

document.getElementById("dioLike1").addEventListener("click", function(){
    cont1++
    aumentarLike1.innerText = cont1;
})
document.getElementById("dioLike2").addEventListener("click", function(){
    cont2++
    aumentarLike2.innerText = cont2;
})
document.getElementById("dioLike3").addEventListener("click", function(){
    cont3++
    aumentarLike3.innerText = cont3;
})

