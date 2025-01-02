import React, {memo} from 'react'

function ReceivedCallback({todos , addTodo}) {
    console.log("child render...");
  return (
    <div>
        <h3>Received callback</h3>
        {todos?.map((item,ind)=>{
            return(
                <div key={ind}>
                    <h3>{item}</h3>
                </div>
            )
        })}
        <button onClick={addTodo}>Add todo</button>
    </div>
  )
}

export default ReceivedCallback;