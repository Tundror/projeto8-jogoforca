export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="alfabeto">
            <div className="containerAlfabeto">
                {alfabeto.map((a) => <Alfabeto letra={a}/>)}
            </div>
        </div>
    )
}

function Alfabeto(props){
    return(
            <div className="containerLetra">
                <button disabled className="botaoLetra">{props.letra}</button>
            </div>
    )
}