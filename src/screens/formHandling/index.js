import React, { useState } from "react";

function WorkoutsOne() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interest: "", // Single-select interest
    country:""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle single-selection checkbox
      setFormData({ ...formData, [name]: checked ? value : "" });
    } else {
      // Handle text and radio inputs
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Here is your form data");
    console.log("Here is the form data...", formData);
  };

  return (
    <div>
      <h3>Survey Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Gender: </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>Interest: </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Coding"
            checked={formData.interest === "Coding"}
            onChange={handleChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Music"
            checked={formData.interest === "Music"}
            onChange={handleChange}
          />
          Music
        </label>
        <label>
          <input
            type="checkbox"
            name="interest"
            value="Sports"
            checked={formData.interest === "Sports"}
            onChange={handleChange}
          />
          Sports
        </label>
        <br />
        <br />
        <label>Country :</label>
        <select name='country' value={formData.country} onChange={handleChange}>
        India 
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Russia">Russia</option>
      </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WorkoutsOne;
