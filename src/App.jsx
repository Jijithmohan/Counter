import { useState } from 'react'

import './App.css'
import Counter from './Component/Counter'

function App() {
  const [count, setCount] = useState(0)
const OnIncrement = ()=>{

  (count<10) ? setCount(prev=> prev+1): alert('Count is limited upto 10')
  console.log(count);
}
  const OnDecrement=()=>{
    (count>0) ? setCount(prev=> prev-1): alert('Count is limited upto 0')
  }


  return (
    <>
    
        
       <Counter count={count} OnIncrement={OnIncrement} OnDecrement={OnDecrement} />
        
    </>
  )
}

export default App
