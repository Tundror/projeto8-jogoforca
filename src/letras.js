export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="alfabeto">
            <div className="containerAlfabeto">
                {alfabeto.map((a) => <Alfabeto erros={props.erros} setErros={props.setErros} habilitarLetras={props.habilitarLetras} letra={a}/>)}
            </div>
        </div>
    )
}

function Alfabeto(props){
    function escolherLetra(){
        
        const numErros = props.erros + 1;
        props.setErros(numErros);
        console.log(numErros)
    }
    return(
            <div className={`containerLetra ${props.habilitarLetras ? "desabilitado" : ""}`}>
                <button onClick={escolherLetra} disabled={props.habilitarLetras} className={`botaoLetra ${props.habilitarLetras || props.habilitarLetra ? "desabilitado" : ""}`}>{props.letra}</button>
            </div>
    )
}