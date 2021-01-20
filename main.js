// Postwork
/**
 * Function 1
 * Escribir una función llamada deepEqual que reciba dos argumentos 
 * y retorne true si son el mismo valor o si son objetos con las mismas 
 * propiedades, en este último caso los valores de las propiedades deben 
 * ser comparados con una llamada recursiva de deepEqual.
 */
function deepEqual(a, b) {
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
console.log('Test 7:', deepEqual(john, { firstName: 'John', lastName: 'Do' })) // false