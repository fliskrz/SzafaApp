import React from 'react';
import './App.css';
import Segment from './components/Segment';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className='szafa'>
          <div className="netscale">
            <div className='container'>
              <Segment name='pewnie cos fajnego'/>
              <Segment/>
              <Segment/>
              <Segment/>
            </div>
            <div className='container'>
              <Segment/>
              <Segment/>
              <Segment/>
              <Segment/>
            </div>
            <div className='container'>
              <Segment/>
              <Segment/>
              <Segment/>
              <Segment/>
            </div>
            <div className='container'>
              <Segment/>
              <Segment/>
              <Segment/>
              <Segment/>
            </div>
            <div className='container'>
              <Segment/>
              <Segment/>
              <Segment/>
              <Segment/>
            </div>            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
