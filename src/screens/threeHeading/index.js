import React, { useState } from 'react'

function WorkoutsOne() {
  const [heading , setHeading] = useState(0)
  const arr = ["Home" , "About", "Contact"];
  return (
    <div>
      {arr.map((header,index) => {
        return (
          <div key={index} onClick={()=>setHeading(index)}>
            <h1 style={{color : index === heading ? "red" : "black"}}>{header}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default WorkoutsOne