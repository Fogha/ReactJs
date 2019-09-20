import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Components/Layout/Navbar';
import Index from '../src/Components/Layout/Index';
import { Provider } from './context';
import Lyrics from './tracks/Lyrics';


function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>

          <div className="container">
            <Switch>
              <Route exact path = "/" component={Index}/>
              <Route exact path = "/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
