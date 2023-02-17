import { useState } from "react";
import Jogo from "./jogo";
import Letras from "./letras";
import palavras from "./palavras";

export default function App() {
  const [habilitarLetras, setHabilitarLetras] = useState(true)
  const [erros, setErros] = useState(0)
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  const arrayPalavra = palavra.split('');
  const novaArrayPalavra = arrayPalavra.map((p) => p="_")
  return (
    <div className="container">
      <Jogo arrayPalavra={arrayPalavra} novaArrayPalavra={novaArrayPalavra} palavras={palavras} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
      <Letras arrayPalavra={arrayPalavra} novaArrayPalavra={novaArrayPalavra} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
    </div>
  );
}


