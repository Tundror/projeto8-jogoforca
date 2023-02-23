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
  const [erros, setErros] = useState(0)
  const [palavraFinal, setPalavraFinal] = useState(palavras[Math.floor(Math.random() * palavras.length)])
  const [palavraInicial, setPalavraInicial] = useState(palavras[Math.floor(Math.random() * palavras.length)])
  const [arrayPalavraFinal, setArrayPalavraFinal] = useState('')
  const [letrasClicadas, setLetrasClicadas] = useState([])
  const [ganhou, setGanhou] = useState(false)
  const [perdeu, setPerdeu] = useState(false)
  const [aparecerLetras, setAparecerLetras] = useState(false)
  const [resetar, setResetar] = useState(false)
  
  
  
  return (
    <div className="container">
      <Jogo resetar={resetar} setResetar={setResetar} aparecerLetras={aparecerLetras} setAparecerLetras={setAparecerLetras} ganhou={ganhou} setGanhou={setGanhou} perdeu={perdeu} setPerdeu={setPerdeu} letrasClicadas={letrasClicadas} setLetrasClicadas={setLetrasClicadas} arrayPalavraFinal={arrayPalavraFinal} setArrayPalavraFinal={setArrayPalavraFinal} palavraInicial={palavraInicial} setPalavraInicial={setPalavraInicial} palavraFinal={palavraFinal} setPalavraFinal={setPalavraFinal} forcas={forcas} palavras={palavras} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
      <Letras resetar={resetar} setResetar={setResetar} aparecerLetras={aparecerLetras} setAparecerLetras={setAparecerLetras} ganhou={ganhou} setGanhou={setGanhou} perdeu={perdeu} setPerdeu={setPerdeu} letrasClicadas={letrasClicadas} setLetrasClicadas={setLetrasClicadas} arrayPalavraFinal={arrayPalavraFinal} setArrayPalavraFinal={setArrayPalavraFinal} palavraInicial={palavraInicial} setPalavraInicial={setPalavraInicial} palavraFinal={palavraFinal} setPalavraFinal={setPalavraFinal} forcas={forcas} erros={erros} setErros={setErros} habilitarLetras={habilitarLetras} setHabilitarLetras={setHabilitarLetras}/>
    </div>
  );
}


