import React, { useState } from 'react'

function CrudApp() {
    const [usersLists , setUsersLists] = useState([
        {
            id:1,
            name : 'Anand',
            role : 'Front-end'
        },
        {
            id:2,
            name : 'Ajay',
            role : 'Full-stack'
        }
    ])
    const [newUsersLists , setNewUsersLists] = useState({id : '',name : '' , role : ''});
    const [editUsers , setEditUsers] = useState(false);
    const [errorShown , setErrorShown] = useState("");

    const handleUser = (e) => {
        const {name , value} = e.target;
        setNewUsersLists({
            ...newUsersLists,
            [name] : value
        })
    }

    const addUser = () => {
        let newError = {}

        if (newUsersLists.name.trim() === '') {
            newError.name = "Enter your name";
        }
        if (newUsersLists.role.trim() === '') {
            newError.role = "Enter your role";
        }

        if (Object.keys(newError).length > 0) {
            setErrorShown(newError);
            return;
        }
    
        setErrorShown({});
        if(!editUsers){
        const newUser = {
            id : Date.now(),
            name : newUsersLists.name,
            role : newUsersLists.role
        }
        setUsersLists((prevUser) => [...prevUser , newUser]);
        setNewUsersLists({name : '' , role:''});
        }else{
            setUsersLists((prevUser) =>
                prevUser?.map((user) =>
                    user.id === newUsersLists.id ? {...usersLists, id: newUsersLists.id,name: newUsersLists.name, role: newUsersLists.role} : user
                )
            )
            setNewUsersLists({name : '' , role:''});
            setEditUsers(false)
        }

    }

    const handleEdit = (userDetails) => {
        const {id , name, role} = userDetails;
        setNewUsersLists({id : id , name : name, role : role});
        setEditUsers(true)
    }
  return (
    <div>
        <h2>Crud App</h2>
        <label>User name : </label>
        <input type='text' name='name' value={newUsersLists.name} onChange={handleUser}/>
        <br/>
        <p style={{color:'red'}}>* {errorShown.name && errorShown.name}</p>
        <label>User role : </label>
        <input type='text' name='role' value={newUsersLists.role} onChange={handleUser}/>
        <br/>
        <p style={{color:'red'}}>* {errorShown.role && errorShown.role}</p>
        <button onClick={addUser}>{editUsers ? "Edit user" : "Add user"}</button>
        {usersLists?.length > 0 ? (
        usersLists?.map((user,ind)=>{
            return(
                <div key={ind}>
                    <h3>{user.name} ({user.role})</h3>
                    <button onClick={()=>handleEdit(user)}>Edit</button>
                    <button>Delete</button>
                </div>
            )
        })
    ) : (<p>No users found</p>)}
    </div>
  )
}

export default CrudApp