export function Teclas ({valor, funcao , classe}){
    return (

        <button className={classe === 'numero' ? 'bg-gray-500 w-[4rem] h-[4rem] rounded-xl text-white font-bold' : 'bg-amber-600 w-[4rem] h-[4rem] rounded-xl text-white font-bold' } onClick={() => funcao(valor)}>{valor}</button>
    )
}


