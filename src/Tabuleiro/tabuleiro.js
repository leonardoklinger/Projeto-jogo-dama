import "./tabuleiro.css"

function Tabuleiro({ cor, matriz }) {
	let pecaSelecionada = null;

	let tabuleiroMatriz = [
		["0", "x", "0", "x", "0", "x", "0", "x"],
		["x", "0", "x", "0", "x", "0", "x", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "0", "0", "0", "0", "0", "0", "0"],
		["0", "y", "0", "y", "0", "y", "0", "y"],
		["y", "0", "y", "0", "y", "0", "y", "0"],
	]

	if(matriz.length !== 0) {
		matriz = tabuleiroMatriz
	}

	function criarTabuleiro(i, j) {
		if (i % 2 === 0) {
			if (j % 2 === 0) {
				return "branco"
			} else {
				return "marrom"
			}
		} else {
			if (j % 2 === 0) {
				return "marrom"
			} else {
				return "branco"
			}
		}
	}

	function gerarPecasTabuleiro(coluna, i, j) {
		switch (coluna) {
			case "x":
				return <span className="PecaCor1" id={`${i}${j}Pecas`}></span>
			case "y":
				return <span className="PecaCor2" id={`${i}${j}Pecas`}></span>
			default:
				break;
		}
	}

	function moverPeca(i, j) {
		let pecaAntiga
		if (pecaSelecionada != null) {
			pecaAntiga = pecaSelecionada
		}

		pecaSelecionada = { corPeca: tabuleiroMatriz[i][j], linha: i, coluna: j }
		if (pecaAntiga != null) {
			if (pecaAntiga.corPeca === "y" || pecaAntiga.corPeca === "x") {
				if (pecaSelecionada.corPeca === "0") {
					moverPecaTabuleiro(pecaAntiga, pecaSelecionada)
				} else {
					console.log("Infelizmente tem uma peça na sua frente")
				}
			}
		}
	}

	function moverPecaTabuleiro(posicaoAntiga, posicaoNova) {
		let pecaPosicaoNova = document.getElementById(posicaoNova.linha + "" + posicaoNova.coluna)
		let pecaPosicaoAntiga = document.getElementById(posicaoAntiga.linha + "" + posicaoAntiga.coluna + "Pecas")

		if (pecaPosicaoAntiga) {
			if (validarPossiveisMovimentos(posicaoAntiga, posicaoNova)) {
				pecaPosicaoAntiga.parentNode.removeChild(pecaPosicaoAntiga)
				let adicionarNovaPeca = document.createElement("span")
				adicionarNovaPeca.setAttribute("class", tipoPeca(posicaoAntiga).corPeca)
				adicionarNovaPeca.setAttribute("id", `${posicaoNova.linha}${posicaoNova.coluna}Pecas`)
				trocaCor(tipoPeca(posicaoAntiga).corPeca, adicionarNovaPeca)
				pecaPosicaoNova.appendChild(adicionarNovaPeca)
				atualizacaotabuleiroMatriz(posicaoAntiga, posicaoNova)
			} else {
				console.log("Posição não aceita !")
			}
		}
	}

	function tipoPeca(peca) {
		switch (peca.corPeca) {
			case "x":
				return { corPeca: "PecaCor1", tipoPeca: "x" }
			case "y":
				return { corPeca: "PecaCor2", tipoPeca: "y" }

			default:
				break;
		}
	}

	function atualizacaotabuleiroMatriz(posicaoAntiga, posicaoNova) {
		tabuleiroMatriz[posicaoAntiga.linha][posicaoAntiga.coluna] = "0"
		tabuleiroMatriz[posicaoNova.linha][posicaoNova.coluna] = tipoPeca(posicaoAntiga).tipoPeca
	}

	function possiveisMovimentos(i, j) {
		let verificarMovimento = []
		let verificado = []

		switch (tabuleiroMatriz[i][j]) {
			case 'x':
				verificarMovimento.push([i + 1, j - 1]);
				verificarMovimento.push([i + 1, j + 1]);

				break
			case 'y':
				verificarMovimento.push([i - 1, j - 1]);
				verificarMovimento.push([i - 1, j + 1]);

				break
			default:
				break;
		}
		return removerAsPosicoes(verificarMovimento, verificado)
	}

	function removerAsPosicoes(verificarMovimento, verificado) {
		//Remove as posições que não existe !
		for (var ii = 0; ii < verificarMovimento.length; ii++) {
			if (tabuleiroMatriz[verificarMovimento[ii][0]][verificarMovimento[ii][1]] === undefined) {
				verificarMovimento.splice(ii, 1)
			}
		}
		return verificado[0] === undefined ? verificarMovimento : verificado[0]
	}

	function validarPossiveisMovimentos(posicaoAntiga, posicaoNova) {
		let movimentos = possiveisMovimentos(posicaoAntiga.linha, posicaoAntiga.coluna)
		let verificar = []
		for (let i = 0; i < movimentos.length; i++) {
			verificar.push(`${movimentos[i][0]}${movimentos[i][1]}`)
		}

		if (verificar.includes(`${posicaoNova.linha}${posicaoNova.coluna}`)) {
			verificar = []
			return true
		} else {
			verificar = []
			return false
		}
	}

	function trocaCor(player, adicionarNovaPeca) {
		if (cor !== "") {
			if (cor[0] !== undefined && cor[0].Player === player) {
				adicionarNovaPeca.style.backgroundColor = cor[0].Cor
			} else {
				if (cor[1] !== undefined && cor[1].Player === player) {
					adicionarNovaPeca.style.backgroundColor = cor[1].Cor
				}
			}
		}
	}

	return (
		<div id="fundo">
			<div id="tabuleiro">
				<div id="divTabuleiro">
					{
						tabuleiroMatriz.map((linha, i) => (
							linha.map((coluna, j) => (
								<div className={criarTabuleiro(i, j)} key={j} id={`${i}${j}`} onClick={() => moverPeca(i, j)}>{gerarPecasTabuleiro(coluna, i, j)}</div>
							))
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Tabuleiro