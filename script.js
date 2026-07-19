const lista = document.getElementById("lista-produtos");


function mostrarprodutos(categoria){

    lista.innerHTML = "";


    const produtosFiltrados = categoria === "Todos"
    ? produtos
    : produtos.filter(produto => produto.categoria === categoria);



    produtosFiltrados.forEach(produto => {


        lista.innerHTML += `

        <div class="card">

        <img src="${produto.imagem}">

        <h3>${produto.nome}</h3>

        <p>${produto.descricao}</p>

        <strong>${produto.preco}</strong>

        <br><br>

        <button onclick="window.location.href='${produto.link}'">
        Ver oferta
        </button>

        </div>

        `;


    });

}


// Carrega todos ao abrir

mostrarProdutos("Todos");

});
