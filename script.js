const lista = document.getElementById("lista-produtos");


function mostrarProdutos(categoria){

    lista.innerHTML = "";


    let produtosFiltrados;


    if(categoria === "Todos"){

        produtosFiltrados = produtos;

    } else {

        produtosFiltrados = produtos.filter(
            produto => produto.categoria === categoria
        );

    }



    produtosFiltrados.forEach(produto => {


        lista.innerHTML += `

        <div class="card">


            <div class="badge">
                ${produto.badge}
            </div>


            <div class="imagem-produto">

                <img 
                class="${produto.tipoImagem || ''}"
                src="${produto.imagem}" 
                alt="${produto.nome}"
                >

            </div>



            <h3>
                ${produto.nome}
            </h3>



            <p>
                ${produto.descricao}
            </p>



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



            <button onclick="abrirOferta('${produto.link}')">

                Ver oferta

            </button>



        </div>

        `;


    });


}



function abrirOferta(link){

    if(link === "#" || link === ""){

        alert("Link da oferta será adicionado em breve!");

    }else{

        window.open(link,"_blank");

    }

}



mostrarProdutos("Todos");
