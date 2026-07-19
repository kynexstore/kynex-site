const lista = document.getElementById("lista-produtos");


function mostrarProdutos(categoria){


lista.innerHTML="";


let produtosFiltrados;


if(categoria === "Todos"){

produtosFiltrados = produtos;

}

else{

produtosFiltrados = produtos.filter(
produto => produto.categoria === categoria
);

}



produtosFiltrados.forEach(produto => {


lista.innerHTML += `

<div class="card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p>${produto.descricao}</p>

<br>

<button onclick="window.location.href='${produto.link}'">
Ver oferta
</button>


</div>

`;

});


}


mostrarProdutos("Todos");
