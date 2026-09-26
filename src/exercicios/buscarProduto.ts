function buscarProduto(nome: string): /*COMPLETE AQUI */Promise<string> {
    return new Promise/*COMPLETE AQUI */(function (resolve) {
        setTimeout(function () {
            resolve(`Produto ${nome} encontrado!`);
        }, 2000);
    });
}

/*COMPLETE AQUI */async function mostrarProduto(): Promise<void> {
    const produto = /*COMPLETE AQUI */ await buscarProduto("Teclado");

    console.log(produto);
}

mostrarProduto();