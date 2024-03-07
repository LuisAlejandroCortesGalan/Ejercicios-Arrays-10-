let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
let arrayNumerosConcat = arrayNumeros1.concat(arrayNumeros2)
console.log(arrayNumerosConcat);

// 1) sumar el array y mostrar en consola
let suma = 0;
for (let i = 0; i < arrayNumerosConcat.length; i++) {
    suma += arrayNumerosConcat[i];
    console.log(suma);
}

console.log("la suma de los arrays es: " + suma);


// 2) Mostrar el promedio en consola

    let sumaPromedio = 0;
    for (let i = 0; i < arrayNumerosConcat.length; i++) {
        sumaPromedio += arrayNumerosConcat[i];
        console.log(sumaPromedio);
    }
    let promedio = suma / arrayNumerosConcat.length
    console.log(suma);
    console.log("El promedio del arreglo es: " + promedio);

// 3) Encontrar el valor maximo

    let conseguirValores = 0;
    for (let i = 0; i < arrayNumerosConcat.length; i++) {
    if (arrayNumerosConcat[i] > conseguirValores) {
        conseguirValores = arrayNumerosConcat[i];
    }
}
console.log(conseguirValores);

// 3) Encontrar el valor minimos

let conseguirValoresMin = conseguirValores;
for (let i = 0; i < arrayNumerosConcat.length; i++) {
    console.log(arrayNumerosConcat[i]);
if (arrayNumerosConcat[i] < conseguirValoresMin) {
    conseguirValoresMin = arrayNumerosConcat[i];
}
}
console.log(conseguirValoresMin);

// 4) Conseguir los indices pares y sumarlos
//cambiar la iteracion para conseguir saltar los numeros impares

let sumarPares = 0;
for (let i = 0; i < arrayNumerosConcat.length; i += 2) {
    let GuardarNumeros = arrayNumerosConcat[i];
    console.log(GuardarNumeros);
    sumarPares += GuardarNumeros;
}

console.log(sumarPares);

// 4) Conseguir los indices impares y restarlos

let restarImpares = 0;
for (let i = 1; i < arrayNumerosConcat.length; i += 2) {
    let GuardarNumeros = arrayNumerosConcat[i];
    console.log(GuardarNumeros);
    if (restarImpares == 0) {
        restarImpares = arrayNumerosConcat[i];
    } else {
    restarImpares -= GuardarNumeros;
    }
}   
console.log(restarImpares);


// Dado estos arrays:

let arrayNombres1 = ["Federico", "Kayón", "Luís", "Mónica", "Nicolás", "Ricardoa", "Sara", "Stephanie", "Yahvedaa"];
let arrayNombres2 = ["Clint", "Robert", "James", "Anna", "Ingrid", "John", "Patriciaa", "Marie"];

let varTextoMasLargos = "";
let arrayTextosMasLargos = [];
let arrayConcat = arrayNombres1.concat(arrayNombres2)
console.log(arrayConcat);
// 5) Encontrar el nombre más largo en arrayConcat
for (let i = 0; i < arrayConcat.length; i++) {
    let nombreActual = arrayConcat[i];
    if (nombreActual.length > varTextoMasLargos.length) {
        varTextoMasLargos = nombreActual;
        arrayTextosMasLargos = []; // Limpiar el array ya que encontramos un nombre más largo
    } 
    if (nombreActual.length === varTextoMasLargos.length) { 
        arrayTextosMasLargos.push(nombreActual); // Agregar al array si es igual de largo
    }
}
console.log("Nombre más largo:", varTextoMasLargos);
console.log("Nombres igualmente largos:", arrayTextosMasLargos);


// 6) Encontrar el nombre más corto en arrayConcat
let varTextoMasCorto = "";
let arrayTextosMasCortos = [];
for (let i = 0; i < arrayConcat.length; i++) {
    let nombreActual1 = arrayConcat[i];
    if (varTextoMasCorto === "" || nombreActual1.length < varTextoMasCorto.length) {
        varTextoMasCorto = nombreActual1;
        arrayTextosMasCortos = []; // Limpiar el array ya que encontramos un nombre más largo
    } 
    if (nombreActual1.length === varTextoMasCorto.length) { 
        arrayTextosMasCortos.push(nombreActual1); // Agregar al array si es igual de largo
    }
}
console.log("Nombre más largo:", varTextoMasCorto);
console.log("Nombres igualmente largos:", arrayTextosMasCortos);

// 7) Obtener array longitud nombres con las longitudes de los arrays

var LongitudNombres = [];

for (let i = 0; i < arrayConcat.length; i++) {
    let guardarLongitud = arrayConcat[i].length;
    LongitudNombres.push(guardarLongitud); 
}
console.log(LongitudNombres);  


// 8) Obtener un array que contenga las palabras que tieneen la letra I

let ArrayNombresConI = [];
for (let i = 0; i < arrayConcat.length; i++) {
    let palabraActual = arrayConcat[i]; 
    console.log(palabraActual);

    if (palabraActual.includes("i") || palabraActual.includes("I") || palabraActual.includes("í") || palabraActual.includes("Ì")) {
        ArrayNombresConI.push(palabraActual);
    }

}
console.log(ArrayNombresConI);


// 9) Debes obtener otro array llamado arrayBidimensional que sea asÃ­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

//consigo un array con solo los nombres
let arrayNombre = [];
for (let i = 0; i < arrayMixto.length; i += 2) {
    arrayNombre.push(arrayMixto[i]) ;
}
console.log(arrayNombre);

//consigo un array con solo las edades

let arrayEdad = [];
for (let i = 1; i < arrayMixto.length; i += 2) {
    arrayEdad.push(arrayMixto[i]);
    console.log(arrayEdad);
}
console.log(arrayEdad);

//consigo un arraybidimensional
//en este bucle for estamos haciendo un push de dos variales al mismo tiempo, 
//envolviendolas en corchetes[] logramos tener varios corchetes dentro de otro corchete
let arrayBidimensional = [];
for (let i = 0; i < arrayNombre.length; i++) { //
    arrayBidimensional.push([arrayNombre[i], arrayEdad[i]]);
}
console.log(arrayBidimensional);



// 10) A partir de un array como el que has obtenido en el ejercicio 9,
// debes resolver los ejercios 1, 2, 3 y 4

// 1) sumar el array y mostrar en consola

let sumaEdades = 0;
let guardarEdad = [];

for (let i = 0; i < arrayBidimensional.length; i++) {
       let sumar = arrayBidimensional[i];
       console.log(sumar);
       for (let j = 1; j < sumar.length; j += 2) {
            let edad = sumar[j];
            sumaEdades += edad;
            guardarEdad.push(edad)
            console.log(edad);
       }
}
console.log(`la suma de las edades del array bidimensional es :  ${sumaEdades}`);   
console.log(guardarEdad);
// 2) Mostrar el promedio en consola

let sumarEdades = 0;

for (let i = 0; i < arrayBidimensional.length; i++) {
       let sumar = arrayBidimensional[i];
       console.log(sumar);
       for (let j = 1; j < sumar.length; j += 2) {
            let edad = sumar[j];
            sumarEdades += edad;
            console.log(edad);
       }
}
let promedioBidimensional = sumarEdades / arrayBidimensional.length;
console.log(promedioBidimensional);
console.log(`El promedio del array bidimensional es :  ${promedioBidimensional}`); 

// 3) Encontrar el valor maximo

let valorMaximo = 0;

for (let i = 0; i < guardarEdad.length; i++) {
    console.log(guardarEdad[i]);
    if (guardarEdad[i] > valorMaximo) {
        valorMaximo = guardarEdad[i];
    }
}
console.log(valorMaximo);

// 3) Encontrar el valor minimo

let valorMinimo = 9999999999999;

for (let i = 0; i < guardarEdad.length; i++) {
    console.log(guardarEdad[i]);
    if (valorMinimo > guardarEdad[i]) {
        valorMinimo = guardarEdad[i];
    }
}
console.log(valorMinimo);


// 4) Conseguir los indices pares y sumarlos
//cambiar la iteracion para conseguir saltar los numeros impares

let obtenerPares = 0;
console.log(guardarEdad);
for (let i = 0; i < guardarEdad.length; i += 2) {
   obtenerPares += guardarEdad[i]
}

console.log(`La suma de los indices pares es : ${obtenerPares}`);

// 4) Conseguir los indices impares y restarlos
//cambiar la iteracion para conseguir saltar los numeros impares

let obtenerInpares = 0;
for (let i = 1; i < guardarEdad.length; i = i + 2) {
    console.log(guardarEdad[i]);
    obtenerInpares = guardarEdad[1]
    obtenerInpares -= guardarEdad[i];
}
console.log(obtenerInpares);