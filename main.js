let btn = document.getElementById('menu');
let nav =document.querySelector('.navbar');
let menu =document.querySelector('.menu');
let btnclose = document.querySelector('.close');


let disc =document.getElementById('disc');
let insta =document.getElementById('insta');
let fb = document.getElementById('fb');
let lfb=document = document.querySelector('.lgfb');
let lin=document = document.querySelector('.lgin');
let ldi=document = document.querySelector('.lgdi');
let hide =document.querySelector('.hide');


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

lfb.onclick=function() {
    fb.classList.remove('hide');
    insta.classList.add('hide');
    disc.classList.add('hide');
}
lin.onclick=function() {
    insta.classList.remove('hide');
    disc.classList.add('hide');
    fb.classList.add('hide');
}
ldi.onclick=function() {
    disc.classList.remove('hide');
    fb.classList.add('hide');
    insta.classList.add('hide');
}
let txt = document.getElementById('txt');
let se1 = document.querySelector('.se1');
let se2 = document.querySelector('.se2');
let se3 = document.querySelector('.se3');
let serv =document.querySelector('.serv');

sez

/*window.onscroll =function () {
    let v1=scrollY;
    if(v1>450){
        se1.style.left=v1*0.1 +'px';
        serv.style.display='block';
        //se2.style.right=v1 +'px';
        if (v1==601) {
        }
        

    }
    
}*/

let navhome =document.getElementById('navhome');
let navservice =document.getElementById('navservice');
let navskilles =document.getElementById('navskilles');
let navproject =document.getElementById('navproject');
let navcontact =document.getElementById('navcontact');


/*function add(idnav) {
    let idn =document.getElementById(idnav);
    navhome.classList.remove('active');
    navservice.classList.remove('active');
    navskilles.classList.remove('active');
    navproject.classList.remove('active');
    navcontact.classList.remove('active');
    idn.classList.add('active');
}*/

