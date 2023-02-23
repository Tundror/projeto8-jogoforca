export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return(
        <div className="alfabeto">
            <div className="containerAlfabeto">
                {alfabeto.map((a) => <Alfabeto key={a} setHabilitarLetras={props.setHabilitarLetras} ganhou={props.ganhou} setGanhou={props.setGanhou} perdeu={props.perdeu} setPerdeu={props.setPerdeu} letrasClicadas={props.letrasClicadas} setLetrasClicadas={props.setLetrasClicadas} arrayPalavraFinal={props.arrayPalavraFinal} setArrayPalavraFinal={props.setArrayPalavraFinal} palavraFinal={props.palavraFinal} setPalavraFinal={props.setPalavraFinal} palavraInicial={props.palavraInicial} erros={props.erros} setErros={props.setErros} habilitarLetras={props.habilitarLetras} letra={a}/>)}
            </div>
        </div>
    )
}

function Alfabeto(props){
    function escolherLetra(){
        const alterar=true
        const clicada = [...props.letrasClicadas]
        clicada.push(props.letra)
        props.setLetrasClicadas(clicada)
        if(props.palavraInicial.includes(props.letra)){
            compararLetra(props.letra)
            console.log(props.arrayPalavraFinal)
            console.log(props.palavraInicial)
            if(props.arrayPalavraFinal == props.palavraInicial){
                console.log("ganhou!")
            }
        }
        else{
            const numErros = props.erros + 1;
            props.setErros(numErros);
            if(numErros === 6)
            {
                props.setPerdeu(true)
                props.setHabilitarLetras(true)
                console.log("perdeu!")
            }
        }
        
    }
    function compararLetra(l){
        const array = props.arrayPalavraFinal   
        for (let index = 0; index < array.length; index++) {
            const element = props.palavraInicial[index];
            if(element===l){
                array[index]=l
                
            }   
        }
        props.setArrayPalavraFinal(array)
        props.setPalavraFinal(array.join(' '))
    }
    return(
            <div className={`containerLetra ${props.habilitarLetras ? "desabilitado" : props.letrasClicadas.includes(props.letra) ? "desabilitado" : ""}`}>
                <button onClick={escolherLetra} disabled={props.habilitarLetras ? true : props.letrasClicadas.includes(props.letra) ? true : false} className={`botaoLetra ${props.habilitarLetras ? "desabilitado" : props.letrasClicadas.includes(props.letra) ? "desabilitado" : ""}`}>{props.letra}</button>
            </div>
    )
}