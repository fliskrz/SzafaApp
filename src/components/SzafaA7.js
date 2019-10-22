import React from 'react';
import '../App.css';
import Netscale from './Netscale';
import Netscale2 from './Netscale2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  history
} from "react-router-dom";
import LinkButton from './LinkButton';

class SzafaA7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  render() {
      return (
        <div>
          <h2>TU BEDZIE STAŁA SZAFA A7</h2>
          <Router>          
            <div className='components_menu'>
              <LinkButton to='/A7/netscale'>Netscale</LinkButton>
              <LinkButton to='/A7/netscale2'>Netscale</LinkButton>
            </div>
            <Switch>
              <Route path='/A7/netscale' component={Netscale}/>
              <Route path='/A7/netscale2' component={Netscale2}/>
            </Switch>
          </Router>
        </div>
      )
  }
}
export default SzafaA7;
