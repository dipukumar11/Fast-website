import { useState } from "react";

function CounterTwo(){
    const [Count, setCount]=useState(0)
    function ClickHandel(){
        const newCount = Count + 1;

           setCount(newCount)
    }

    function MinasClik (){
        const newset = Count -1;
        setCount(newset)
    }
    return (
        <div>
            <h1>Counter Two:{Count} </h1>
            <button onClick={ClickHandel}>COunt +</button>
            <button onClick={MinasClik}>বাদ দেন ভাই</button>




        </div>
    )

}

export default CounterTwo;