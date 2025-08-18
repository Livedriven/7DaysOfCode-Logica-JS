let nome;
let idade;
let linguagem;


nome = prompt("qual seu nome?");

idade = prompt("quantos anos você tem?");

linguagem = prompt("qual linguagem de programação você  esta");

function apresentação(nome,idade,linguagem){
    alert(`Ola ${nome}, você tem ${idade} anos e já esta aprendendo ${linguagem}`);

    let gosto = Number(prompt(`Você gosta de estuda ${linguagem}? Responda com o número 1 para SIM ou 2 
    para NÃO.`));


    if(gosto === 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    }
    else if(gosto === 2){
        alert("Ahh que pena... Já tentou aprender outras linguagens?");
    }
}

apresentação(nome,idade,linguagem);