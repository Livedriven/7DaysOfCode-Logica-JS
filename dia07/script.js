// variaveis

const display = document.getElementById('display');

let valor1 = '';
let valor2 = '';
let operacao = null;

const operacoes = {
    "+": (a,b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "÷": (a, b) => b === 0 ? "Error": a / b,
    "^":(a, b) => a ** b
}

// funções

const inserir = function(valor){
    if(operacao === null){
        valor1 += valor;
        display.value +=  valor;
    }
    else{
        valor2 += valor;
        display.value += valor;
    }
}

const definirOperacao = function(op){
    if(valor1 === ''){
        return;
    }
    else{
        operacao = op;
        display.value += operacao;
    }
}

const calcular = function (){
    if(valor1 === ''|| valor2 === ''|| operacao === null){
        return;
    }
    else{
        const num = parseFloat(valor1);
        const num2 = parseFloat(valor2);
        const callback = operacoes[operacao];
        const resultado = callback(num,num2);
        display.value = resultado;
        valor2 = '';
        valor1 = resultado.toString();
        operacao = null;
    }


}

const limpar = function(){
    valor1 = '';
    valor2 = '';
    operacao = null;
    display.value = "";
}
