import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)
    // console.log(
        function HandelAdd(){
            const newCount = count +1
            setCount(newCount)
        }
 
    return (
<div>

<h1>Count:{count}</h1>
        <button onClick={HandelAdd}>Click Me</button>
</div>
        
    )

}

export default Counter