
export default function Jogo(props){
    function escolherPalavra(){
        const palavra = props.palavras[Math.floor(Math.random() * props.palavras.length)];
        const arrayPalavra = palavra.split('');
        const novaArrayPalavra = arrayPalavra.map((p) => p="_")
        props.setArrayPalavraFinal(novaArrayPalavra)
        const alterar = false
        props.setHabilitarLetras(alterar)
        props.setPalavraFinal(novaArrayPalavra.join(' '))
        props.setPalavraInicial(arrayPalavra)
        props.setErros(0)
        console.log(arrayPalavra)
    }
    
    
    return(
        <div className="containerJogo">
            <div className="containerForcaImg">
                <img src={props.forcas[props.erros]} alt="forca" className="forcaImg"></img>
            </div>
            <div className="containerPalavraBotao">
                <div className="containerBotaoJogo">
                    <button onClick={escolherPalavra} className="escolherPalavra">Escolher Palavra</button>
                </div>
                <div className={`containerPalavra ${props.habilitarLetras ? "sumir" : ""}`}>
                    {props.palavraFinal}
                </div>
            </div>
        </div>

    )
}