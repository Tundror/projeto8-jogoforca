
export default function Jogo(props){
    function escolherPalavra(){
        const palavra = props.palavras[Math.floor(Math.random() * props.palavras.length)];
        const arrayPalavra = palavra.split('');
        const novaArrayPalavra = arrayPalavra.map((p) => p="_")
        props.setArrayPalavraFinal(novaArrayPalavra)
        const alterar = false
        props.setHabilitarLetras(alterar)
        props.setAparecerLetras(true)
        props.setPalavraFinal(novaArrayPalavra.join(' '))
        props.setPalavraInicial(arrayPalavra)
        props.setErros(0)
        props.setGanhou(false)
        props.setPerdeu(false)
        props.setResetar(true)
        props.setLetrasClicadas("")
        console.log(arrayPalavra)
    }
    
    
    return(
        <div className="containerJogo">
            <div className="containerForcaImg">
                <img data-test="game-image" src={props.forcas[props.erros]} alt="forca" className="forcaImg"></img>
            </div>
            <div className="containerPalavraBotao">
                <div className="containerBotaoJogo">
                    <button data-test="choose-word" onClick={escolherPalavra} className="escolherPalavra">Escolher Palavra</button>
                </div>
                <div data-test="word" className={`containerPalavra ${props.aparecerLetras ? "" : "sumir"} ${props.ganhou ? "verde" : ""} ${props.perdeu ? "vermelho" : ""}`}>
                    {props.perdeu ? props.palavraInicial : props.palavraFinal}
                </div>
            </div>
        </div>

    )
}