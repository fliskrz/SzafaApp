import React from 'react';
import './App.css';
import Szafa from './components/Szafa';
import Netscale from './components/Netscale';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LinkButton from './components/LinkButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  render() {
      return (
        <div className="App">
          <header className='header'>
            <div className='logo'></div>
          </header>
          <Router>
            <div>
              <LinkButton to='/A7'>Szafa A7</LinkButton> 
              <div>
                <LinkButton to='/A7/netscale'>Netscale</LinkButton>
                <LinkButton to='/A7/netscale2'>Netscale2</LinkButton>
              </div>
              <Switch>
                <Route exact path='/A7' component={Szafa}/>
                <Route exact path='/A7/netscale' component={Netscale}/>
                <Route exact path='/A7/netscale2' component={Netscale}/>
              </Switch>
            </div>
          </Router>
        </div>
      )
  }
}
export default App;
