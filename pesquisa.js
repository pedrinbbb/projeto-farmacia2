
function pesquisar() {
    const textoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const produtos = document.querySelectorAll(".conteudo aside");
    const resultado = document.getElementById("resultado");

    let encontrou = false;

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector("h3").innerText.toLowerCase();

        if (nomeProduto.includes(textoPesquisa)) {
            produto.style.display = "block";
            encontrou = true;
        } else {
            produto.style.display = "none";
        }
    });

    if (!encontrou && textoPesquisa !== "") {
        resultado.innerText = "Produto não encontrado";
    } else {
        resultado.innerText = "";
    }
}
