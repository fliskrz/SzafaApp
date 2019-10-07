import React from 'react';
import './App.css';
import Row from './components/Row';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className='szafa'>
          <div className="netscale">
            <Row/>
            <Row/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
