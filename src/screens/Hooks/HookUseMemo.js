import React, { useEffect, useMemo, useState } from 'react'

function HookUseMemo() {
    const [count , setCount] = useState(0);
    const [dark , setDark] = useState(false);

    const functionDelayed = useMemo(()=>{
        return slowFunction(count)
    },[count])

    const theme =  {
        backgroundColor : dark ? "red" : "#000",
        color : dark ? "#000" : "red"
    }

    // const theme = useMemo(()=>{
    //     return {
    //         backgroundColor : dark ? "red" : "#000",
    //         color : dark ? "#000" : "red"
    //     }
    // },[dark])

    useEffect(()=>{
        console.log("Theme override");
    },[dark])
  return (
    <div>
        <h1>Usememo</h1>
        <input
        type='number'
        value={count}
        onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => setDark(!dark)}>Toggle theme</button>
        <div style={theme}>
        {functionDelayed}
        </div>
    </div>
  )
}

export default HookUseMemo;


function slowFunction(num){
    console.log("slow function running");
    for (let i=0 ; i < 1000000000 ; i++){
    }
    return num * 10
}