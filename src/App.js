import React from 'react';
import './App.css';
import axios from 'axios';
import Netscale from './components/Netscale';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    }
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/szafa/1`)
      .then((res) => {
        this.setState({
          file:res.data
        })
      })
  }

  render() {
    if(this.state.file){
      return (
        <div className="App">
          <header className='header'>
            <div className='logo'></div>
          </header>
          <div className='szafa'>
            <Netscale file={this.state.file}/>
          </div>
        </div>
      )
    }else{
      return <h2>Loading...</h2>
    }
  }
}
export default App;
