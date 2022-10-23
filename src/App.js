import logo from "./logo.svg";
import "./App.css";

import { ThreadListContainer } from "./ThreadList";

function App() {
  return (
    <>
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
            s Learn React miyano
          </a>
        </header>
        <ThreadListContainer />
        <div>テスト</div>
      </div>
    </>
  );
}

export default App;
