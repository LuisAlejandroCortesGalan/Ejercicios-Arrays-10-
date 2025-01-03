# Ejercicios de Arrays en JavaScript

Este documento contiene varios ejercicios para practicar el manejo de arrays en JavaScript. Los ejercicios van desde operaciones simples hasta tareas más complejas que incluyen manipulación y transformación de arrays.

## Ejercicios

### 1. Sumar los elementos de un array

**Descripción**: Dado un array de números, escribir una función que devuelva la suma de todos los elementos.

```javascript
function sumarElementos(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Ejemplo:
let numeros = [1, 2, 3, 4];
console.log(sumarElementos(numeros)); // Resultado: 10
