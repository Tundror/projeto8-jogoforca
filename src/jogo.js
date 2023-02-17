import forca0 from "./assets/forca0.png"
export default function Jogo(){
    return(
        <div className="containerJogo">
            <div className="containerForcaImg">
                <img src={forca0} alt="forca" className="forcaImg"></img>
            </div>
            <div className="containerBotaoJogo">
                <button className="escolherPalavra">Escolher Palavra</button>
            </div>
        </div>

    )
}