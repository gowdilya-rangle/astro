import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidePanel from './components/SidePanel';
import {
  BrowserRouter as Router,
  Switch,
  HashRouter,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Dashboard from './components/Dashboard';




function App() {
  return (
    <Router basename="/">

      <SidePanel>
          {/* <div className="App-main"> */}
              <Switch>
                <Route exact path="/"  component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                {/* <Route path="/currency" component={Currency} /> */}
                {/* <Route path="/resume" component={Resume} />
                <Route path="/csv-viewer" component={CSVViewer} />
                <Route path="/csv-grapher" component={CSVGrapher} />
                <Route path="/tracking&traceability" component={Tnt} /> */}
                <Redirect to="/" />
              </Switch>
            {/* </div> */}
      </SidePanel>



    </Router>
  );
}

export default App;
