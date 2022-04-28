import React, { useEffect } from 'react'

function UseEffectEx() {
    const [counter, setCounter] = React.useState(0)
    const [data, setData] = React.useState()

    useEffect(()=>{
        updateCounter()
        
    },[])

    const updateCounter= ()=>{
        console.log(counter)
    }
    return (
        <div>
             <p>Counter: {counter}</p>
             <button onClick={()=> setCounter(counter+1)}>Inc ctr</button>
        </div>
  )
}

export default UseEffectEx