var Consejos1 = Array("Puedes usar una regla de 3 para calcular el precio final, usar el peso en kg y dividirlo en el precio por kg","Para devolver datos que se muestren al usuarios debes usar la funcion print()","Para resolver este problema necesitas usar la función input que sirve para pedir datos al usuario.");
var Respuestas = Array("Tu respuesta es correcta","Tu respuesta es incorrecta")
function consejos(min,max) {
    return Consejos1[Math.floor(Math.random()*(max-min))]
}
function allowDrop(ev) {
    ev.preventDefault();
}  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function comprobacion() {
    var correcto = 1;
    var codes = document.getElementsByClassName("code")
    for(var i=0;i<codes.length;i++) {
        if (codes[i].getAttribute("name") != codes[i].parentNode.getAttribute("id")) {
            correcto = correcto*0;
            break;
        }
    }
    if (correcto == 1) {
        window.location="https://www.google.cl/";
    }
    else {
        window.location="https://www.w3schools.com/js/default.asp";
    }
}
//Para redireccionar con tiempo
function redireccionar() {
    window.locationf = "http://www.cristalab.com";
}
setTimeout("redireccionar()", 5000); //tiempo expresado en milisegundos
