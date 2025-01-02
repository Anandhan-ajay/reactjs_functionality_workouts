import React, { useCallback, useState } from 'react'
import ReceivedCallback from './ReceivedCallback';

function HookUseCallBack() {
    const [count , setCount] = useState(0);
    const [todos , setTodos] = useState([]);

    const addCount = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(()=> {
        setTodos([...todos, "Anand"])
    },[todos])

  return (
    <div>
        <h3>UseCallback {count > 0 && count}</h3>
        <ReceivedCallback todos={todos} addTodo={addTodo}/>
        <button onClick={addCount}>Add count</button>
    </div>
  )
}

export default HookUseCallBack