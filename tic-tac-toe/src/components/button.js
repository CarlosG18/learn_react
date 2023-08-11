import './button.css'
import { useState } from 'react'

function Button(){
    const [cont, setCount] = useState(0)

    function click(){
        setCount(cont + 1)
    }

    return(
        <button onClick={click} className="btn">
            click {cont} here
        </button>
    );
}

export default Button;