// arrow functions
// anonymous functions

// ES5 (versão antiga)
var multiplicar = function(x, y) {
    return x * y;
}

// ES¨(versão atual)
const multiplicar = (x, y) => {
    return x * y;
}

// é possível omitir as chaves e a palavra-chave return caso a função tenha apenas uma única instrução (linha).
const multiplicar = (x, y) => x * y;