import '../App.css';
import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import LinkButton from './LinkButton';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export default function SzafaA6() {
  let { path, url } = useRouteMatch();

  return (
    <div className='szafa'>
      <div className='szafa_menu'>
        <h2>A6</h2>
        <LinkButton className='segment_1U' to={`${url}/component1`}>Komponent1</LinkButton>
        <LinkButton className='segment_1U' to={`${url}/component2`}>Komponent2</LinkButton>
      </div>
      <Switch>
        <Route path={`${path}/component1`} component={Comp1}/>
        <Route path={`${path}/component2`} component={Comp2}/>
      </Switch>
    </div>
  );
}