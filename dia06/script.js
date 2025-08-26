const compras = []; 
const inputItem = document.querySelector('.item');
const inputCategoria = document.querySelector('.categoria');
const exibirLista = document.querySelector('.exibirLista');


const adicionar = function (){
    let item = inputItem.value.trim();
    let categoria = inputCategoria.value.trim();

    if(item && categoria){
        compras.push(
            {
                nome: item,
                categoria: categoria
            }
        )
    }

    inputItem.value = "";
    inputCategoria.value = "";
    inputItem.focus();

    exibir();

}

const exibir = function() {
    exibirLista.innerHTML = ""; // limpa antes de renderizar

   if (compras.length == 0) {
      exibirLista.innerHTML = "<p><strong>Sua lista de compras está vazia</strong></p>";
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


   for (let categoria in agrupar) {
      const p = document.createElement('p');
      const strong = document.createElement('strong');

      strong.textContent = categoria + ": ";
      p.appendChild(strong);

      const texto = document.createTextNode(
        agrupar[categoria].map(item => item.nome).join(", ")
      );

      p.appendChild(texto);

      exibirLista.appendChild(p);
   }
}


