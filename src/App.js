import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";

import Navigation from "./components/Navigation";

import UseStateVsUseRef from './examples/UseStateVsUseRef'
import DOM from './examples/DOM'
import PreviousState from './examples/PreviousState'
import SetInterval from './examples/SetInterval'
import EventListener from './examples/EventListener'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          React <code>useRef</code> Examples
        </h1>
        <hr className="dropdown-divider" />
        <div>
          <Navigation />
        </div>
      </header>
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/usestate-vs-useref">
          <UseStateVsUseRef />
        </Route>
        <Route path="/dom">
          <DOM />
        </Route>
        <Route path="/previous-state">
          <PreviousState />
        </Route>
        <Route path="/set-interval">
          <SetInterval />
        </Route>
        <Route path="/event-listener">
          <EventListener />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Root;
