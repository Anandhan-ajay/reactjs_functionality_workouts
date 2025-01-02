import React, { useState } from "react";

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
              <th style={{padding:2}}>Name</th>
              <th style={{padding:2}}>Place</th>
              <th style={{padding:2}}>Id</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user,ind) => {
              return(
                <tr key={ind}>
                  <td style={{padding:2}}>{user.name}</td>
                  <td style={{padding:2}}>{user.place}</td>
                  <td style={{padding:2}}>{user.employe_id}</td>
                </tr>
              )
            })}
          </tbody>
      </table>
    </div>
  );
}

export default WorkoutsOne;
