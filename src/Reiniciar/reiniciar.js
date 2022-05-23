import "./reiniciar.css"
import { renderizarCores } from "../Cores/corRenderizar"

function Reiniciar({ setProps, cor }) {

    let tabuleiroMatrizBackUp = [
        ["0", "x", "0", "x", "0", "x", "0", "x"],
        ["x", "0", "x", "0", "x", "0", "x", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0", "0"],
        ["0", "y", "0", "y", "0", "y", "0", "y"],
        ["y", "0", "y", "0", "y", "0", "y", "0"],
    ]

    function resetar() {
        for (let i = 0; i < tabuleiroMatrizBackUp.length; i++) {
            for (let j = 0; j < tabuleiroMatrizBackUp[i].length; j++) {
                let pecaPosicaoAntiga = document.getElementById(i + "" + j + "Pecas")

                if (pecaPosicaoAntiga !== null) {
                    console.log(pecaPosicaoAntiga.length)
                    pecaPosicaoAntiga.parentNode.removeChild(pecaPosicaoAntiga)
                }

                if (tabuleiroMatrizBackUp[i][j] === "x" || tabuleiroMatrizBackUp[i][j] === "y") {
                    let pecaPosicaoNova = document.getElementById(i + "" + j)
                    let adicionarNovaPeca = document.createElement("span")
                    adicionarNovaPeca.setAttribute("class", tabuleiroMatrizBackUp[i][j] === "x" ? "PecaCor1" : tabuleiroMatrizBackUp[i][j] === "y" ? "PecaCor2" : "")
                    adicionarNovaPeca.setAttribute("id", i + "" + j + "Pecas")
                    pecaPosicaoNova.appendChild(adicionarNovaPeca)
                }
            }
        }

        for (let i = 0; i < cor.length; i++) {
            renderizarCores(cor[i], cor[i].Cor)
        }

        setProps(tabuleiroMatrizBackUp)
    }

    return (
        <div className="divPaiGeral">
            <h3>Geral</h3>
            <div className="botaoReiniciar">
                <button type="button" onClick={() => resetar()}>Reiniciar peças</button>
            </div>
        </div>
    )
}

export default Reiniciar