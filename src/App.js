import React from 'react';
import './App.css';
import Segment from './components/Segment';
import axios from 'axios';

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
          <div className='szafa'>
                  <div className="netscale">
                    <div className='container'>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[0].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[1].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[2].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[3].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[4].name}/>
                    </div>
                    <div className='container'>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[5].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[6].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[7].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[8].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[9].name}/>
                    </div>
                    <div className='container'>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[10].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[11].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[12].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[13].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[14].name}/>
                    </div>
                    <div className='container'>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[15].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[16].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[17].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[18].name}/>
                      <Segment file={this.state.file} name={this.state.file[0].netscale[19].name}/>
                    </div>            
                  </div>
                </div>
        </div>
      )
    }else{
      return <h2>Loading...</h2>
    }
  }
}

export default App;
