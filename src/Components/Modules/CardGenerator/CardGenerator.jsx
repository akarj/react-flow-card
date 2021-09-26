import React, { useRef, useState } from "react";
import { Handle } from "react-flow-renderer";
import "./CardGenerator.scss";

export default function CardGenerator() {
  const [color, setColor] = useState({});
  const [id, setId] = useState(3);

  const [modelIdArray, setModelIdArray] = useState(["M-1", "M-2"]);

  const changeHandler = e => {
    console.log("target", e.target);
    console.log("value", e.target.value);
  };

  const clickHandler = e => {
    console.log(e.params);
    console.log(modelIdArray);
    let l = setModelIdArray(prev => [...prev, `M-${id}`]);
    setId(prev => prev + 1);
    console.log("length", l);
  };

  return (
    <>
      <div className="card-container">
        <div className="header-div">
          <header>Card Generator</header>
        </div>
        <div className="color-input-div">
          <div className="background-color">
            <div className="header">Background color</div>
            <div className="value-input">
              <label htmlFor="bg-R" className="property-name">
                R
              </label>
              <input
                type="text"
                className="R"
                name="bg-R"
                id="bg-R"
                onChange={changeHandler}
                max="3"
              />

              <label htmlFor="bg-G" className="property-name">
                G
              </label>
              <input
                type="text"
                className="G"
                name="bg-G"
                id="bg-G"
                onChange={changeHandler}
                max="3"
              />

              <label htmlFor="bg-B" className="property-name">
                B
              </label>
              <input
                type="text"
                className="B"
                name="bg-B"
                id="bg-B"
                onChange={changeHandler}
                max="3"
              />
            </div>
          </div>
          <div className="text-color">
            <div className="header">Text color</div>
            <div className="value-input">
              <label htmlFor="text-R" className="property-name">
                R
              </label>
              <input
                className="R"
                type="text"
                name="text-R"
                id="text-R"
                max="3"
                onChange={changeHandler}
              />

              <label htmlFor="text-G" className="property-name">
                G
              </label>
              <input
                type="text"
                name="text-G"
                className="G"
                id="text-G"
                max="3"
                onChange={changeHandler}
              />

              <label htmlFor="text-B" className="property-name">
                B
              </label>
              <input
                type="text"
                name="text-B"
                className="B"
                id="text-B"
                max="3"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="add-input-button-div">
          <button onClick={clickHandler}>Add Input</button>
        </div>
        <div className="react-flow-handle-div">
          {/* {modelIdArray.map(id => {
          return (
            <div id={id} key={id}>
              {id}
            </div>
          );
        })} */}

          {/* <Handle
          id="H-1"
          type="target"
          position="left"
          style={{ backgroundColor: "#555" }}
          onConnect={params => console.log("handle onConnect", params)}
          // isConnectable={isConnectable}
        /> */}
        </div>
        {/* {modelIdArray.map(id => {
          return (
            <Handle
              key={`${id}`}
              id={`${id}`}
              type="target"
              targetHandle={`${id}`}
              position="left"
            >
              {console.log("Handle ", { id })}
            </Handle>
          );
        })} */}
      </div>
      <Handle
        type="target"
        position="left"
        id="a"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
        // isConnectable={isConnectable}
      />
      <Handle
        id="b"
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
        // isConnectable={isConnectable}
      />
      <Handle
        id="c"
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
        // isConnectable={isConnectable}
      />
    </>
  );
}
