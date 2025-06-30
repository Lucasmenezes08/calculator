import { useState } from "react";
import { Visor } from "./visor";
import { Teclas } from "./teclas";

export function Calculadora (){
    const [estado , setEstado] = useState({
        content: '',
        prevnumber: null,
        operacao: null,
        limparDisplay: false
    })



    function adicionarDigito (digito){

        const deveLimpar = estado.limparDisplay || estado.content === '0';
        const valorAtual = deveLimpar ? '' : estado.content;
        const novoValorDisplay = valorAtual + digito;

        const novoDigito = setEstado({
            ...estado,
            content: novoValorDisplay,
            limparDisplay: false,
            
        })

        
    }


    function operacao (digitoOperacao){
        const valorAtual = parseFloat(estado.content);
        const valoranterior = parseFloat(estado.prevnumber)

        if (estado.prevnumber !== null && estado.operacao){

            const operacoes = {
            '+':(a , b)=>a + b,
            '-': (a , b)=> a - b,
            'x': (a , b)=>a * b,
            '÷': (a , b)=> a / b
            }

            const resultado = operacoes[estado.operacao](valoranterior, valorAtual);

            setEstado({
            ...estado,
            content: String(resultado),
            prevnumber: resultado,
            operacao: digitoOperacao,
            limparDisplay: true,

            })  
        }

        else{
             setEstado({
            ...estado,
            prevnumber:valorAtual,
            operacao: digitoOperacao,
            limparDisplay: true,

        })
        }


    }

    function resultado (){
        if (estado.operacao !== null && estado.prevnumber !== null){
            
        
        const operacoes = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,   
        'x': (a, b) => a * b,
        '÷': (a, b) => a / b,
        };
        
        const valorAtual = parseFloat(estado.content);
        const resultado = operacoes[estado.operacao](estado.prevnumber, valorAtual);

         setEstado({
            ...estado,
            content: String(resultado),
            prevnumber:null,
            operacao: null,
            limparDisplay: true,

        })
    }
    }

    function reset (){
        setEstado({
            ...estado,
            content: '0',
            prevnumber: null,
            operacao: null,
            limparDisplay: false
        })
    }


    return (
        <section className="w-[30%] h-[80vh] rounded-2xl bg-neutral-900 flex flex-col justify-center items-center">
            <Visor valor={estado.content}/>

            <section className="h-[50vh] w-full grid grid-cols-4 gap-2 justify-center px-10 mt-[2rem]">
                <Teclas valor={'AC'} funcao={reset} classe={'especial'}></Teclas>
                <Teclas valor={'÷'} funcao={operacao} classe={'operador'}></Teclas>
                <Teclas valor={'x'} funcao={operacao} classe={'operador'}></Teclas>
                <Teclas valor={'-'} funcao={operacao} classe={'operador'}></Teclas>
                <Teclas valor={'+'} funcao={operacao} classe={'operador'}></Teclas>
                <Teclas valor={'='} funcao={resultado} classe={'operador'}></Teclas>
                <Teclas valor={'9'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'8'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'7'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'6'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'5'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'4'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'3'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'2'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'1'} funcao={adicionarDigito} classe={'numero'}></Teclas>
                <Teclas valor={'0'} funcao={adicionarDigito} classe={'numero'}></Teclas>
              
              
                
               
               
                
            </section>
        </section>
    )


}  
