// Postwork
/**
 * Function 1
 * Escribir una función llamada deepEqual que reciba dos argumentos 
 * y retorne true si son el mismo valor o si son objetos con las mismas 
 * propiedades, en este último caso los valores de las propiedades deben 
 * ser comparados con una llamada recursiva de deepEqual.
 */
/*function deepEqual(a, b) {
    if (typeof a === typeof b) {
        switch (typeof a) {
            case "string":
                return a === b;
            case "number":
                return a === b;
            case "object":
                var elementsA = Object.keys(a);
                var elementsB = Object.keys(b);
                if (elementsA.length != elementsB.length) return false;
                var result = true;
                for (let i = 0; i < elementsA.length; i++) {
                    //console.log('"', elementsA[i], '"vs"', elementsB[i], '"');
                    result = deepEqual(elementsA[i], elementsB[i]);
                    if (!result) {
                        return false;
                    }
                    //console.log('"', a[elementsA[i]], '"vs"', b[elementsB[i]], '"');
                    result = deepEqual(a[elementsA[i]], b[elementsB[i]]);
                    if (!result) {
                        return false;
                    }
                }
                return result;
            default:
                return false
        }
    } else {
        return false;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log('Test 6:', deepEqual(john, { firstName: 'John', other: 'Mor' })) // false
console.log('Test 7:', deepEqual(john, { firstName: 'John', lastName: 'Do' })) // false*/

/**
 * Function 2
 * Escribir una función chunk que recibe un arreglo y un número 
 * entero size. La función debe dividir el arreglo en múltiples 
 * arreglos del tamaño determinado por size.
 *  
 */
/*function chunk(array, size) {
    var result = [];
    var elements = [];
    var position = 0;
    if (size > 0) {
        while (position < array.length) {
            for (let i = 0;
                (i < size) && (position < array.length); i++) {
                elements.push(array[position]);
                position++;
            }
            result.push(elements);
            elements = [];
        }
    }

    return result;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 4:', chunk(data, 4))
console.log('Test 5:', chunk(data, 5))
console.log('Test 6:', chunk(data, 9))*/

/**
 * Function 3
 * Escribir una función frequency que recibe un string como argumento. 
 * Esta función debe contar la frecuencia o el número de veces que se 
 * repite cada carácter. El resultado debe mostrarse en un objeto donde 
 * las propiedades sean los caracteres, y los valores sean la frecuencia. 
 * Los resultados deben ordenarse ascendentemente por los caracteres y no 
 * la frecuencia.
 */

/*function frequency(string) {
    var result = {};
    var cont = 0;
    var position = 0;
    if (string.length > 0) {
        while (position < string.length) {
            for (let i = 0; i < string.length; i++) {
                if (string.charAt(position) === string.charAt(i)) {
                    cont++;
                }
            }
            result[string.charAt(position)] = cont;
            cont = 0;
            position++;
        }
    }
    result = orderArray(result);
    return result;
}

function orderArray(obj) {
    var elements = Object.keys(obj);
    var finalObj = {};
    elements.sort();
    for (let i = 0; i < elements.length; i++) {
        finalObj[elements[i]] = obj[elements[i]];
    }
    return finalObj;
}

console.log('Test 1:', frequency('cccbbbaaa'))
    // {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
    // {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
    // {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
console.log('Test 3:', frequency(''))*/