import "./App.scss";
import ReactFlowWorkField from "./Components/ReactFlowWorkField/ReactFlowWorkField";
import BottomBar from "./Components/BottomBar/BottomBar";

function App() {
  const generateCard = e => {
    console.log(e);
  };
  return (
    <div className="App">
      <div className="generate-button-div" onClick={generateCard}>
        <span>Generate</span>
      </div>
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
