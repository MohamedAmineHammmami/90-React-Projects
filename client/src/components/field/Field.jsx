import React from "react";

function Field({ el, id, answer, setAnswer }) {
  const handleOnchange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <fieldset>
      <legend>
        <span>Options: {id + 1}</span>
      </legend>
      <input
        type="radio"
        value={el}
        onChange={(e) => handleOnchange(e)}
        checked={answer === el}
      />
      {el}
    </fieldset>
  );
}

export default Field;
