import './css/Square.css'
import { useState } from 'react'

let current_sinal = 'x'

function Square(){
    const [conteudo, setConteudo] = useState('')
    
    function click(){
        setConteudo(current_sinal)
        if(current_sinal === 'x'){
            current_sinal = 'o'
        }else{
            current_sinal = 'x'
        }
        
    }

    return(
        <button onClick={click} className="square">{conteudo}</button>
    );
}

export default Square