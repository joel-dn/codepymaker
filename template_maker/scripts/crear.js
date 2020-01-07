function create_template(titulo,parrafo,drags,drops,inputs){
    var textto =    `{% extends 'base/temp.html' %}
                    {% load static %}
                    {% block extrahead %}
                    <link rel='stylesheet' href="{% static 'css/ordenar.css' %}">
                    {% endblock extrahead %}
                    {% block content %}
                    <div class="container">
                    <hr>
                    <h1 style="text-align: center;">${titulo}</h1>
                    <hr>
                    <p>
                    ${parrafo}
                    </p>
                    <h3>Ordenamineto de codigo</h3>
                    <br>
                    <div class="d-flex">
                    <div id="text">
                    ${drags}
                    </div>
                    <div class="ml-3" id="casilla">
                    ${drops}
                    </div>
                    </div>
                    <br>
                    <div class="container">
                    <form method="POST" id="myform">
                    {% csrf_token %}
                    ${inputs}
                    {% block boton %}
                    <input type="submit" class="btn btn-dark" value="enviar" id="btn">
                    {% endblock boton %}
                    </form>
                    <br>
                    <div class="row">
                    <div class="col"><button class="btn btn-dark" id="enviado"
                    onclick="document.getElementById('ayuda_1').innerHTML= consejos(0,3)">Botón para consejos</button>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col">
                    <h4 id="ayuda_1" class="text-danger"></h4>
                    <h1 id="cron"></h1>
                    </div>
                    </div>
                    </div>
                    {% endblock content %}
                    {% block javascript %}
                    <script src="{% static 'js/ordenar.js' %}"></script>
                    {% endblock javascript %}`
    var text = document.getElementById('textop');
    text.innerText = textto;
}
var btnplus = document.getElementById('btnplus');
var btnres = document.getElementById('btnres');
var textres = document.getElementById('textres');
var copiar = document.getElementById('copiar');
var res = document.getElementById('res');
var respuesta = document.getElementById('respuesta');
var textinp = document.getElementById('textinp');
var titulo = document.getElementById('titulo');
var parrafo = document.getElementById('parrafo');
var counter = []
var textdiv = document.getElementById('text');
var casilla = document.getElementById('casilla');
var inputs = document.getElementById('inputs');
function resp(){
    ch = textdiv.children
    var drops = document.querySelectorAll( '.drop' );
    sel = "<select name='respuesta[]' class='selc' multiple>\n";
    [].forEach.call(drops,function(drp){
        sel += "\t<option value='"+drp.getAttribute('id')+"'>"+drp.getAttribute('id')+"</option>\n"
    });
    topu = "<div class='disp'>\n"
    botum = "</div>"
    sel += "</select>"
    for(k=0;k<counter.length;k++){
        par = ch[k].children[0].children[0];
        por_respuesta = "<h1 id='dragtext"+k+1+"'>"+par.getAttribute('id')+"("+par.innerHTML+")"+"</h1>\n";
        res.innerHTML += topu + por_respuesta + sel + botum;
    };
    slc = document.querySelectorAll('select');
    for(t=0;t<slc.length;t++){
        slc[t].id = 're'+String(t);
    }
};
function multipe(){
    for(p=0;p<counter.length;p++){
        str = '#re'+String(p);
        $(str).multiselect({
            columns: 1,
            placeholder: 'ParentsNodes'
        })
    }
}
btnres.addEventListener('click',function(event){
    respuesta.innerHTML = '{';
    ch = textdiv.children;
    elem = '';
    for(u=0;u<counter.length;u++){
        par = ch[u].children[0].children[0];
        re = document.getElementById('ms-list-'+String(u+1))
        paren = re.children[0].children[0].innerHTML
        if(paren != 'ParentsNodes'){
            elem += par.getAttribute('id') + ':['+paren+']'
        }
        else{
            elem += par.getAttribute('id') + ':[]'
        }
        if(u<counter.length-1){
            elem += ','
        }        
    }
    respuesta.innerHTML += elem + '}'
})
btnplus.addEventListener('click',function(event){
    if(textinp.value === 'terminar'){
        btnplus.remove();
        textinp.remove();
        textres.style.display = 'flex';
        res.style.display = 'flex';
        copiar.style.display = 'flex';
        resp();
        multipe();
        create_template(titulo.value,parrafo.value,textdiv.innerHTML,casilla.innerHTML,inputs.innerHTML);
    }
    else{
        counter.splice(0,0,1);
        i = counter.length;
        divpart = "<div class='row'><div class='col caki drop' id='r"+i+"\'><p class='code {{ lista_clases."+i+"}}' id='drag"+i+"\' draggable='true'>"+textinp.value+"</p></div></div>\n";
        textdiv.innerHTML += divpart;
        container = "<div class='row'><div class='col'><div id='div"+i+"\' class='drop dv'></div></div></div>\n";
        casilla.innerHTML += container;
        inp = "<input type='hidden' name='drag"+i+"\' value=''>\n";
        inputs.innerHTML += inp;
        textinp.value = ''
    };
});
