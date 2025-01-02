import React, { useState } from 'react'

function Workouts() {
  const [users , setUsers] = useState(["Anand"]);

  const ButtonHide = () => {
    setUsers((prevUsers) =>[...prevUsers, "Ajay"])
  }

  const handleClose = (index) => {
    console.log(index, "index...");
    let newUser = [...users];
    newUser.splice(index,1);
    console.log(newUser);
    setUsers(newUser);
    // setUsers((prevUser) => prevUser.filter((_,ind) => index !== ind))
  }
  return (
    <div>
      <h3>button tasks</h3>
      {users?.map((user,index)=>{
        return(
          <div key={index}>
            <h3>{user}</h3>
            {index === users.length - 1 &&
            <button onClick={handleAdd}>Add</button> }
            <button onClick={() => handleClose(index)}>Close</button>
          </div>
        )
      })}
    </div>
  )
}

export default ButtonHide