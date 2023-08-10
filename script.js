let clavierColor = document.querySelector("#marque");
let clavier = document.querySelector("#clavier");
let torche = document.querySelector("#torche");
let zero = document.querySelector("#zero");
let lumiere = document.querySelector("#lumiere");

clavierColor.addEventListener("click", ()=>{
    clavier.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
})

zero.addEventListener("click", ()=>{
    torche.style.backgroundColor = "yellow";
    lumiere.style.display = "block";

})


// js de la deuxieme programe

let moment = new Date();
let hours = moment.getHours();
let minutes = moment.getMinutes();
let days = moment.getDay();
let month = moment.getMonth();
let years = moment.getFullYear();

let temps = document.querySelector("#temps");
let date = document.querySelector("#date");

window.addEventListener("load", ()=>{
    temps.innerText = hours + " : " + minutes
    date.innerText = days +  " / " + month + " / " + years;
})


let refus = document.querySelector("#refuser");
let demare = document.querySelector("#demarrage");
let accueil = document.querySelector("#Accueil");

refus.addEventListener("click", function () {
        demare.style.display ="block";
    setTimeout(function () {
        demare.style.display ="none";
        accueil.style.display ="block";
    }, 5000);
})

