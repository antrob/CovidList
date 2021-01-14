import logo from './logo.svg';
import './App.css';

import RiscoInfo from './RiscoInfo'
import SelectConcelho from './SelectConcelho'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <SelectConcelho concelhos={[]} />
      <RiscoInfo nivelRisco="Moderado" casos="199" />
    </div>
  );
}

export default App;
