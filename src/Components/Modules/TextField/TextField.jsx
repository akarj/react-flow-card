import { useState, memo } from "react";
import "./TextField.scss";
import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  const [text, setText] = useState("");
  const changeHandler = event => {
    setText(event.target.value);

    let newData = { ...data, text };
    data = newData;
  };
  return (
    <div className="textField-container">
      {console.log(data)}
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
      <Handle className="nodeOut" type="source" position="right" />
    </div>
  );
});
