import "./App.scss";
import ReactFlowWorkField from "./Components/ReactFlowWorkField/ReactFlowWorkField";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <ReactFlowWorkField />
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
