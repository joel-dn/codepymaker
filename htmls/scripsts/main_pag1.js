var consejos_pagina_1 = Array("Recuerda que en el enunciado se pide pedir primero el dato de peso del queso","Recuerda que para realizar una operación entre variables anteriormente hay que definirlas","Recuerda que para imprimir el valor de una variable(usar print) se necesita definir esta antes");
var Respuestas = Array("Tu respuesta es correcta","Tu respuesta es incorrecta")
function consejos(el_nombre_de_consejo,min) {
    return el_nombre_de_consejo[Math.floor(Math.random()*(el_nombre_de_consejo.length-min))]
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
function testdiv(ev, x){
    if (x.length < 1){
        allowDrop(ev);
        return true;
    }
    else {
        return false;
    }
}
function comprobacion() {
    var correcto = 1;
    var codes = document.getElementsByClassName("code")
    for(var i=0;i<codes.length;i++) {
        codes[i].setAttribute("draggable","false")
        if (codes[i].getAttribute("name") != codes[i].parentNode.getAttribute("id")) {
            correcto = correcto*0;
            codes[i].style.color = "#FF3333"
        }
        else {
            codes[i].style.color = "#008000"
        }
        if (i == codes.length - 1) {
            break;
        }
    }
    if (correcto == 1) {
        window.location="#";
    }
    else {
        window.location="#";
    }
}
function charcha() {
    return true
}
//function cambiar_fondo(id) {   obj = document.getElementById(id); obj.style.backgroundColor = (obj.style.backgroundColor == '#CCCCCC') ? 'none' : '#CCCCCC'; }
//Para redireccionar con tiempo function redireccionar() {  window.locationf = ""} setTimeout("redireccionar()", 5000); //tiempo expresado en milisegundos
