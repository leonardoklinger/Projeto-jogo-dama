import "./cores.css"
import "../Tabuleiro/tabuleiro"
import { useState } from "react"
import { TiArrowSortedDown } from 'react-icons/ti'
import { renderizarCores } from './corRenderizar'

let array = []
function Botoes({ setProps }) {
    const [cor, setCor] = useState("")

    function alterarCor(dados) {
        atualizarCores(dados)
        setProps(array)
    }

    function atualizarCores(dados) {
        switch (dados.Player) {
            case "PecaCor1":
                if (array[1] !== undefined) {
                    if (dados.Cor === array[1].Cor) {
                        return alert("Por favor, escolha cores diferente de seu oponente !")
                    }
                }
                array[0] = { Cor: dados.Cor, Player: dados.Player }
                renderizarCores(dados, cor)
                break;
            case "PecaCor2":
                if (array[0] !== undefined) {
                    if (dados.Cor === array[0].Cor) {
                        return alert("Por favor, escolha cores diferente de seu oponente !")
                    }
                }
                array[1] = { Cor: dados.Cor, Player: dados.Player }
                renderizarCores(dados, cor)
                break;

            default:
                break;
        }
    }

    return (
        <div className="divPaiCores">
            <h3>Configurações de estilo</h3>
            <h4>Jogador Alfa</h4>

            <div className="elemento">
                <label>Cor das peças</label>
                <input type="color" id="colorPicker" defaultValue="#ff0000" onChange={e => setCor(e.target.value)} />
                <TiArrowSortedDown onClick={() => alterarCor({ Cor: cor, Player: "PecaCor1" })} className="botao">Teste</TiArrowSortedDown>
            </div>

            <h4>Jogador Beta</h4>

            <div className="elemento">
                <label>Cor das peças</label>
                <input type="color" id="colorPicker2" defaultValue="#000" onChange={e => setCor(e.target.value)} />
                <TiArrowSortedDown onClick={() => alterarCor({ Cor: cor, Player: "PecaCor2" })} className="botao">Teste</TiArrowSortedDown>
            </div>
        </div>
    )
}

export default Botoes