import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  matchPath
} from "react-router-dom";
import LinkButton from './components/LinkButton';
import NotFound from './components/NotFound';
import SzafaA1 from './components/SzafaA1';
import SzafaA2 from './components/SzafaA2';
import SzafaA3 from './components/SzafaA3';
import SzafaA4 from './components/SzafaA4';
import SzafaA5 from './components/SzafaA5';
import SzafaA6 from './components/SzafaA6';
import SzafaA7 from './components/SzafaA7';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Link className='logo' to="/"/>
          <div style={{display:'flex'}}>         
            <LinkButton className='szafa_button' to="/A7"><p>Szafa A7</p></LinkButton>          
            <LinkButton className='szafa_button' to="/A6"><p>Szafa A6</p></LinkButton>
            <LinkButton className='szafa_button' to="/A5"><p>Szafa A5</p></LinkButton>
            <LinkButton className='szafa_button' to="/A4"><p>Szafa A4</p></LinkButton>
            <LinkButton className='szafa_button' to="/A3"><p>Szafa A3</p></LinkButton>
            <LinkButton className='szafa_button' to="/A2"><p>Szafa A2</p></LinkButton>
            <LinkButton className='szafa_button' to="/A1"><p>Szafa A1</p></LinkButton>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/A7" component={SzafaA7}/>
          <Route path="/A6" component={SzafaA6}/>
          <Route path="/A5" component={SzafaA5}/>
          <Route path="/A4" component={SzafaA4}/>
          <Route path="/A3" component={SzafaA3}/>
          <Route path="/A2" component={SzafaA2}/>
          <Route path="/A1" component={SzafaA1}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}