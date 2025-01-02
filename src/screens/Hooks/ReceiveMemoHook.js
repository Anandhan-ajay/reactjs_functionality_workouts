import React, { memo } from 'react'

function ReceiveMemoHook({todo}) {
    console.log("Received memo...");
  return (
    <div>
            {todo?.map((item,ind)=>{
                return(
                    <h3 key={ind}>
                        {item}
                    </h3>
                )
            })}
    </div>
  )
}

// export default memo (ReceiveMemoHook);
export default ReceiveMemoHook;