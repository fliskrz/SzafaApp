import React from 'react';
import '../App.css';
import Netscale from './Netscale';
import Component1 from './Comp1';
import Component2 from './Comp2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  history
} from "react-router-dom";
import LinkButton from './LinkButton';

class SzafaA6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  render() {
      return (
        <div>
          <h2>TU BEDZIE STAŁA SZAFA A6</h2>
          <Router>          
                <div className='components_menu'>
                  <LinkButton to='/A6/component1'>Komponent1</LinkButton>
                  <LinkButton to='/A6/component2'>Komponent2</LinkButton>
                </div>
            <Switch>
              <Route path='/A6/component1' component={Component1}/>
              <Route path='/A6/component2' component={Component2}/>
            </Switch>
          </Router>
        </div>
      )
  }
}
export default SzafaA6;
