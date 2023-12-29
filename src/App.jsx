import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterTwo from './CounterTwo'
import CountDown from './CountDown'


function App() {
  const [count, setCount] = useState(0)
  function HandelClick (){
    alert('Button Click Hoyaca')
  }

 

  return (
    <>
<div>
    <CountDown></CountDown>
</div>



    <Counter></Counter>
    <div className='counter'>
      <CounterTwo></CounterTwo>

    </div>
      <h1>React</h1>
      <button onClick={HandelClick}>Click Me</button>
      
    </>
  )
}

export default App
