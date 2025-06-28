export function Teclas ({valor, funcao}){
    return (
        <button onClick={() => funcao(valor)}>{valor}</button>
    )
}


