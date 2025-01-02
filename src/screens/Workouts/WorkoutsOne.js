import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WorkoutsOne() {
  const [usersData , setUsersData] = useState([]);
  const [searchUserData , setSearchUserData] = useState("")
  useEffect(()=> {
    const getApiData = async () => {
      try {
        const apiData = await axios.get("https://dummyjson.com/comments");
        const response = await apiData.data.comments;
        console.log(response , "response from api data");
        setUsersData(response)
      } catch (error) {
        console.log(error , "error from api data");
      }
    } 
    getApiData();
  },[])

  const findUsersLists = usersData.filter((user,ind) => {
    return user.body.toLowerCase().includes(searchUserData.toLowerCase())
  })

  console.log(findUsersLists , "findUsersLists from ...");

  console.log(usersData);
  return (
    <div>
      <h1>UsersData</h1>

      <label>Search users data : </label>
      <input type='text' value={searchUserData} onChange={(e) => setSearchUserData(e.target.value)}/>

      <br/>
      <br/>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>body</th>
            <th>likes</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr> */}
          {findUsersLists?.map((item,index)=>{
            return(
              <tr key={index}>
              <td style={{padding : '5px' , textAlign:"center"}}>{item.id}</td>
              <td style={{padding : '5px' , textAlign:"center"}}>{item.body}</td>
              <td style={{padding : '5px' , textAlign:"center"}}>{item.likes}</td>
              </tr>
            )
          })}
          {/* </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default WorkoutsOne