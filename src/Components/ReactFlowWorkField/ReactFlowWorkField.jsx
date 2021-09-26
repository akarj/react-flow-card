import "./ReactFlowWorkField.scss";
import { useState, useRef, useEffect } from "react";
import { initialState } from "../../Components/Data/InitialState";
import ReactFlow, {
  removeElements,
  addEdge,
  // ReactFlowProvider,
  Controls,
  Background,
  ReactFlowProvider,
  useStoreState,
} from "react-flow-renderer";
import TextNode from "../Modules/TextField/TextField";
import ImageNode from "../Modules/ImageField/ImageField";
import CardNode from "../Modules/CardGenerator/CardGenerator";
import OutNode from "../Modules/Outfield/Outfield";

const nodeTypes = {
  TextNode,
  ImageNode,
  CardNode,
  OutNode,
};

/*



*/

let text_id = 2;
let image_id = 2;
let card_id = 2;
const getId = type =>
  type === "TEXT"
    ? `text-${text_id++}`
    : type === "IMAGE"
    ? `image-${image_id++}`
    : `card-${card_id++}`;

export default function ReactFlowWorkField() {
  // [States]
  const [elements, setElements] = useState(initialState);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);

  // [Functions]
  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  useEffect(() => {
    const onChange = event => {
      setElements(els =>
        els.map(e => {
          return {
            ...e,
            data: {
              ...e.data,
            },
          };
        })
      );
    };
  }, []);
  const onConnect = params =>
    setElements(els => {
      console.log("params", params);
      console.log("els", els);
      return addEdge(params, els);
    });

  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));

  const onDrop = event => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements(es => es.concat(newNode));
  };

  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  const generateCard = e => {
    console.log(e);
  };

  return (
    <>
      <div className="generate-button-div">
        <label htmlFor="generate-button">
          <button name="generate-button" onClick={generateCard}>
            Generate
          </button>
        </label>
      </div>
      <div className="reactFlowWorkField-container" ref={reactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow
            onConnect={onConnect}
            elements={elements}
            nodeTypes={nodeTypes}
            snapToGrid={true}
            snapGrid={[20, 20]}
            defaultZoom={1.5}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onLoad={onLoad}
            style={{
              width: "99.8vw",
              // backgroundColor: "lightcoral",
              //  borderColor:"black",
              // borderWidth:"1px",
              border: "1px solid black",
            }}
            onElementsRemove={onElementsRemove}
          >
            <Controls />
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </>
  );
}
