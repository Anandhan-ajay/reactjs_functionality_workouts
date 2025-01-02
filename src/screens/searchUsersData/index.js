import React, { useState } from 'react'

function WorkoutsOne() {
    const [usersData , setUsersData] = useState([
        {
            name : "Anandhan",
            mobile : "8220872646",
            role : "MERN stack developer"
        },
        {
            name : "Bala",
            mobile : "34567890",
            role : "MEAN stack developer"
        },
        {
            name : "Zugir",
            mobile : "567890234",
            role : "Full stack developer"
        },
        {
            name : "Xavier",
            mobile : "87654321",
            role : "Golang developer"
        },
        {
            name : "Rubesh",
            mobile : "4567890987",
            role : "Php stack developer"
        },
        {
            name : "Calvin",
            mobile : "1234567654",
            role : "Angular developer"
        },
        {
            name : "Parthiban",
            mobile : "987654",
            role : "SEO developer"
        },
        {
            name : "Jack",
            mobile : "8765432",
            role : "zoho developer"
        },
        {
            name : "Yuvaraj",
            mobile : "987623",
            role : "React native developer"
        },
        {
            name : "Venky",
            mobile : "4567890",
            role : "Sql developer"
        }
    ])

    const [searchUser , setSearchUser] = useState("");

    const findUser = usersData.filter((user , ind)=>{
        const spaceIssues = searchUser.trim().toLowerCase()
        return user === "" ? user : user.name.toLowerCase().includes(spaceIssues)
                || user.role.toLowerCase().includes(spaceIssues)
                || user.mobile.includes(spaceIssues)
    // const searchQuery = searchUser.trim().toLowerCase();
    // if (searchQuery === "") return true; // Return all users if input is empty or spaces

    // return (
    //   user.name.toLowerCase().includes(searchQuery) ||
    //   user.role.toLowerCase().includes(searchQuery) ||
    //   user.mobile.includes(searchQuery)
    // );
    })
  return (
    <div>
        <h3>Search users entire lists</h3>
        <label>Search : </label>
        <input type='text' onChange={(e) => setSearchUser(e.target.value)}/>
        <br/>
        {findUser.length > 0 ? 
            (
                findUser.map((user,ind)=>{
                    return(
                        <div key={ind}>
                            <h3>({ind + 1}) : {user.name} ({user.role}) ({user.mobile})</h3>
                        </div>
                    )
                })
            )
            :
            (
                <h3>No users found</h3>
            )
        }
    </div>
  )
}

export default WorkoutsOne