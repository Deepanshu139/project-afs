import React , { useEffect,useState } from 'react'

export default function Counter() {
    const [count , setCount] = useState(0)
    const [secondCounter , setSecondCounter] = useState(100)
    useEffect(()=>{
        console.log("Mounting Phase.....")
        return function(){
            console.log("exit......")
        }
    },[])

    useEffect(()=>{
        console.log("Updating Phase.....")
    },[count,secondCounter])
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <h1>---------------------------------------------</h1>
            <h1>Secound Counter : {secondCounter}</h1>
            <button onClick={()=>{setSecondCounter(secondCounter+1)}}>+</button>
            <button onClick={()=>{setSecondCounter(secondCounter-1)}}>-</button>
            
        </div>
    )
}