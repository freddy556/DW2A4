import { useState } from 'react'; 
//hook 
  
export function Counter() {
    const [counter,setCounter] = useState(0) 

    {/* counter[0] = counter
         counter[1] = setCounter*/}

    function increment(value) {
         setCounter(counter+1)
    }
    return(
         <div>
             <h2>{counter}</h2>
             <button type="button" onClick={increment}>Incrementar</button>
         </div>
    )
}