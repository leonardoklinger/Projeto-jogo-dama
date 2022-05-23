exports.renderizarCores = (dados, cor) => {
    for (let i = 0; i < document.getElementsByClassName(dados.Player).length; i++) {
        document.getElementsByClassName(dados.Player)[i].style.backgroundColor = cor
    }
}