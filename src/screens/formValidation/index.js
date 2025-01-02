import React, { useState } from "react";

function WorkoutsOne() {
  const [usersData, setUsersData] = useState({ name: "", email: "" });
  const [errorMessage, setErrorMessage] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Please enter a name";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Please enter an email";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email address";
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update input value
    setUsersData((prevData) => ({ ...prevData, [name]: value }));

    // Validate field and remove error message if input is correct
    const fieldError = validateField(name, value);
    setErrorMessage((prevErrors) => ({ ...prevErrors, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    // Validate all fields
    for (const field in usersData) {
      const fieldError = validateField(field, usersData[field]);
      if (fieldError) errors[field] = fieldError;
    }

    setErrorMessage(errors);

    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully:", usersData);
    }
  };

  return (
    <div>
      <h3>Form Validation</h3>

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={usersData.name}
          onChange={handleChange}
        />
        {errorMessage.name && <p style={{ color: "red" }}>{errorMessage.name}</p>}
        <br />

        {/* Email Input */}
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={usersData.email}
          onChange={handleChange}
        />
        {errorMessage.email && (
          <p style={{ color: "red" }}>{errorMessage.email}</p>
        )}
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WorkoutsOne;


// import React, { useState } from 'react'

// function WorkoutsOne() {
//   const [usersData , setUsersData] = useState({name:'', email:''});
//   const [shownError , setShownError] = useState({})

//   const handleChange = (e) => {
//     const {name , value} = e.target;
//     setUsersData({
//       ...usersData,
//       [name] : value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let error = {};

//     if(!usersData.name.trim()){
//       error.name = "Enter your name"
//     }

//     if(!usersData.email.trim()){
//       error.email = "Enter your email"
//     }

//     setShownError(error)

//     if(Object.keys(error).length === 0){
//       console.log("Form submitted successfully",usersData);
//     }
//   }
//   return (
//     <div>
//       <h3>Form validation</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Name : </label>
//         <input type='text' name='name' value={usersData.name} onChange={handleChange}/>
//         <br/>
//         {shownError.name && <p style={{color:'red'}}>* {shownError.name}</p>}
//         <br/>
//         <label>Email</label>
//         <input type='text' name='email' value={usersData.email} onChange={handleChange}/>
//         <br/>
//         {shownError.email && <p style={{color:'red'}}>* {shownError.email}</p>}
//         <br/>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default WorkoutsOne