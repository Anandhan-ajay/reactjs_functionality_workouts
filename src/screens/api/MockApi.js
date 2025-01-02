import React, { useEffect, useState } from 'react'

function MockApi() {
    const [users , setUsers] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    const res = async() => {
        try {
            const getApi = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersLists = await getApi.json();
            setUsers(usersLists)
            console.log(usersLists);
            setIsLoading(false)
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(()=>{
        res();
    },[])



  return (
    <div>
        <h3>Mock API</h3>
        {isLoading && <p>Loading...</p>}
        {users?.map((item,ind)=>{
            return(
                <div key={ind}>
                    <h3>{item.name}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default MockApi




// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function WorkoutsOne() {
//   const [data , setData] = useState([]);

//   useEffect(()=>{
//     fetchData()
//   },[])

//   const fetchData = async () => {
//     try {
//       await axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => console.log(response.data))
//       .catch((error) => console.log(error))
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   // fetch Method 1 
//   // useEffect(()=>{
//   //   getData();
//   // },[])

//   // const getData = async () => {
//   //   try {
//   //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   //     const res = await response.json();
//   //     console.log("Response",res);
//   //   } catch (error) {
//   //       console.log("Error : ", error.message);
//   //   }
//   // }

//   // fetch Method 2 
//   // useEffect(()=>{
//   //   const getApiData = async () => {
//   //     try {
//   //       const fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
//   //       const convertJson = await fetchData.json();
//   //       console.log(convertJson);
//   //     } catch (error) {
//   //       console.log(error.message);
//   //     }
//   //   }
//   //   getApiData();
//   // },[])
//   return (
//     <div>
//       <h1>Api workouts</h1>
//     </div>
//   )
// }

// export default WorkoutsOne