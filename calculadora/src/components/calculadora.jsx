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


    function visualizarDigito (event){
        setEstado(event.target.value)
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
        <section>
            <Visor valor={estado.content}/>

            <section>
                <Teclas valor={'AC'} funcao={reset}></Teclas>
                <Teclas valor={'7'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'4'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'1'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'0'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'8'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'5'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'2'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'9'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'6'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'3'} funcao={adicionarDigito}></Teclas>
                <Teclas valor={'÷'} funcao={operacao}></Teclas>
                <Teclas valor={'x'} funcao={operacao}></Teclas>
                <Teclas valor={'-'} funcao={operacao}></Teclas>
                <Teclas valor={'+'} funcao={operacao}></Teclas>
                <Teclas valor={'='} funcao={resultado}></Teclas>

            </section>
        </section>
    )


}  
