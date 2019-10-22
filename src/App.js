import React from 'react';
import './App.css';
import SzafaA7 from './components/SzafaA7';
import SzafaA6 from './components/SzafaA6';
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  history
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
          <Router>
            <header className='header'>
              <Link to='/'><div className='logo'></div></Link>
            </header>
            <div className='nav_top'>
                <LinkButton className='szafa_button' to='/A7'><p>Szafa A7</p></LinkButton>
                <LinkButton className='szafa_button' to='/A6'><p>Szafa A6</p></LinkButton> 
            </div>
            <Switch>
              <Route exact path='/'/>
              <Route exact path='/A7' component={SzafaA7}/>
              <Route exact path='/A6' component={SzafaA6}/>
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </div>
      )
  }
}
export default App;
