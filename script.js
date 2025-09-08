let produtos = [] 

// Conectar e carregar o JSON
fetch('produtos.json')
  .then(resposta => resposta.json())
  .then(corpo => {
    produtos = corpo
    mostrarProduto(0) 
  })


function mostrarProduto(indice) {
  const produto = produtos[indice]

  document.getElementById('imagem').innerHTML = produto.imagem
  document.getElementById('nome').innerHTML = produto.nome
  document.getElementById('disco').innerHTML = produto.album
  document.getElementById('estilo').innerHTML = produto.genero
  document.getElementById('preco').innerHTML = produto.preco
}

// Função chamada ao clicar em "Comprar"
function comprar() {
  const nomeDisco = document.getElementById('disco').innerText
  alert(`Você comprou o álbum ${nomeDisco}`)
}

console.log(produtos)
