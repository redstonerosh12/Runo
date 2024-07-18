import logo from './logo.svg';
import './App.css';
import {CardImage, CardView} from './CardView';


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

      <div className="card-container">
        <CardView cardName="BD2"/>
        <CardImage startX={0} startY={2925.5} viewWidth={409.6} viewHeight={585.1} imgCode={0} style={{margin: '0 10px'}}/>
        <CardImage startX={0} startY={0} viewWidth={409.6} viewHeight={585.1} imgCode={0} style={{margin: '0 10px'}}/>
        <CardImage startX={409.6} startY={0} viewWidth={409.6} viewHeight={585.1} imgCode={0} style={{margin: '0 10px'}}/>
      </div>
    </div>
  );
}

export default App;
