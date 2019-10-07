import React from 'react';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
              <div className="slot">1</div>
              <div className="slot">2</div>
              <div className="slot">3</div>
              <div className="slot">4</div>
              <div className="slot">5</div>
              <div className="slot">6</div>
              <div className="slot">7</div>
              <div className="slot">8</div>
              <div className="slot">9</div>
              <div className="slot">10</div>
              <div className="slot">11</div>
              <div className="slot">12</div>
            </div>
        )
    }
}

export default Row;