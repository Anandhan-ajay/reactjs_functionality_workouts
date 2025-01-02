import React, { useState } from 'react'

function PasswordGenerator() {
  const [ length , setLength] = useState(8);
  const [ includeUpperCase , setIncludeUpperCase] = useState(true);
  const [ includeLowerCase , setIncludeLowerCase] = useState(true);
  const [ includeNumber , setIncludeNumber] = useState(true);
  const [ includeSymbol , setIncludeSymbol] = useState(true);
  const [ password , setPassword] = useState("");

  const generatePassword = () => {
    let charSet = "";
    if(includeUpperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLowerCase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumber) charSet += "0123456789";
    if(includeSymbol) charSet += "!@#$%^&*()_-=+";
    let generatePassword = "";
    for (let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * charSet.length)
      generatePassword += charSet[randomIndex]
    }
   setPassword(generatePassword);
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password)
  }
  return (
    <div>
      <h3>Strong password generator</h3>
      <div>
        <h4>Password length :</h4>
        <input type='number' value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
      </div>
      <div>
        <input type='checkbox' checked = {includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)}/>
        <label>Upper case</label>
      </div>
      <div>
        <input type='checkbox' checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)}/>
        <label>Lower case</label>
      </div>
      <div>
        <input type='checkbox' checked = {includeNumber} onChange={(e) => setIncludeNumber(e.target.checked)}/>
        <label>Number</label>
      </div>
      <div>
        <input type='checkbox' checked = {includeSymbol} onChange={(e) => setIncludeSymbol(e.target.checked)}/>
        <label>Symbol</label>
      </div>
      <button onClick={generatePassword}>Generate password</button>
      <div>
        <input type='text' readOnly value={password}/>
        <button onClick={copyToClipBoard}>Copy</button>
      </div>
    </div>
  )
}

export default PasswordGenerator