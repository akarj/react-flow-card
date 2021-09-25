import { useState } from "react";
import "./TextField.scss";

export default function TextField() {
  const [text, setText] = useState("");
  const changeHandler = event => {
    setText(event.target.value);
  };
  return (
    <div className="textField-container">
      <div className="desc">
        <header>
          <h2>Text Field</h2>
        </header>
      </div>
      <div className="text-show-field">{text && <span>{text}</span>}</div>
      <div className="text-input-field">
        <input
          type="text"
          name="text"
          id="text"
          max="1000"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}
