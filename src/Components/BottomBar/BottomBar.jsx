import "./BottomBar.scss";
import Module from "../Modules/Module/Module";

export default function BottomBar() {
  return (
    <div className="bottomBar-container">
      <div className="image-module">
        <Module key="Image Module" type="Image Module" />
      </div>
      <div className="text-module">
        <Module key="Text Module" type="Text Module" />
      </div>
      <div className="card-module">
        <Module key="Card Generator" type="Card Generator" />
      </div>
    </div>
  );
}
