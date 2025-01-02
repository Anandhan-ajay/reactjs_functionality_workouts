import React, { useEffect, useRef, useState } from 'react'

function UseRefHook() {
  const inputRef = useRef(0);
  const handleRef = useRef(null);
  // Color 
  const colorRef1 = useRef(null);
  const colorRef2 = useRef(null);
  const colorRef3 = useRef(null);

  const handleClick = () => {
    inputRef.current ++
    handleRef.current.innerText = inputRef.current
  }
  const handleClickRef1 = () => {
    colorRef1.current.focus();
    colorRef1.current.style.backgroundColor = "Red"
    colorRef2.current.style.backgroundColor = ""
    colorRef3.current.style.backgroundColor = ""
  }
  const handleClickRef2 = () => {
    colorRef2.current.focus();
    colorRef2.current.style.backgroundColor = "green"
    colorRef1.current.style.backgroundColor = ""
    colorRef3.current.style.backgroundColor = ""
  }
  const handleClickRef3 = () => {
    colorRef3.current.focus();
    colorRef3.current.style.backgroundColor = "blue"
    colorRef1.current.style.backgroundColor = ""
    colorRef2.current.style.backgroundColor = ""
  }
  
  return (
    <div>
      <button onClick={handleClick}>Click <span ref={handleRef}>0</span></button>
      <br/>
      <input ref={colorRef1}/>
      <button onClick={handleClickRef1}>Click1</button>
      <br/>
      <input ref={colorRef2}/>
      <button onClick={handleClickRef2}>Click2</button>
      <br/>
      <input ref={colorRef3}/>
      <button onClick={handleClickRef3}>Click3</button>
      <br/>
    </div>
  )
}

export default UseRefHook