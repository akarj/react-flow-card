import "./BottomBar.scss";
import Module from "../Modules/Module/Module";

export default function BottomBar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="bottomBar-container">
      <div
        className="image-module"
        onDragStart={e => onDragStart(e, "ImageNode")}
        draggable
      >
        <Module key="Image Module" type="Image Module" />
      </div>
      <div
        className="text-module"
        onDragStart={e => onDragStart(e, "TextNode")}
        draggable
      >
        <Module key="Text Module" type="Text Module" />
      </div>
      <div
        className="card-module"
        onDragStart={e => onDragStart(e, "CardNode")}
        draggable
      >
        <Module key="Card Generator" type="Card Generator" />
      </div>
    </div>
  );
}
