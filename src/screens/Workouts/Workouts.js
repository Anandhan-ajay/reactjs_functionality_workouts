import React, { useEffect, useState } from 'react'

function Workouts() {
  const [usersLists , setUsersLists] = useState([]);
  const [newUser , setNewUser] = useState({_id :"",name :'', role:'', email:''});
  const [updateUser , setUpdateUser] = useState(false)
  const [loading , SetLoading] = useState(true)

  useEffect(() => {
      const fetchData = async() => {
        try {
          const fetchApi = await fetch("http://localhost:3030/api/crudappdb");
          const convertJson = await fetchApi.json();
          setUsersLists(convertJson.data)
          SetLoading(false)
          // console.log(convertJson , "convertJson");
        } catch (error) {
          console.log(error , "error");
        }
      }
      fetchData();
  },[]);

  // useEffect(()=>{
  //   handleDelete()
  // },[]);

  const addUser = async () => {
    if (
      newUser.name.trim() === "" ||
      newUser.role.trim() === "" ||
      newUser.email.trim() === ""
    ) {
      alert("Please fill out all fields");
      return;
    }
  
    if(!updateUser){
      try {
        const response = await fetch("http://localhost:3030/api/crudappdb", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(newUser), 
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log(result, "Response from API");
    
        setUsersLists((prevUsers) => [...prevUsers, newUser]);
        setNewUser({ name: "", role: "", email: "" });
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }else{
      try {
        console.log(newUser , "newUser put method");
        const response = await fetch("http://localhost:3030/api/crudappdb", {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(newUser), 
        });
        
        console.log(response , "response from API");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log(result, "Response from API");
    
        // setUsersLists((prevUsers) => [...prevUsers, newUser]);
        setUsersLists((prevUsers) =>
          prevUsers.map((user) =>
            user._id === newUser._id ? { ...user, ...result } : user
          )
        );
        setNewUser({ name: "", role: "", email: "" });
      } catch (error) {
        console.error("Error adding user:", error);
      }
      console.log("checkkkk");
    }

  };

  const handleDelete = async(user) => {
    console.log(user , "delete");
    const {_id} =  user
    try {
      const response = await fetch("http://localhost:3030/api/crudappdb", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id})
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result, "Response from DELETE API");
    
      setUsersLists((prevUsers) => prevUsers.filter((user) => user._id !== _id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  

  const editUser = (user) => {
    const { _id, name, email, role} = user;
    setNewUser({ _id, name,  email,role })
    console.log(newUser , "id...");
    setUpdateUser(true)
  }



  const handleChange = (e) => {
    const {name , value} = e.target;
    setNewUser({
      ...newUser,
      [name] : value
    })
  }

  if(loading) return <h3>Loading...</h3>
  return (
    <div>
      <h1>Crud App with backend</h1>
      <div>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChange} value={newUser.name}/>
        <br/>
        <label>Role</label>
        <input type='text' name='role' onChange={handleChange} value={newUser.role}/>
        <br/>
        <label>Email</label>
        <input type='text' name='email' onChange={handleChange} value={newUser.email}/>
        <br/>
        <button onClick={addUser}>{updateUser ? "Update user" : "Add user"}</button>
      </div>
      {usersLists?.length > 0 ? (
        usersLists?.map((user , index)=>{
          return(
            <div key={index}>
              <h3>{user?.name} ({user?.role}) ({user?.email})</h3>
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => handleDelete(user)}>Delete</button>
            </div>
          )
        })
      ) : (<p>No users found</p>) }
    </div>
  )
}

export default Workouts

//Clipboard
// import React, { useState } from 'react'

// function Workouts() {
//     const [copy , setCopy] = useState("");

//     const copyInputData = () => {
//       navigator.clipboard.writeText(copy)
//     }
//   return (
//     <div>
//       <h3>Copy clip board</h3>
//       <input type='text' onChange={(e) => setCopy(e.target.value)}/>
//       <button onClick={copyInputData}>Copy data</button>
//     </div>
//   )
// }

// export default Workouts


//Time
// import React, { useEffect, useState } from 'react'

// function Workouts() {
//   const [currentTime , setCurrentTime] = useState(new Date());
//   useEffect(()=> {
//     const timer = setInterval(()=>{
//         setCurrentTime(new Date());
//     },1000)

//     return () => clearInterval(timer)
//   },[])

//   const formatEndWithZero = (num) => {
//     return num < 10 ? `0${num}` : num
//   }

//   const formatHour = (hour) => {
//     return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
//   }

//   const formatDate = (date) => {
//     const options = {weekday : 'long', year : 'numeric',month : 'long', day :'numeric',}
//     return date.toLocaleDateString(undefined , options)
//   }

//  console.log(currentTime);
//   return (
//     <div>
//       <h3>Digital Clock</h3>
//       <h4>
//         {formatEndWithZero(formatHour(currentTime.getHours()))}
//         : {formatEndWithZero(formatHour(currentTime.getMinutes()))}
//         : {formatEndWithZero(formatHour(currentTime.getSeconds()))}
//         {currentTime.getHours() >= 12 ? "PM" : "AM"}
//         </h4>
//       <h4>{formatDate(currentTime)}</h4>
//     </div>
//   )
// }

// export default Workouts







// Pagination
// import React, { useEffect, useState } from 'react'

// function Workouts() {
//   const [data , setData] = useState([]);
//   const [loading , setLoading] = useState(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(10);

//   useEffect(()=>{
//     const fetchData = async() => {
//       try {
//         const getApi = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const response = await getApi.json();
//         setData(response)
//         setLoading(false)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchData();
//   },[]);

//   const indexOfLastPost = currentPage * postPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;

  
//   const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)
//   const totalPage = Math.ceil(data.length / postPerPage)

//   const paginate = (page) => setCurrentPage(page)

//   if(loading) return <h3>Loading...</h3>

//   return (
//     <div>
//       <h3>Simple Pagination</h3>
//       <ul>
//           {currentPost.map((item,ind)=>{
//             return(
//               <li key={item.id}>
//                {item.id} - {item.title}
//               </li>
//             )
//           })}
//       </ul>
//       <div>
//           <button onClick={()=>paginate(1)}>First</button>
//           <button disabled={currentPage == 1} onClick={()=>paginate(currentPage -1)}>Previous</button>
//           <button disabled={currentPage == totalPage} onClick={()=>paginate(currentPage +1)}>Next</button>
//           <button onClick={()=>paginate(totalPage)}>Last</button>
//       </div>
//     </div>
//   )
// }

// export default Workouts

// import { useState, useMemo } from "react";

// const Workouts = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//     console.log("increment...");
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//     console.log("Todo added...");
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//   }
//   return num;
// };

// export default Workouts









// import React, { useState } from 'react'

// function Workouts() {
//   const [usersLists , setUsersLists] = useState([]);
//   const [newUser , setNewUser] = useState({id:'',name:'', native:''});
//   const [editUser , setEditUser] = useState(false)

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setNewUser({
//       ...newUser, 
//       [name] : value
//     })
//   }

//   const handleAddUser = () => {
//     if(!editUser){
//       if(newUser.name.trim() ==='' || newUser.native.trim() === ''){
//         return 
//       }
  
//       const addUser = {
//         id : Date.now(),
//         name : newUser.name,
//         native : newUser.native
//       }
  
//       setUsersLists((prevUser) => [...prevUser, addUser])
//       setNewUser({name:'', native:''})
//     }else{
//       setUsersLists((prevUser) =>
//         prevUser.map((item)=>
//           item.id === newUser.id ? {...item, name : newUser.name, native : newUser.native} : item
//         )
//       )
//       setNewUser({name:'', native:''})
//     }

//   }

//   const handleEdit = (user) => {
//     setNewUser({id : user.id, name : user.name, native:user.native})
//     setEditUser(true)
//   }

//   const handleDelete = (userId) => {
//     const res = window.confirm("Are you sure you want to delete");

//     if(res){
//       setUsersLists((prevUser) => prevUser.filter(user => user.id !== userId))
//     }
//   }
//   return (
//     <div>
//       <h3>Crud App</h3>
//       <br/>
//       <label>Name : </label>
//       <input type='text' name='name' value={newUser.name} onChange={handleChange}/>
//       <br/>
//       <label>Native : </label>
//       <input type='text' name='native' value={newUser.native} onChange={handleChange}/>
//       <br/>
//       <button onClick={handleAddUser}>Add user</button>
//       <br/>
//       {usersLists?.map((user,index)=>(
//         <div key={index}>
//           <h5>{user.name} ({user.native})</h5>
//           <button onClick={()=>handleEdit(user)}>Edit</button>
//           <button onClick={() => handleDelete(user.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Workouts












// import React, { useState } from 'react'

// function Workouts() {
//   const [users , setUsers] = useState({
//     name : "Anandhan",
//     age : 26,
//     gender : "Male",
//     isMarried : true,
//     country : "India"
//   })

//   console.log(users.gender);
//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     console.log(value , "check");
//     setUsers({
//       ...users,
//       [name] : value
//     })
//   }
//   return (
//     <div>
//       <h1>Form handling</h1>
//       <table>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>{users.name}</td>
//           </tr>
//           <tr>
//             <td>Age</td>
//             <td>{users.age}</td>
//           </tr>
//           <tr>
//             <td>Gender</td>
//             <td>{users.gender}</td>
//           </tr>
//           <tr>
//             <td>Status</td>
//             <td>{users.isMarried ? "Married" : "Single"}</td>
//           </tr>
//           <tr>
//             <td>Country</td>
//             <td>{users.country}</td>
//           </tr>
//         </tbody>
//       </table>
//       <br/>
//       <label>Name </label>
//       <input placeholder='Enter your name' type='text' name='name' value={users.name}  onChange={handleChange}/>
//       <br/>
//       <label>Age </label>
//       <input placeholder='Enter your age' type='number' name='age' value={users.age} onChange={handleChange}/>
//       <br/>
//       <div>
//       <label>
//         <input type='radio' name='gender' checked={users.gender == "Male"} value="Male" onChange={handleChange}/>
//         Male
//       </label>
//       <label>
//         <input type='radio' name='gender' checked={users.gender == "Female"} value="Female" onChange={handleChange}/>
//         Female
//       </label>
//       </div>
//       <label>
//         <input type='checkbox' name='isMarried' checked={users.isMarried} value={users.isMarried} onChange={handleChange}/>
//         IsMarried
//       </label>
//       <div>
//         <label>Select country </label>
//         <select name='country' value={users.country} onChange={handleChange}>
//           <option value="India">India</option>
//           <option value="USA">USA</option>
//           <option value="Russia">Russia</option>
//         </select>
//       </div>
//       <br/>
//     </div>
//   )
// }

// export default Workouts

















// import React, { useState } from 'react';

// function Workouts() {
//     const [users, setUsers] = useState({
//         name: 'Anand',
//         gender: 'Male',
//         mobileNUmber: '9876543210',
//         country: 'India',
//         membership: true,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         setUsers((prevUsers) => ({
//             ...prevUsers,
//             [name]: type === 'checkbox' ? checked : value,  
//         }));
//     };

//     return (
//         <div>
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Name:</td>
//                         <td>{users.name}</td>
//                     </tr>
//                     <tr>
//                         <td>Gender:</td>
//                         <td>{users.gender}</td>
//                     </tr>
//                     <tr>
//                         <td>Mobile:</td>
//                         <td>{users.mobileNUmber}</td>
//                     </tr>
//                     <tr>
//                         <td>Country:</td>
//                         <td>{users.country}</td>
//                     </tr>
//                     <tr>
//                         <td>Membership:</td>
//                         <td>{users.membership ? 'Eligible' : 'Not eligible'}</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <label>Name: </label>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 value={users.name}
//                 onChange={handleChange}
//             />
//             <br />
//             <label>Gender: </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="Male"
//                     checked={users.gender === 'Male'}
//                     onChange={handleChange}
//                 />
//                 Male
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="gender"
//                     value="Female"
//                     checked={users.gender === 'Female'}
//                     onChange={handleChange}
//                 />
//                 Female
//             </label>
//             <br />
//             <label>Mobile: </label>
//             <input
//                 type="text"
//                 name="mobileNUmber"
//                 value={users.mobileNUmber}
//                 onChange={handleChange}
//             />
//             <br />
//             <label>
//                 Membership: 
//                 <input
//                     type="checkbox"
//                     name="membership"
//                     checked={users.membership}
//                     onChange={handleChange}
//                 />
//                 Eligible
//             </label>
//             <br />
//             <label>Country: </label>
//             <select name="country" value={users.country} onChange={handleChange}>
//                 <option value="India">India</option>
//                 <option value="China">China</option>
//                 <option value="America">America</option>
//                 <option value="Japan">Japan</option>
//             </select>
//         </div>
//     );
// }

// export default Workouts;
