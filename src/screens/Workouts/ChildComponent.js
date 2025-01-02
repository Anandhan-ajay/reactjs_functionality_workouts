import React from 'react'

function ChildComponent({handleClick}) {
  return (
    <div>
        <button onClick={handleClick}>Add name</button>
    </div>
  )
}

export default ChildComponent