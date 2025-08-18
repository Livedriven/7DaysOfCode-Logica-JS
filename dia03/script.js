//irei usar estruturas de condicionais para fazer 4 perguntas para o usuario
// ate a 3 pergunta irei usar if e else pois são perguntas que dão opções implicitas
// e na 4 pergunta irei usar o while ou do while, mas o objetivo e fazer o usuario digitar quantas tecnologias quiser
//provavelmente irei usar um array vazio para armazenar o nome das tecnologias que o usuario digitar

let specialization;
let choice;
let technology = []; // declarando um array vazio para armazenar as tecnologias que iremos aprender
let msg;

function especializacao(specialization){

    if(specialization == 1){
    alert("e uma boa escolha, se você seguir com garra e disciplina ira conseguir se tornar referencia na área");
    }
    else if(specialization == 2){
    alert("parabens que otima escolha assim a chance de você ser contratado aumenta já que você se torna 2 programadores praticamente");
    }
    else{
        alert("valor invalido");
    }
}


function escolhas(choice) // uma função e um bloco de codigo que podemos reutilizar futuramente uma ou mais vezes se necessario
{
let linguagem;
if(choice == 1) // if, else e else if são utilizados quando a dois ou mais caminhos de escolha, para definir o que acontecera em cada escolha 
{
    linguagem = prompt("Você quer aprender React ou aprender Vue"); // estou usando uma variavel semelhante para armazenar um valor de escolha semelhante

    technology.push(linguagem) // o push e um metodo que podemos usar para adicionar um valor no final do array, estando vazio ou não; 
}
else if(choice == 2){
    linguagem = prompt("Você quer aprender C# ou aprender Java");

    technology.push(linguagem);
}

}


choice = prompt("você quer seguir para área de Front-End (1) ou seguir para a área de Back-End (2)");

escolhas(choice); // chamando a função aqui para que seja executada logo apos essa pergunta

specialization =  prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");


especializacao(specialization); // chamando as funções para que elas no momento certo do código sejam executadas

msg = prompt("há alguma outra tecnologia que você deseja aprender? digite 'ok' em caso de positivo");

//while e uma estrutura de escolha/repetição, não sabemos quantas vezes algo sera escolhido ou repitido então usamos o while que e executado enquanto a condição for verdadeira

while(msg == "ok"){
    let newTecnology = prompt("digite a tecnologia que você ira aprender");

    technology.push(newTecnology);

    msg = prompt("há mais uma alem dessa que deseja aprender? digite ok novamente caso tenha");
}

alert(`aqui esta uma lista das tecnologias que você escolheu aprender\n ${technology.join(", ")}`);
