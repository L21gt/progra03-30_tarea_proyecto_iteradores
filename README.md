Luis Velasquez  
Carnet 24011341  
3er Semestre - Curso JavaScript testing  
Tarea 30  

# INSTRUCCIONES

## CORRECTOR GRAMATICAL

En este proyecto, utilizaras lo que sabes sobre
la iteracion sobre matrices para recopilar
informacion y mejorar la calidad de un parrafo.


### PASO 1
En el codigo que se te proporciona, la variable story
contiene un parrafor que editaremos.
Para editar la historia, la convertimos en un array
en la linea 3.
El metodo .split() separa la cadena story con el caracter
de espacio(' ') y almacena cadapalabra como un
elemento de la matriz.

Para ver la matriz con la que trabajaremos a lo
largo de la leccion, registre en consola storyWords.
Despues de ver la matriz storyWords, comenta el
console.log() para que no se ejecute.

### PASO 2:
Para una mejor comparacion visual de las historias originales y editadas,
queremos visualizar el array storyWords editado como una cadena.
Para convertir el array storyWords de nuevo en una cadena legible,
podemos invocar el metodo .join() en storyWords.

Proporcione al metodo .join() un argumento de un caracter de espacio vacio
( ' ') para separar cada elemento de la matriz con un espacio en la cadena.

Coloque la invocacion .join() del metodo como argumento de una
declaracion console.log() para registrar la historia final en la consola.

### PASO 3: Contar las palabras.

Ahora es momento de empezar a editar la historia manipulando la
matriz storyWords. Queremos ver los cambios, asi que asegurate de que
el console.log() de la historia unida sea la ultima linea de codigo en tu editor.
Primero, encima de la declaracion console.log() que utiliza el metodo .join(),
crea una variable llamada count que almacene el numero 0.

Justo debajo count, use un metodo .forEach() para iterar sobre el
array storyWords. Como argumento del metodo forEach(), cree una funcion
vacia que se usara como funcion de devolucion de llamada.

Si bien se recomienda la sintaxis de flecha ES6 para la funcion de devolucion
de llamada (callback), sientete libre de usar cualquier sintaxis con la que
te sientas comodo.

### PASO 4:
Para cada palabra de la matriz storyWords, queremos que la variable
count se incremente en uno.

Anade un parametro llamado word a la funcion de devolucion de llamada
del metodo .forEach() que se usara para almacenar el elemento actual al
iterar sobre el array storyWords. En cada iteracion storyWord se incrementa
count en uno.

A continuacion del metodo .forEach(), registre (console.log()) count para
ver cuantas palabras hay en la historia.


### PASO 5:
Un recuento de 183 palabras es demasiado para esta historia.
Filtraremos todas las apariciones de la palabra "literalmente"
para acortar la historia y eliminar la palabra innecesaria.
Reasignaremos la historia filtrada a la misma variable storyWords aplicando
el metodo .filter(). A lo largo del proyecto, usaremos este enfoque de
reasignar la variable storyWords en cada revision de la historia.

Debajo de donde registraste la variable count, reasigna la
variable storyWords para que sea igual a la invocacion del metodo .filter()
en el array storyWords. Asigna al metodo .filter() una funcion de
devolucion de llamada con un parametro de word.

### PASO 6:
Debajo de la declaracion storyWords de la variable, observe la variable
unnecessaryWord en la linea 4. Queremos filtrar el valor de unnecessaryWord
de la historia.

Dentro del cuerpo filter() de la funcion de devolucion de llamada del metodo,
retorna solo si word NO es igual a .unnecessaryWord.

Revisa la cadena story en la consola para asegurarte de que no incluya la
palabra "literalmente". La primera vez que se uso "literalmente"
estaba en la primera oracion.


### PASO 7:
Ahora que eliminamos las palabras innecesarias, corrijamos las palabras mal
escritas de la historia. Podemos reasignarlas a storyWords una nueva matriz
de palabras con correccion ortografica usando este metodo .map().

Reasignar storyWords para igualar la invocacion del metodo .map() en la
matriz storyWords.

Establecer word como parametro de la funcion de devolucion de llamada de .map().

En el cuerpo de la devolucion de llamada, defina una sentencia condicional
para comprobar si el argumento word es igual a la variable misspelledWord.
Si lo es, devuelva la ortografia correcta de la cadena: "beautiful".
Si no, devuelva word.

Revisa la cadena story en la consola para ver la ortografia correcta!
Puedes ver una instancia de la palabra corregida en la primera oracion de la historia.


### PASO 8:
Tu sobrinito va a leer el cuento y hay una palabra "mala" en el.
Apliquemos el metodo .findIndex() para en storyWords encontrar el indice de
la palabra mala.

Comience declarando una variable llamada badWordIndexy configurandola para
la invocacion de .findIndex()en la matriz storyWords.

La funcion .findIndex() de devolucion de llamada debe verificar cada
wordpara ver si es igual a la badWordvariable declarada en la linea 6 y
devolver el indice de la palabra encontrada.

Luego, registre badWordIndex en la consola.

### PASO 9:
Ahora que tenemos el indice de la mala palabra, podemos reemplazarla
facilmente con algo mas apropiado.

Acceda al elemento dentro del array storyWords que tiene el indice de
badWordIndex usando la notacion de corchetes. Establezca el elemento
accedido igual a la cadena mas apropiada, 'really'.

Guarde el codigo y verifique que la palabra incorrecta haya sido reemplazada.

### PASO 10:
Finalmente, simplifiquemos las palabras de la historia para que sean mas
accesibles. Podemos asegurarnos de que cada palabra tenga 10 caracteres o
menos usando el metodo .every() . Este metodo .every() utiliza una funcion
de devolucion de llamada para comprobar si todos los elementos de un array
cumplen una condicion especificada. Devuelve true si todos los elementos
cumplen la condicion y false si hay algun elemento que no la cumple.

Para comenzar, define una variable llamada lengthChecky asignale la
invocacion del metodo .every() en storyWords. En la funcion de devolucion
de llamada, comprueba si every word tiene menos de 10 caracteres.

Registre  lengthCheck en la consola para ver el resultado. Si true se
registra, cada palabra de la historia tiene 10 caracteres o menos.
De lo contrario, una o mas palabras tienen mas de 10 caracteres.

### PASO 11:
Parece que hay al menos una palabra con mas de 10 caracteres.

Utilice un metodo iterador de su eleccion para acceder a la palabra(s)
en el storyWordsarray que tenga mas de 10 caracteres.
Luego, reemplace manualmente la palabra en la cadena story original por una
mas corta.


    let story = 'Last weekend, I took literally the most beautifull hike of \
    my life. The trail is called "The High Peak Loop" and \
    it stretches all the way from Lake Placid to Mount Marcy, \
    New York. It\'s really an adventure from beginning to end! \
    It is a 15-mile trek, and it literally took me an entire day. \
    I stopped at Mirror Lake to take some artsy photos. \
    It was a short stop, though, \
    because I had a freaking steep climb ahead. \
    After a quick break at the scenic Adirondack Lodge,\
    I began my ascent up the rocky path. \
    The summit is a breathtaking 5,344 feet high! \
    I was already exhausted by the time I reached the h\
    alfway point. \
    Two hours later, I arrived at Indian Falls, \
    an extremely beautifull cascade hidden in the forest. \
    Something that surprised me was that near the end,\
    you literally loop back to the starting point! \
    At this stage, you\'re very close to finishing.';

    let storyWords = story.split(' ');
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';