const lista = document.getElementById("lista-produtos");

function mostrarProdutos(categoria) {

    lista.innerHTML = "";

    const produtosFiltrados =
        categoria === "Todos"
            ? produtos
            : produtos.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach(produto => {

        lista.innerHTML += `

        <div class="card">

            <div class="badge">
                ${produto.badge}
            </div>

            <img src="${produto.imagem}" alt="${produto.nome}">

            <h3>${produto.nome}</h3>

            <p>${produto.descricao}</p>

            <div class="avaliacao">
                ⭐ ${produto.avaliacao}
            </div>

            <div class="vendidos">
                ${produto.vendidos}
            </div>

            <div class="preco-antigo">
                ${produto.precoAntigo}
            </div>

            <div class="preco">
                ${produto.preco}
            </div>

            <button onclick="window.open('${produto.link}','_blank')">
                Ver oferta
            </button>

        </div>

        `;

    });

}

mostrarProdutos("Todos");
