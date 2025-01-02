import React, { createContext, useState } from 'react'
import ContextShown from './ContextShown';

export const UsersDetails = createContext();
 
function HookUseContext() {
    const [userIs , setUserIs] = useState([1,2,3,4]);
  return (
    <UsersDetails.Provider value={userIs}>
        <ContextShown/>
    </UsersDetails.Provider>
  )
}

export default HookUseContext