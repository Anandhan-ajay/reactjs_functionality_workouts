import React, { useContext } from 'react'
import { UsersDetails } from './HookUseContext';

function ContextShown() {
    const getNumbers = useContext(UsersDetails);

    console.log(getNumbers , "getNumbers...");
  return (
    <div>
        <p>Context</p>
    </div>
  )
}

export default ContextShown