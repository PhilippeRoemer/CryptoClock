import './App.css';
import Clock from 'react-digital-clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tablet Clock - Testing</h1>
        <Clock format= {'hh-mm'} />
      </header>
    </div>
  );
}

export default App;
