var Consejos1 = Array("Puedes usar una regla de 3 para calcular el precio final, usar el peso en kg y dividirlo en el precio por kg", "Para devolver datos que se muestren al usuarios debes usar la funcion print()", "Para resolver este problema necesitas usar la función input que sirve para pedir datos al usuario.");
var Respuestas = Array("Tu respuesta es correcta", "Tu respuesta es incorrecta")
function consejos(min, max) {
    return Consejos1[Math.floor(Math.random() * (max - min))]
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
function testdiv(ev, x) {
    if (x.length < 1) {
        allowDrop(ev);
        return true;
    }
    else {
        return false;
    }
}
function DragStart(e) {
    e.target.style.opacity = '0.4';  // this / e.target is the source node.
}
function DragEnd(e) {
    e.target.style.opacity = '100';
}
function DragEnter(e) {
    e.setAttribute('style','border: 2px dashed #000;');
}
function DragLeave(e) {
    e.setAttribute('style','border: 1px solid #aaaaaa;');
}
function comprobacion() {
    var correcto = 1;
    var codes = document.getElementsByClassName("code")
    for(var i=0;i<codes.length;i++) {
        codes[i].setAttribute('draggable','false')
        if (codes[i].getAttribute("name") != codes[i].parentNode.getAttribute("id")) {
            correcto = correcto*0;
            codes[i].style.color = "#FF3333";
        }
        else {
            codes[i].style.color = "#008000";

        }
        if (i == codes.length - 1) {
            break;
        }
    }
    if (correcto == 1) {
        window.location="https://stackoverflow.com/questions/9830650/how-to-stop-a-javascript-for-loop";
    }
    else {
        window.location="#";
    }
}
//Para redireccionar con tiempo
function redireccionar() {
    window.locationf = "http://www.cristalab.com";
}
setTimeout("redireccionar()", 5000); //tiempo expresado en milisegundos
