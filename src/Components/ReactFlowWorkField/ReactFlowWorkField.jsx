import "./ReactFlowWorkField.scss";
import { useState, useRef } from "react";
import { initialState } from "../../Components/Data/InitialState";
import ReactFlow, {
  removeElements,
  addEdge,
  // ReactFlowProvider,
  Controls,
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
[TODO]


@params :[modules]
   => 1. Image Module
    2. Text Module
    3. Card Module
    4. OutputModule


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

  const onConnect = params => setElements(els => addEdge(params, els));

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

  return (
    <div className="reactFlowWorkField-container" ref={reactFlowWrapper}>
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
        style={{ backgroundColor: "lightcoral" }}
        onElementsRemove={onElementsRemove}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
