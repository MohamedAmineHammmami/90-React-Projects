import React, { useState } from "react";
import "./App.css";

const initData = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender: "male",
  url: "",
  programingLang: "",
  about: "",
};
function App() {
  const [data, setData] = useState(initData);
  const [subject, setSubject] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  console.log(subject);
  const [resume, setResume] = useState("");
  console.log("resume", typeof resume);

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubjectchange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.checked });
  };
  const handleUploadFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume(file);
    }
  };
  console.log("data", data);
  const handleReset = () => {
    setData(initData);
  };
  const handleSubmit = () => {
    e.preventDefault();
    //send data via api
  };
  return (
    <div className="formContainer">
      <h1>Form Submission</h1>
      <fieldset>
        <form>
          <label htmlFor="firstNameId">First Name*</label>
          <input
            type="text"
            placeholder="Enter First Name"
            id="firstNameId"
            name="firstName"
            onChange={(e) => handleOnchange(e)}
            value={data.firstName}
          />
          <label htmlFor="lastNameId">Last Name*</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            id="lastNameId"
            name="lastName"
            onChange={(e) => handleOnchange(e)}
            value={data.lastName}
          />
          <label htmlFor="emailId">Email*</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="emailId"
            name="email"
            onChange={(e) => handleOnchange(e)}
            value={data.email}
          />
          <label htmlFor="contactId">Contact*</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            id="contactId"
            name="contact"
            onChange={(e) => handleOnchange(e)}
            value={data.contact}
          />
          <label htmlFor="genderId">Gender*</label>
          <input
            type="radio"
            checked={data.gender === "male"}
            onChange={(e) => handleOnchange(e)}
            name="gender"
            value="male"
          />
          Male
          <input
            type="radio"
            checked={data.gender === "female"}
            onChange={(e) => handleOnchange(e)}
            name="gender"
            value="female"
          />
          Female
          <label>Your best Subject*</label>
          <input
            type="checkbox"
            name="english"
            onChange={(e) => handleSubjectchange(e)}
          />
          English
          <input
            type="checkbox"
            name="maths"
            onChange={(e) => handleSubjectchange(e)}
          />
          Maths
          <input
            type="checkbox"
            name="physics"
            onChange={(e) => handleSubjectchange(e)}
          />
          Physics
          <label htmlFor="fileId">Upload Resume*</label>
          <input
            type="file"
            id="fileId"
            name="file"
            onChange={(e) => handleUploadFile(e)}
          />
          <label htmlFor="urlId">URL*</label>
          <input
            type="url"
            placeholder="Enter Url"
            id="urlId"
            name="url"
            onChange={(e) => handleOnchange(e)}
            value={data.url}
          />
          <label>Select your Choice</label>
          <select onChange={(e) => handleOnchange(e)} name="programingLang">
            <option>Programming Languages</option>
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
          <textarea
            rows={5}
            placeholder="About your self.."
            onChange={(e) => handleOnchange(e)}
            value={data.about}
          />
          <label>Submit OR Reset</label>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
