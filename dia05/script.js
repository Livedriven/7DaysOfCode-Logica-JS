const compras = []; // array que irei guarda objetos(item e a categoria)
const div = document.querySelector("div");

let escolha = Number(prompt("Deseja iniciar uma lista de compras? 1-Sim / 2-Não"));

const listaDeCompras = function(compras) {
   let tipo;
   let comida;
   let adicionar = true;

   do {
      comida = prompt("Digite a comida que deseja adicionar na lista");
      tipo = prompt("Digite a categoria do produto acima (ex: frutas, doces, etc.)");

      compras.push({
         nome: comida,
         categoria: tipo
      });

      let msg = prompt("Deseja adicionar mais coisas à lista? (S/N)");
      if (msg.toLowerCase() === "n") {
         adicionar = false;
      }
   }
   while (adicionar === true);

   const agrupar = {};

   for (let item of compras) {
      let grupo = item.categoria;

      if (!agrupar[grupo]) {
         agrupar[grupo] = [];
      }
      agrupar[grupo].push(item);
   }

   // Mostrar no HTML
   for (let categoria in agrupar) {
      div.innerHTML += `<p><strong>${categoria}:</strong> ${agrupar[categoria].map(item => item.nome).join(", ")}</p>`;
   }
}

if (escolha === 1) {
   listaDeCompras(compras);
} else {
   alert("Sua lista de compras está vazia");
}
