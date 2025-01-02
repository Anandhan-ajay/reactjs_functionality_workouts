import React, { useEffect, useState } from "react";

function WorkoutsOne() {
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "Anand",
      place: "Puducherry",
      employe_id: "001",
    },
    {
      id: 2,
      name: "Ravi",
      place: "Chennai",
      employe_id: "002",
    },
    {
      id: 3,
      name: "Kumar",
      place: "Bangalore",
      employe_id: "003",
    },
  ]);

  const [getApiData , setGetApiData] = useState([]);

  useEffect(()=>{
    const fetchApi = async() => {
      try {
        const apiData = await fetch("https://jsonplaceholder.typicode.com/users");
        const convertJson = await apiData.json();
        setGetApiData(convertJson)
      } catch (error) {
        console.log(error , "error from api...");
      }
    }

    fetchApi();
  },[])


  console.log(getApiData , "getApiData");
  return (
    <div>
      <h3>Table Forming</h3>
      <table border="1" className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Place</th>
            <th className="p-2">Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={user.id || index}>
              <td className="p-2 text-center">{user.name}</td>
              <td className="p-2 text-center">{user.place}</td>
              <td className="p-2 text-center">{user.employe_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Again</h3>
      <table border="1">
        <thead>
          <tr>
            <th style={{padding:10}}>Id</th>
            <th style={{padding:10}}>Name</th>
            <th style={{padding:10}}>Place</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td style={{padding:2}}>Anand</td>
            <td style={{padding:2, textAlign:'center'}}>Py</td>
            <td style={{padding:2, textAlign:'center'}}>001</td>
          </tr>
          <tr>
            <td style={{padding:2}}>Manoj</td>
            <td style={{padding:2, textAlign:'center'}}>Py</td>
            <td style={{padding:2, textAlign:'center'}}>001</td>
          </tr>
          <tr>
            <td style={{padding:2}}>Kanth</td>
            <td style={{padding:2, textAlign:'center'}}>Py</td>
            <td style={{padding:2, textAlign:'center'}}>001</td>
          </tr> */}
          {getApiData.map((user,index)=>{
            return(
              <tr key={user.id || index}>
                <td style={{padding:10 , textAlign:'center'}}>{user.id}</td>
                <td style={{padding:10 , textAlign:'center'}}>{user.name}</td>
                <td style={{padding:10 , textAlign:'center'}}>{user.username}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutsOne;






// import React, { useEffect, useState } from 'react'

// function WorkoutsOne() {

//   const [usersData , setUsersData] = useState([])

//   useEffect(()=> {
//     const getApiData = async() => {
//       try{
//         const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
//         const convertJson = await fetchData.json();
//         console.log(convertJson);
//         setUsersData(convertJson)
//       }catch (error){
//         console.log(error , "error");
//       }
//     }

//     getApiData()
//   },[])

//   if(!usersData) return <h3>Loading...</h3>
  
//   return (
//     <div>
//       <h3>Table forming</h3>
//       {usersData.length > 0 ? 
//       (
//         <table border="1">
//           <thead>
//             <tr>
//               <th  style={{padding:"3px" ,textAlign:"center"}}>Id</th>
//               <th  style={{padding:"3px" ,textAlign:"center"}}>Name</th>
//               <th  style={{padding:"3px" ,textAlign:"center"}}>Zip-code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usersData.map((user,ind) => {
//               return(
//                 <tr key={ind}>
//                   <td style={{padding:"10px" ,textAlign:"center"}}>{user?.id}</td>
//                   <td style={{padding:"10px" ,textAlign:"center"}}>{user?.name}</td>
//                   <td style={{padding:"10px" ,textAlign:"center"}}>{user?.address?.zipcode}</td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       ) : 
//       (
//         <p>No user found.</p>
//       )}
//     </div>
//   )
// }

// export default WorkoutsOne
