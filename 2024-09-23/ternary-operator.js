// exemplo com 2 cenários possiveis
let n = 7 
let result = n % 2 === 0 ? "é par" : "é ímpar";
// ? = se for verdadeiro // : = se for falso
console.log(result);

// exemplo com 3 cenários possiveis
const randomNumber = Math.floor(Math.random() * 3);
result = 
    randomNumber === 0 ? "Rock" : randomNumber === 1 ? "Paper" : "Scissors";
console.log(result);