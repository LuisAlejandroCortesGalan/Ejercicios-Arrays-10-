// ARRAY

let arrayFrutas = ["pera", "kiwi", ,"mango", "uva", "mandarina"]

let array1 = new Array(3)
array2 = [];
//length sirve para contar los elementos del array
console.log(array1.length);
console.log(arrayFrutas.length);
//para acceder a cada elemento utilizamos su indice
//el indice empieza a contar desde cero
console.log(arrayFrutas[2]);
console.log(arrayFrutas.at(-1));

//convertir un array en un string
let arrayFrutasToString = arrayFrutas.toString();
console.log(arrayFrutasToString);
//convertir un string en array
let stringToArray = arrayFrutasToString.split(",");
console.log(stringToArray);
//convertir un array en join
let arrayFrutasToJoin = arrayFrutas.join("-");
console.log(arrayFrutasToJoin);
//añadir un elemento al final (push)
arrayFrutas.push("Coco");
console.log(arrayFrutas);
//quitar el ultimo elemento
let coco = arrayFrutas.pop();
console.log(arrayFrutas);
console.log(coco);
//quitar el primer elemento
let pera1 = arrayFrutas.shift();
console.log(arrayFrutas);
console.log(pera1);
//añadir un item a el primer elemento
arrayFrutas.unshift(pera1);
console.log(arrayFrutas);

for (let i = 1; i < arrayFrutas.length; i = i + 2) {
    console.log(arrayFrutas[i]);
}

//darle la vuelta al array
arrayFrutas.reverse();
console.log(arrayFrutas);
//crea una copia del array original y lo ordena alfabeticamente
let arrayFrutas2 = arrayFrutas.toSorted();
console.log(arrayFrutas2);
//ordena el array  alfabeticamente
arrayFrutas.sort();
console.log(arrayFrutas);
//busca una palabra "incluida en el array" si esta es true y sino es false
console.log(arrayFrutas.includes("uva"));
//busca el indice del valor introducido (-1 = false)
console.log(arrayFrutas.indexOf("patata"));
//corta el array entre los espacios de los indices que introduzcamos como parametros (me quedo con lo que esta dentro de los valores)
let arrayFrutas3 = arrayFrutas.slice(1,3)
console.log(arrayFrutas3);
//quita los elementos de un array y si es necesario pone otros en su lugar y te devuelve lo que estas quitando
let cortarPoner = arrayFrutas.splice(1,3);
console.log(arrayFrutas);
