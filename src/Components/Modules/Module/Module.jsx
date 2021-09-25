import "./Module.scss";

export default function Module(props) {
  return (
    <div className="module-container">
      <span>{props.type}</span>
    </div>
  );
}
