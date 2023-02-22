import { useState } from "react";
import Jogo from "./jogo";
import Letras from "./letras";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function App() {
  const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [habilitarLetras, setHabilitarLetras] = useState(true)
  const [habilitarLetra, setHabilitarLetra] = useState(false)
  const [erros, setErros] = useState(0)
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  const arrayPalavra = palavra.split('');
  console.log(arrayPalavra)
  const novaArrayPalavra = arrayPalavra.map((p) => p="_")
  
  return (
    <div className="container">
      <Jogo habilitarLetra={habilitarLetra} setHabilitarLetra={setHabilitarLetra} forcas={forcas} arrayPalavra={arrayPalavra} novaArrayPalavra={novaArrayPalavra} palavras={palavras} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
      <Letras habilitarLetra={habilitarLetra} setHabilitarLetra={setHabilitarLetra} forcas={forcas} arrayPalavra={arrayPalavra} novaArrayPalavra={novaArrayPalavra} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
    </div>
  );
}


