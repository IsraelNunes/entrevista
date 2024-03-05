// Questão 1 - R = 91

function soma(indice, soma, k) {
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }
return soma;    
}

console.log(soma(13, 0, 0))

// Questão 2

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function fibonacciCheck(number, i = 0) {
    const Number2 = fibonacci(i);
    
    if (Number2 === number) {
        return `${number} belong`;
    } else if (Number2 < number) {
        return fibonacciCheck(number, i + 1);
    } else {
        return `${number} does not belong`;
    }
}

const number = 8;
console.log(fibonacciCheck(number));


// Questão 3 

// a) 1, 3, 5, 7, R = 9

// b) 2, 4, 8, 16, 32, 64, R = 128

// c) 0, 1, 4, 9, 16, 25, 36, R = 49

// d) 4, 16, 36, 64, R = 100

// e) 1, 1, 2, 3, 5, 8, R = 13

// f) 2,10, 12, 16, 17, 18, 19, R = Essa eu não sei :(



function reverseString(string){
    let invertedString = ''
    for (let index = string.length - 1; index >= 0; index--) {
        invertedString += string[index] 
    }
    console.log(invertedString)
    return invertedString;
}

reverseString("string");
