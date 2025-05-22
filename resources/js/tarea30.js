// creacion variable paso
let paso = 0;

// creacion de fucncion para contar pasos

const pasos = () => {
    paso++;
    console.log(" ");
    console.log("************************************************");
    console.log(`Paso ${paso}`);
    console.log("------------------------------------------------");
}


// crear funcion de separador en consola
const separador = () => {
    console.log(" ");
    console.log("------------------------------------------------");
    console.log(" ");
}


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


//paso 1
pasos();

// console.log(storyWords); // separar palabras en array



//paso 2
pasos();

// console.log(storyWords); // separar palabras en array
// console.log(storyWords.join(' ')); // unir palabras en string


//paso 3
pasos();


// console.log(story);  // historia original en consola

// console.log(storyWords); // separar palabras en array
// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach(() => {}); // recorrer el array de palabras




//paso 4
pasos();

// console.log(story);  // historia original en consola

// console.log(storyWords); // separar palabras en array
// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// console.log(count); // imprimir cada palabra en consola



//paso 5
pasos();    


// console.log(story);  // historia original en consola

// console.log(storyWords); // separar palabras en array
// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras
// storyWords = storyWords.filter((word) => { // vacio por el momento
// }); // recorrer el array de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// console.log(count); // imprimir cada palabra en consola


//paso 6
pasos();

// console.log(story);  // historia original en consola

// console.log(storyWords); // separar palabras en array
// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras
// storyWords = storyWords.filter((word) => { 
//     return word !== unnecessaryWord; // filtrar palabras innecesarias
// }); // recorrer el array de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// console.log(count); // imprimir conteo de palabras en consola

// console.log(storyWords.join(' ')); // unir palabras en string


//paso 7
pasos();   

// console.log("ORIGINAL STORY");
// console.log(story);  // historia original en consola
// separador();

// console.log("SEPARATED WORDS STORY");
// console.log(storyWords); // separar palabras en array
// separador();

// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras
// console.log("Original count words: " + count); // imprimir cada palabra en consola
// separador();

// storyWords = storyWords.filter((word) => { 
//     return word !== unnecessaryWord; // filtrar palabras innecesarias
// }); // recorrer el array de palabras

// count = 0; // reiniciar el conteo de palabras

// // contar palabras en el array luego de remover palabras innecesarias
// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// // imprimir conteo de palabras en consola
// console.log("Count words after removing unnecessary words: " + count);
// separador();

// // imprimir historia sin palabras innecesarias
// console.log("STORY WITHOUT UNNECESSARY WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();

// // corregir palabras mal escritas
// storyWords = storyWords.map((word) => {
//     return word === misspelledWord ? 'beautiful' : word; // corregir palabras mal escritas
// })

// console.log("STORY AFTER CORRECTING MISSPELLED WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();




// paso 8
pasos();

// console.log("ORIGINAL STORY");
// console.log(story);  // historia original en consola
// separador();

// console.log("SEPARATED WORDS STORY");
// console.log(storyWords); // separar palabras en array
// separador();

// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras
// console.log("Original count words: " + count); // imprimir cada palabra en consola
// separador();

// storyWords = storyWords.filter((word) => { 
//     return word !== unnecessaryWord; // filtrar palabras innecesarias
// }); // recorrer el array de palabras

// count = 0; // reiniciar el conteo de palabras

// // contar palabras en el array luego de remover palabras innecesarias
// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// // imprimir conteo de palabras en consola
// console.log("Count words after removing unnecessary words: " + count);
// separador();

// // imprimir historia sin palabras innecesarias
// console.log("STORY WITHOUT UNNECESSARY WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();

// // corregir palabras mal escritas
// storyWords = storyWords.map((word) => {
//     return word === misspelledWord ? 'beautiful' : word; // corregir palabras mal escritas
// })

// console.log("STORY AFTER CORRECTING MISSPELLED WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();


// // encontrar index de palabra mala
// let badWordIndex = storyWords.findIndex((word) => {
//     return word === badWord; // encontrar index de palabra mala
// }); // recorrer el array de palabras

// console.log("Index of bad word: " + badWordIndex); // imprimir index de palabra mala
// separador();



// paso 9
pasos();    


// console.log("ORIGINAL STORY");
// console.log(story);  // historia original en consola
// separador();

// console.log("SEPARATED WORDS STORY");
// console.log(storyWords); // separar palabras en array
// separador();

// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras
// console.log("Original count words: " + count); // imprimir cada palabra en consola
// separador();

// storyWords = storyWords.filter((word) => { 
//     return word !== unnecessaryWord; // filtrar palabras innecesarias
// }); // recorrer el array de palabras

// count = 0; // reiniciar el conteo de palabras

// // contar palabras en el array luego de remover palabras innecesarias
// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// // imprimir conteo de palabras en consola
// console.log("Count words after removing unnecessary words: " + count);
// separador();

// // imprimir historia sin palabras innecesarias
// console.log("STORY WITHOUT UNNECESSARY WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();

// // corregir palabras mal escritas
// storyWords = storyWords.map((word) => {
//     return word === misspelledWord ? 'beautiful' : word; // corregir palabras mal escritas
// })

// console.log("STORY AFTER CORRECTING MISSPELLED WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();


// // encontrar index de palabra mala
// let badWordIndex = storyWords.findIndex((word) => {
//     return word === badWord; // encontrar index de palabra mala
// }); // recorrer el array de palabras

// console.log("Index of bad word: " + badWordIndex); // imprimir index de palabra mala
// separador();

// // reemplazar palabra mala
// storyWords[badWordIndex] = 'really'; // reemplazar palabra mala
// console.log("STORY AFTER REPLACING BAD WORD");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();



// paso 10
pasos();

// console.log("ORIGINAL STORY");
// console.log(story);  // historia original en consola
// separador();

// console.log("SEPARATED WORDS STORY");
// console.log(storyWords); // separar palabras en array
// separador();

// let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras
// console.log("Original count words: " + count); // imprimir cada palabra en consola
// separador();

// storyWords = storyWords.filter((word) => { 
//     return word !== unnecessaryWord; // filtrar palabras innecesarias
// }); // recorrer el array de palabras

// count = 0; // reiniciar el conteo de palabras

// // contar palabras en el array luego de remover palabras innecesarias
// storyWords.forEach((word) => {
//     count++; // incrementar el conteo de palabras
// }); // recorrer el array de palabras

// // imprimir conteo de palabras en consola
// console.log("Count words after removing unnecessary words: " + count);
// separador();

// // imprimir historia sin palabras innecesarias
// console.log("STORY WITHOUT UNNECESSARY WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();

// // corregir palabras mal escritas
// storyWords = storyWords.map((word) => {
//     return word === misspelledWord ? 'beautiful' : word; // corregir palabras mal escritas
// })

// console.log("STORY AFTER CORRECTING MISSPELLED WORDS");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();


// // encontrar index de palabra mala
// const badWordIndex = storyWords.findIndex((word) => {
//     return word === badWord; // encontrar index de palabra mala
// }); // recorrer el array de palabras

// console.log("Index of bad word: " + badWordIndex); // imprimir index de palabra mala
// separador();

// // reemplazar palabra mala
// storyWords[badWordIndex] = 'really'; // reemplazar palabra mala
// console.log("STORY AFTER REPLACING BAD WORD");
// console.log(storyWords.join(' ')); // unir palabras en string
// separador();

// // validar si hay palabras mayores a 10 caracteres
// const lengthChecky = storyWords.every((word) => {
//     return word.length <= 10; // verificar si todas las palabras son menores o iguales a 10 caracteres
// })

// console.log("Todas las palabras de la historia tiene menos de 10 caracteres? " + lengthChecky); // imprimir resultado de la validacion
// separador();


// paso 11
pasos();


console.log("ORIGINAL STORY");
console.log(story);  // historia original en consola
separador();

console.log("SEPARATED WORDS STORY");
console.log(storyWords); // separar palabras en array
separador();

let count = 0; // variable count que almacena inicialmente 0 para el conteo de palabras

storyWords.forEach((word) => {
    count++; // incrementar el conteo de palabras
}); // recorrer el array de palabras
console.log("Original count words: " + count); // imprimir cada palabra en consola
separador();

storyWords = storyWords.filter((word) => { 
    return word !== unnecessaryWord; // filtrar palabras innecesarias
}); // recorrer el array de palabras

count = 0; // reiniciar el conteo de palabras

// contar palabras en el array luego de remover palabras innecesarias
storyWords.forEach((word) => {
    count++; // incrementar el conteo de palabras
}); // recorrer el array de palabras

// imprimir conteo de palabras en consola
console.log("Count words after removing unnecessary words: " + count);
separador();

// imprimir historia sin palabras innecesarias
console.log("STORY WITHOUT UNNECESSARY WORDS");
console.log(storyWords.join(' ')); // unir palabras en string
separador();

// corregir palabras mal escritas
storyWords = storyWords.map((word) => {
    return word === misspelledWord ? 'beautiful' : word; // corregir palabras mal escritas
})

console.log("STORY AFTER CORRECTING MISSPELLED WORDS");
console.log(storyWords.join(' ')); // unir palabras en string
separador();


// encontrar index de palabra mala
const badWordIndex = storyWords.findIndex((word) => {
    return word === badWord; // encontrar index de palabra mala
}); // recorrer el array de palabras

console.log("Index of bad word: " + badWordIndex); // imprimir index de palabra mala
separador();

// reemplazar palabra mala
storyWords[badWordIndex] = 'really'; // reemplazar palabra mala
console.log("STORY AFTER REPLACING BAD WORD");
console.log(storyWords.join(' ')); // unir palabras en string
separador();

// validar si hay palabras mayores a 10 caracteres
const lengthChecky = storyWords.every((word) => {
    return word.length <= 10; // verificar si todas las palabras son menores o iguales a 10 caracteres
})

console.log("Todas las palabras de la historia tiene menos de 10 caracteres? " + lengthChecky); // imprimir resultado de la validacion
separador();

// validar si hay palabras mayores a 10 caracteres
let longWords = [];

storyWords.forEach((word) => {
    if (word.length > 10) {
        longWords.push(word); // agregar palabras mayores a 10 caracteres a un array
    }
})

// imprimir palabras mayores de 10 caracteres encontradas en la story
console.log("Palabras mayores a 10 caracteres: " + longWords.join(', ')); // unir palabras en string
separador();

// reemplazar palabras mayores a 10 caracteres
storyWords = storyWords.map((word) => {
    return word === 'breathtaking' ? 'wonderful' : word; // reemplazar palabras mayores a 10 caracteres
})

// imprimir la historia con las palabras reemplazadas
console.log("STORY AFTER REPLACING LONG WORDS");
console.log(storyWords.join(' ')); // unir palabras en string
