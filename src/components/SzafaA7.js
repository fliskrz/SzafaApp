import '../App.css';
import React, {Component, useState, useEffect} from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import axios from 'axios';
import ReactExport from 'react-export-excel';
import LinkButton from './LinkButton';
import Netscale from './Netscale';
import Netscale2 from './Netscale2';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;


class Export extends Component {

  state ={
    data: ''
  }

  componentWillMount () {
    axios.get(`http://localhost:3001/szafa/`)
      .then((res) => {
        this.setState({
          data:res.data
        })
      })
    }

  render() {
      if(this.state.data){
      return (
          <div>
              <ExcelFile element={<button>Download Data With Styles</button>}>
                  <ExcelSheet dataSet={this.state.data} name="Organization"/>
              </ExcelFile>
          </div>
      )}else{
        return <h1>dupa</h1>
      }
  }
}

export default function SzafaA7(props) {
    let { path, url } = useRouteMatch();
    const [data, setData] = useState('');

    
    useEffect(() => {
      axios.get(`http://localhost:3001/szafa/`)
          .then((res) => {
              setData(res.data);
          })
    },[])
  
    if(data){
    return (
      <div className='szafa'>
        <Export/>
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
    )}else{
      return <h1>DUPA</h1>
    }
    
  }