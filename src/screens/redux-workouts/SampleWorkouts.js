import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, removeUser, updateUser } from '../../slices/userSlice';

function SampleWorkouts() {
    const [newUser , setNewUser] = useState({id:Date.now(),name : "", email:""});
    const [editUser , setEditUser] = useState(false);
    const usersListsIs = useSelector((state) => state.usersInfo.listsOfUsers);
    const dispatch = useDispatch();

    console.log(usersListsIs, "check its list of users", newUser);

    const handleChange = (e) => {
        const {name , value} = e.target;

        setNewUser({
            ...newUser,
            [name] : value
        })
    }

    const addUser = () => {
        if(!editUser){

            if(newUser.name.trim() && newUser.email.trim()){
                dispatch(addUsers(newUser))
                setNewUser({name : "", email:""})
            }else{
                alert("Please enter a name")
            }
        }else{
            dispatch(updateUser(newUser))
        }
    }

    const deleteUser = (userId) => {
        console.log(userId , "removing user....");
        dispatch(removeUser(userId))
    }

    const editUserFunction = (updateUserDetails) => {
        setNewUser(updateUserDetails)
        setEditUser(true)
        // dispatch(updateUser(userDetails))
    }
    return (
        <div>
            <label>Name : </label>
            <input type='text' name='name' value={newUser.name} onChange={handleChange}/>
            <br/>
            <br/>
            <label>Email : </label>
            <input type='text' name='email' value={newUser.email} onChange={handleChange}/>
            <br/>
            <br/>
            <button onClick={addUser}>{editUser ? "Update" : "Add"}</button>
            <br/>
            <br/>
            {usersListsIs?.map((user, index) => (
                <div key={index}>
                    <h3>{user.name} ({user.email})</h3>
                    <button onClick={()=>editUserFunction(user)}>Update</button>
                    <button onClick={()=>deleteUser(user.id)}>Remove</button>
                </div>
            ))}
            {!usersListsIs && <p>Loading users...</p>}
        </div>
    )
}

export default SampleWorkouts