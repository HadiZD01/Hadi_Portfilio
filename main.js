let btn = document.getElementById('menu');
let nav =document.querySelector('.navbar');
let menu =document.querySelector('.menu');
let btnclose = document.querySelector('.close');

btn.onclick = function() {
    nav.classList.remove('menuhide');
    menu.classList.add('menuhide');
    btnclose.classList.remove('menuhide');
}
btnclose.onclick = function(){
    nav.classList.add('menuhide');
    menu.classList.remove('menuhide');
    btnclose.classList.add('menuhide');
}

