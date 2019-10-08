import React from 'react';
import './App.css';
import Segment from './components/Segment';
import data from './JSON/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: data
    }
  }

  

  render() {
    return (
      <div className="App">
        <div className='szafa'>
                <div className="netscale">
                  <div className='container'>
                    <Segment name={this.state.file.szafa[0].netscale[0].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[1].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[2].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[3].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[4].name}/>
                  </div>
                  <div className='container'>
                    <Segment name={this.state.file.szafa[0].netscale[5].name} />
                    <Segment name={this.state.file.szafa[0].netscale[6].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[7].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[8].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[9].name}/>
                  </div>
                  <div className='container'>
                    <Segment name={this.state.file.szafa[0].netscale[10].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[11].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[12].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[13].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[14].name}/>
                  </div>
                  <div className='container'>
                    <Segment name={this.state.file.szafa[0].netscale[15].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[16].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[17].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[18].name}/>
                    <Segment name={this.state.file.szafa[0].netscale[19].name}/>
                  </div>            
                </div>
              </div>
      </div>
    )
  }
}

export default App;
