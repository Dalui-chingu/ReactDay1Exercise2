
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Reference Data Types use same memory</h1>
       <button onClick={window['func']}>Click me</button>
      </header>
    </div>
  );
}

export default App;
