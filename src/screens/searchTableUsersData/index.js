import React, { useState } from 'react'

function WorkoutsOne() {
  const [usersLists , setUsersLists] = useState([
    {
      id:1,
      name : "Anand",
      place : "Py"
    },
    {
      id:2,
      name : "John",
      place : "Cuddalore"
    },
    {
      id:3,
      name : "Pandi",
      place : "Chennai"
    },
    {
      id:4,
      name : "Ravi",
      place : "Trichy"
    },
    {
      id:5,
      name : "Vengat",
      place : "Salem"
    }
  ])

  const [searchUsers , setSearchUsers] = useState("");

  const findUsers = usersLists.filter((user,ind) => {
    const res = searchUsers.toLowerCase().trim()
    return user.name.toLowerCase().includes(searchUsers.toLowerCase().trim()) ||
           user.place.toLowerCase().includes(searchUsers.toLowerCase().trim()) ||
          //  searchUsers.includes(user.id)
          // user.id === Number(searchUsers)
          user.id.toString().includes(searchUsers)
           
  })

  return (
    <div>
      <h1>Search user table</h1>
      <label>Search user : </label>
      <input type='text' value={searchUsers} onChange={(e) => setSearchUsers(e.target.value)}/>
      <br/>
      <br/>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {findUsers?.map((user,ind) => {
            return(
              <tr key={ind}>
                <td style={{padding:"10px", textAlign:"center"}}>{user.id}</td>
                <td style={{padding:"10px", textAlign:"center"}}>{user.name}</td>
                <td style={{padding:"10px", textAlign:"center"}}>{user.place}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WorkoutsOne