import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    listsOfUsers : [
        {
            id : 1,
            name : "John",
            email : "john@example.com"
        },
        {
            id : 2,
            name : "Mani",
            email : "mani@example.com"
        },
        {
            id : 3,
            name : "Smith",
            email : "smith@example.com"
        },
        {
            id : 4,
            name : "sethu",
            email : "sethu@example.com"
        },
    ]
}


// console.log(initialState.listsOfUsers , "listsOfUsers from redux");
const usersLists = createSlice({
    name: "usersLists",
    initialState,
    reducers : {
        addUsers: (state, action) => {
            state.listsOfUsers.push(action.payload); 
        },
        removeUser : (state, action) => {
            state.listsOfUsers = state.listsOfUsers.filter((user,index)=>{
                return user.id !== action.payload
            })
        },
        updateUser : (state , action) => {
            state.listsOfUsers = state.listsOfUsers.map((user,index)=>{
                console.log(action.payload.id, action.payload , "confirmation...");
                return user.id === action.payload.id ? {...user, ...action.payload} : user
            })
        }
    }
})

export const {addUsers, removeUser,updateUser} = usersLists.actions
export default usersLists.reducer;