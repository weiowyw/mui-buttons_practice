import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
        <div>
      <Button variant="text" >Text</Button>
      <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </div>
        <div>
        <Button variant="text" disabled>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </div>
        <Button variant="text" loading>Text</Button>
    </div>
  );
}

export default App;
