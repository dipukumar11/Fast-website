import { useState } from "react"

function CountDown(){
    const [count, setCount]= useState(0)
   function ClickHandel1(){
    const newCount = count +1
    setCount(newCount)

   }
   function ClickHandel (){
    const minasCount = count -1;
    setCount(minasCount)
   }



    return(
        <div>
            <h1>Plz Count ID:{count} </h1>
            <button onClick={ClickHandel1}>Count+</button>
            <button onClick={ClickHandel}>Count -</button>
        </div>
    )
}

export default CountDown