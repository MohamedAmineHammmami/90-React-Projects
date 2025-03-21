import React from "react";
import "./App.css";

function App() {
  return (
    <div className="formContainer">
      <h1>Form Submission</h1>
      <fieldset>
        <form>
          <label>First Name*</label>
          <input type="text" placeholder="Enter First Name" />
          <label>Last Name*</label>
          <input type="text" placeholder="Enter Last Name" />
          <label>Email*</label>
          <input type="text" placeholder="Enter Email" />
          <label>Contact*</label>
          <input type="text" placeholder="Enter Mobile Number" />
          <label>Gender*</label>
          <input type="radio" />
          Male
          <input type="radio" />
          Female
          <label>Your best Subject*</label>
          <input type="checkbox" />
          English
          <input type="checkbox" />
          Maths
          <input type="checkbox" />
          Physics
          <label>Upload Resume*</label>
          <input type="file" />
          <label>URL*</label>
          <input type="url" placeholder="Enter Url" />
          <label>Select your Choice</label>
          <select>
            <option disabled></option>
            <optgroup label="Front-End">
              <option>React Js</option>
              <option>Angular</option>
              <option>Vue</option>
            </optgroup>
            <optgroup label="Back-End">
              <option>Php</option>
              <option>Node js</option>
              <option>Java</option>
            </optgroup>
          </select>
          <label>About*</label>
          <textarea cols={55} rows={5} placeholder="About your self.." />
          <label>Submit OR Reset</label>
          <button>Reset</button>
          <button>Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
