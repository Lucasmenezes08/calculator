import { useState } from 'react'
import './styles/App.css'
import { Calculadora } from './components/calculadora'


function App() {
    return (
      <section className='w-full h-screen flex items-center justify-center bg-gray-950'>
         <Calculadora/>
      </section>
    )
     
    
}

export default App
