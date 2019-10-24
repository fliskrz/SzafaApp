import '../App.css';
import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import LinkButton from './LinkButton';
import Netscale from './Netscale';
import Netscale2 from './Netscale2';

export default function SzafaA7() {
    let { path, url } = useRouteMatch();
  
    return (
      <div className='szafa'>
        <div className='szafa_menu'>
          <h2>A7</h2>
          <LinkButton className='segment_3U' to={`${url}/netscale`}>Netscale</LinkButton>
          <LinkButton className='segment_3U' to={`${url}/netscale2`}>Netscale2</LinkButton>
        </div>
        <Switch>
          <Route path={`${path}/netscale`} component={Netscale}/>
          <Route path={`${path}/netscale2`} component={Netscale2}/>
        </Switch>
      </div>
    );
  }