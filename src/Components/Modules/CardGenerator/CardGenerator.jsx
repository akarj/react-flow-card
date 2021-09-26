import React, { useState } from "react";
import { Handle } from "react-flow-renderer";

export default function CardGenerator() {
  const [color, setColor] = useState({});
  const [modelCount, setModelCount] = useState(1);

  const changeHandler = e => {
    console.log(e);
  };

  return (
    <div className="card-container">
      <div className="header-div">
        <header>
          <h2>Card Generator</h2>
        </header>
      </div>
      <div className="color-input-div">
        <div className="background-color">
          <div className="header">Background color</div>
          <div className="value-input">
            <label htmlFor="bg-R" className="property-name">
              R
            </label>
            <input type="text" name="bg-R" id="bg-R" onChange={changeHandler} />

            <label htmlFor="bg-G" className="property-name">
              G
            </label>
            <input type="text" name="bg-G" id="bg-G" onChange={changeHandler} />

            <label htmlFor="bg-B" className="property-name">
              B
            </label>
            <input type="text" name="bg-B" id="bg-B" onChange={changeHandler} />
          </div>
        </div>
        <div className="text-color">
          <div className="header">Text color</div>
          <div className="value-input">
            <label htmlFor="text-R" className="property-name">
              R
            </label>
            <input
              type="text"
              name="text-R"
              id="text-R"
              onChange={changeHandler}
            />

            <label htmlFor="text-G" className="property-name">
              G
            </label>
            <input
              type="text"
              name="text-G"
              id="text-G"
              onChange={changeHandler}
            />

            <label htmlFor="text-B" className="property-name">
              B
            </label>
            <input
              type="text"
              name="text-B"
              id="text-B"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div>
          <div className="header"></div>
          <div className="value-input"></div>
        </div>
      </div>
      <div className="add-input-button-div">
        <button>Add Input</button>
      </div>
      <Handle
        type="target"
        position="left"
        style={{ backgroundColor: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
        // isConnectable={isConnectable}
      />
    </div>
  );
}
