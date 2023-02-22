export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="alfabeto">
            <div className="containerAlfabeto">
                {alfabeto.map((a) => <Alfabeto tracinho={props.tracinho} setTracinho={props.setTracinho} setHabilitarLetra={props.setHabilitarLetra} palavraInicial={props.palavraInicial} erros={props.erros} setErros={props.setErros} habilitarLetra={props.habilitarLetra} habilitarLetras={props.habilitarLetras} letra={a}/>)}
            </div>
        </div>
    )
}

function Alfabeto(props){
    function escolherLetra(){
        const alterar=true
        if(props.palavraInicial.includes(props.letra)){
            props.setHabilitarLetra(alterar)
            console.log(alterar)
        }
        else{
            const numErros = props.erros + 1;
            props.setErros(numErros);
            props.setHabilitarLetra(alterar)
            console.log(props.habilitarLetra)
        }
        
    }
    return(
            <div className={`containerLetra ${props.habilitarLetras ? "desabilitado" : ""}`}>
                <button onClick={escolherLetra} disabled={props.habilitarLetras ? true : false} className={`botaoLetra ${props.habilitarLetras ? "desabilitado" : props.habilitarLetra ? "desabilitado" : ""}`}>{props.letra}</button>
            </div>
    )
}