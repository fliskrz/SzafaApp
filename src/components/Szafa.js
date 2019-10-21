import React from 'react';
import '../App.css';
import Netscale from './Netscale';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LinkButton from './LinkButton';

class Szafa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  render() {
      return (
        <div>
            TU BEDZIE STAŁA SZAFA
        </div>
      )
  }
}
export default Szafa;
