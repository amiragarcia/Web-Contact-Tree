let mainContainer = document.getElementById("main-container");

let conocemeBoton = document.getElementById("conoceme-boton");
let desarrolloBoton = document.getElementById("desarrollo-boton");

let conocemeSection = document.getElementById("conoceme-section");
let desarrolloSection = document.getElementById("desarrollo-section");

let volverBoton = document.getElementsByClassName("volver-boton");

conocemeBoton.addEventListener('click', function(){
    mainContainer.style.display = 'none';
    conocemeSection.style.display = 'flex';
    document.body.style.padding = "20px";
})

volverBoton[0].addEventListener('click', function(){
    conocemeSection.style.display = 'none';
    desarrolloSection.style.display = 'none';
    mainContainer.style.display = 'flex';
})

volverBoton[1].addEventListener('click', function(){
    conocemeSection.style.display = 'none';
    desarrolloSection.style.display = 'none';
    mainContainer.style.display = 'flex';
})


desarrolloBoton.addEventListener('click', function(){
    mainContainer.style.display = 'none';
    desarrolloSection.style.display = 'flex';
    document.body.style.padding = "20px";
})