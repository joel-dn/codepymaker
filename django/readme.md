Aqui van los archivos de django

para poder verlo tienes:
*las lineas de comando van entre comillas no colocar las comillas al copiar el codigo :)
1) abrir el rar
2) arrastrar la carpeta djuango a un lugar ejemplo el escritorio
3) presiona la tecla windows y r a la vez
4) escribe 'cmd' y dale enter
5) escribe 'pip install django'
6) una vez instalado dirigete a la carpeta donde colocaste djuango y en la barra de arriba dale a copiar direccion
7) en el cmd coloca 'cd ' y pega la direccion copiada. dale enter
8) una vez en la carpeta coloca 'manage.py runserver' para iniciar el servidor
9) dirigete a el navegador y en una pestaña nueva coloca 'localhost:8000' y te dirigira a la pagina.
10) para iniciar sesion puedes con el usuario j_dne con contraseña codepymaker.

**update**

Descargar dj y codepymaker e instalarlo en la carpeta que desee, pero con una condicion y es que lo extraido de estos tienen que
estar en la misma carpeta como lo muestra la imagen:

https://raw.githubusercontent.com/joel-dn/codepymaker/master/django/imagenes/same.PNG

**para mas rapides para llegar a la carpeta del server**

el archivo cc.py se debera de colocar donde este ubicado por default el cmd como se muestra en la imagen:

https://raw.githubusercontent.com/joel-dn/codepymaker/master/django/imagenes/ruta.PNG

una vez ubicado en la carpeta colocar en el cmd cc.py para que inicie el programa, el cual te pedira el disco en donde esta
ubicado la carpeta contenedora de los extraidos y despues su directorio, se puede hacer como en el paso 6) de arriba.

https://raw.githubusercontent.com/joel-dn/codepymaker/master/django/imagenes/cc.PNG

este creara un archivo .bat el cual se creara en la misma carpeta que cc, que al activarlo llamandolo en el cmd te llevara por
la linea de comando a la carpeta.

https://raw.githubusercontent.com/joel-dn/codepymaker/master/django/imagenes/nuevo_cc.PNG

https://raw.githubusercontent.com/joel-dn/codepymaker/master/django/imagenes/r.PNG

una vez en la carpeta se coloca 'a' para activar el virtualenv y 'c' para dirigirse a codepymaker.

**agregar un lenguaje**

para agregar un lenguaje debes de realizar las siguentes instrucciones:
1) iniciar el servidor con manage.py runserver
2) ir a 'localhost:8000/admin' en el navegador
3) iniciar con una cuenta autorizada por ejemplo: usuario: j_dne ,contraseña: codepymaker
4) una vez en el admin clickear el agregar en donde dice Lenguajess

**para modificarlos solo clickea en Lenguajess y clickea el lenguaje que quieres cambiar**

**agregar un problema**

Para agregar un problema este tiene 2 fases, la fase del admin, y la fase del template:

**en la fase del admin**

1) iniciar el servidor con manage.py runserver
2) ir a 'localhost:8000/admin' en el navegador
3) iniciar con una cuenta autorizada por ejemplo: usuario: j_dne ,contraseña: codepymaker
4) una vez en el admin clickear en agregar en donde dice Problemass

se te pedira:

- el lenguaje
- el tipo de problema
- el nombre ,que debe de ir con '_' si es con espacios (este se ocupara para nombrar el template tambien asi que deben de ser iguales los dos)
- el numero del certamen, si no tiene certamen colocar 0.
- el numero de filas (si es ruteo), si no entonces colocar 0
- el numero de filas (si es ruteo ), si no entonces colocar 0
*importante rellenar todos los datos*
una vez agregado el problema se requiere de colocar las soluciones, para eso debe:
1) volver al home del admin y clickear agregar donde dice Respuestas
se te pedira:
- el problema
- la respuestas que estas varian su solucion dependiendo del tipo, estas son las reglas:

**estas pueden ser escritas en un block de notas para poder diferenciar bien las comillas, este se copia, y se pega tal cual**

 - para Ruteo:
    en los ruteos se hace un diccionario que como llave se utiliza la posicion de la casilla de la respuesta, estas parten 
    desde 0, por ejemplo, en la fila 0 columna 3 seria 'r0-c3'. Para los valores del diccionario se tiene que poner el valor 
    tal cual ,por ejemplo, si es un string colocar con comillas, si es una lista colocar con los parentesis nada mas, si es un 
    entero colocar el numero. Ejemplo {'r1-c2':2,'r0-c0':['hola','chao'],'r1-c4':'juan'}
  
 - para Completar:
    en completar nada mas se coloca la lista con las respuestas pero estas deben ser todas strings. esta debe estar con un
    orden uno es a uno con el input es decir que si el input es el primero la posicion de la respuesta debe ser 0.
    Ejemplo: ['si','0','['ejemonia']']
    
 - para Ordenar:
    en Ordenar se debe de hacer un diccionario que como llave utiliza el nombre del drageable, ejemplo, 'drag1', y como valor
    debe de tener una lista con las posibles posiciones de donde puede estar, es decir, colocar el id del div en donde su
    solucion este correcta, ejemplo, ['div1','div2']. Esto se hace por que algunas lineas hay varias soluciones validas posibles
    Ejemplo: {'linea1':['d1'],'linea2':['d3','d5']}
    
 - para Quiz:
      en los quizes se debe de hacer una lista con letras, ejemplo, 'a', estas deben de estar en orden uno es a uno, es
      decir, si es la primera pregunta la posicion de la respuesta debe ser el 0.
      Ejemplo: ['a','c','b']
  
- la salida:
    - para Ruteo:
      colocar la como se escribiria en en el textarea, es decir asi:
      linea
      otralinea
      y no asi:
      linea\notralinea\n

  **para cualquier ejercicio que no sea ruteo, colocar en salida none**
  
 **en la fase del template**
 
    
