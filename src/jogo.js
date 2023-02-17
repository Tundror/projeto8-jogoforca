import forca0 from "./assets/forca0.png"
export default function Jogo(props){
    function escolherPalavra(){
        const alterar = false
        props.setHabilitarLetras(alterar)
        console.log(alterar)
    }
    
    
    return(
        <div className="containerJogo">
            <div className="containerForcaImg">
                <img src={forca0} alt="forca" className="forcaImg"></img>
            </div>
            <div className="containerPalavraBotao">
                <div className="containerBotaoJogo">
                    <button onClick={escolherPalavra} className="escolherPalavra">Escolher Palavra</button>
                </div>
                <div className={`containerPalavra ${props.habilitarLetras ? "sumir" : ""}`}>
                    {props.novaArrayPalavra.join(' ')}
                </div>
            </div>
        </div>

    )
}