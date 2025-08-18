// devo fazer um jogo de adivinhação.
// utilizarei estruruta de repetição para dar ao jogador ate 3 chances caso ele erre

alert("estamos jogando um jogo de adivinhar o número escolhido de 0 a 10, caso você acerte ira ganhar um premio");

function adivinha(){
    let numRandom = Math.floor(Math.random() * (10 - 0 + 1) + 0);
    let chute;

    chute = Number(prompt("tente adivinhar qual foi o número escolhido"));

    if(chute !== numRandom){

        // for e uma estrutura de loop que usamos quando sabemos quantas vezes uma ação devera se repetir;
        
        for(let i = 1; i <= 2; i++){
            chute = Number(prompt("perdeu 1 chance, tente adivinhar novamente qual foi o número escolhido"));
        }
        alert("o número que foi escolhado era o " + numRandom + " que pena que você não conseguiu acertar");
    }
    else if(chute === numRandom){
        alert("parabens por acertar o número escolhido ")
    }
}

function continuar(){
    let tentarNovamente = prompt("deseja tentar de novo? S/N");

    while(tentarNovamente === "S" || tentarNovamente === "s"){
        adivinha();
        tentarNovamente = prompt("deseja tentar de novo? S/N");
    }
}

adivinha();

continuar()