import './App.css';
import Clock from 'react-digital-clock';
import axios from 'axios';

function App() {
  return (
    <div className="container">
        <div className="clock">
          <Clock format= {'hh-mm'} />
        </div>
    </div>
  );
}

export default App;
