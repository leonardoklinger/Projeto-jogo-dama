import Cores from "./Cores/cores";
import Tabuleiro from "./Tabuleiro/tabuleiro";
import Reiniciar from "./Reiniciar/reiniciar";
import "./app.css"
import { useState } from 'react';

function App() {
  const [cor, setCor] = useState("")
  const [tabuleiroMatriz, setTabuleiroMatriz] = useState("")

  return (
    <div className="container">
      <div className="tabuleiro">
        <h1>Jogador</h1>
        <h2>BETA</h2>
        <Tabuleiro cor={cor} matriz={tabuleiroMatriz}/>
        <h1>Jogador</h1>
        <h2>ALFA</h2>
      </div>
      <div className="teste">
        <Cores setProps={setCor} />
        <Reiniciar setProps={setTabuleiroMatriz} cor={cor}/>
      </div>
    </div>
  );
}

export default App;