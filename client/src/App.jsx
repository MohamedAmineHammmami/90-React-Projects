import React, { useState } from "react";
import "./App.css";
import { Eye, EyeOff, CircleOff, CircleCheckBig } from "lucide-react";
import {
  passSchema,
  initialConditions,
  genRandomPass,
  patterns,
} from "./utilis/passValidation.js";

function App() {
  const [revealPass, setRevealPass] = useState(true);
  const [password, setPassword] = useState("");
  const [conditions, setConditions] = useState(initialConditions);

  //password validation using yup package
  const yupPassValidation = async (e) => {
    const currentPass = e.target.value;
    setPassword(currentPass);
    try {
      await passSchema.validate(currentPass, {
        abortEarly: false,
      });
      setConditions((prev) =>
        prev.map((el) => {
          return { ...el, state: true };
        })
      );
    } catch (err) {
      if (err.name === "ValidationError") {
        const currentErr = err.errors;
        setConditions((prev) =>
          prev.map((el, i) =>
            currentErr.includes(`${el.id}`)
              ? { ...el, state: false }
              : { ...el, state: true }
          )
        );
      }
    }
  };
  //password validation using regex
  const regexPassValidation = (e) => {
    const currentPass = e.target.value;
    const regExp = [/^.{8,}$/, /[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
    setPassword(() => currentPass);
    setConditions((prev) =>
      prev.map((el, i) => {
        console.log(regExp[i]);
        return { ...el, state: regExp[i].test(currentPass) };
      })
    );
  };

  const handleRevealPass = () => {
    setRevealPass(!revealPass);
  };
  const handleGenPass = () => {
    setPassword(genRandomPass(12, patterns));
    setConditions((prev) => {
      return prev.map((el) => {
        return { ...el, state: true };
      });
    });
  };

  return (
    <div className="container">
      <h1>Password Validation</h1>
      <div className="inputContainer">
        <input
          type={revealPass ? "password" : "text"}
          placeholder="Enter your password"
          onChange={(e) => regexPassValidation(e)}
          value={password}
        />
        <div onClick={handleRevealPass}>
          {revealPass ? (
            <Eye color="white" size={24} />
          ) : (
            <EyeOff color="white" />
          )}
        </div>
      </div>

      <button className="genPassBtn" onClick={handleGenPass}>
        Generate Strong Password
      </button>

      {conditions.map((el) => {
        return (
          <div className="subSection" key={el.id}>
            {el.state ? (
              <>
                {" "}
                <CircleCheckBig size={23} color="#009200" />
                <span style={{ color: el.state ? "#009200" : "#921400" }}>
                  {el.err}
                </span>
              </>
            ) : (
              <>
                {" "}
                <CircleOff size={23} color="#921400" />
                <span>{el.err}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
