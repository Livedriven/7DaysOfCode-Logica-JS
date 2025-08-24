const compras = []; 
const div = document.querySelector("div");

let escolha = Number(prompt("Deseja iniciar uma lista de compras? 1-Sim / 2-Não"));

const listaDeCompras = function(compras, callback) {
   let adicionar = true;

   do {
      let comida = prompt("Digite a comida que deseja adicionar na lista");
      let tipo = prompt("Digite a categoria do produto acima (ex: frutas, doces, etc.)");

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

   callback(compras);
}

const exibirCompras = function(compras) {
   if (compras.length == 0) {
      div.innerHTML = "<p><strong>Sua lista de compras está vazia</strong></p>";
      return;
   }

   const agrupar = {};
   for (let item of compras) {
      let grupo = item.categoria;

      if (!agrupar[grupo]) {
         agrupar[grupo] = [];
      }
      agrupar[grupo].push(item);
   }

   div.innerHTML = ""; // limpa antes de renderizar

   for (let categoria in agrupar) {
      div.innerHTML += `<p><strong>${categoria}:</strong> ${agrupar[categoria].map(item => item.nome).join(", ")}</p>`;
   }
}

if (escolha === 1) {
   listaDeCompras(compras, exibirCompras);
} else {
   div.innerHTML = "<p><strong>Sua lista de compras está vazia</strong></p>";
}
