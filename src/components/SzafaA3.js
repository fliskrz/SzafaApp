import '../App.css';
import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import LinkButton from './LinkButton';

export default function SzafaA3() {
    let { path, url } = useRouteMatch();
  
    return (
      <div className='szafa'>
        <div className='szafa_menu'>
          <h2>A3</h2>
          {/* tu wrzucamy <LinkButton></LinkButton> */}
        </div>
        {/* tutaj <Switch>
                <Route></Route>
              </Switch> */}
      </div>
    );
  }