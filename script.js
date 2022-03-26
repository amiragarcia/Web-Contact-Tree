let mainContainer = document.getElementById("main-container");
let conoceme = document.getElementById("conoceme");
let conocemeBoton = document.getElementById("conoceme-boton");

conocemeBoton.addEventListener('click', function(){
    mainContainer.style.display = 'none';
    conoceme.style.display = 'flex';
    document.body.style.padding = "20px";
})