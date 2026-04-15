
import './App.css';
import TestComponent from "./components/TestComponent";

const Comp = () => {
  return <p>This is a comp component</p>
}

function App() {
  return (
    <div className="App" id='root'>
      <TestComponent />
    </div>
  );
}

export default App;
