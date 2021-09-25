import "./Module.scss";

export default function Module(props) {
  console.log(props);
  return (
    <div className="module-container">
      <span>{props.type}</span>
    </div>
  );
}
