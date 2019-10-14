import React from 'react';
import '../App.css';
import Segment from './Segment';

class Netscale extends React.Component {
    render() {

        let a_row = [],
            b_row = [],
            c_row = [],
            d_row = [];
        
        for(let i=0; i<5; i++){
            a_row.push(<Segment key={i} file={this.props.file} name={this.props.file[0].netscale[i].name} nr={this.props.file[0].netscale[i].nr}/>);
            b_row.push(<Segment key={i+5} file={this.props.file} name={this.props.file[0].netscale[i+5].name} nr={this.props.file[0].netscale[i+5].nr}/>);
            c_row.push(<Segment key={i+10} file={this.props.file} name={this.props.file[0].netscale[i+10].name} nr={this.props.file[0].netscale[i+10].nr}/>);
            d_row.push(<Segment key={i+15} file={this.props.file} name={this.props.file[0].netscale[i+15].name} nr={this.props.file[0].netscale[i+15].nr}/>);
        }
        

        return (
            <div className="netscale">
              <div className='container'>
                {a_row}
              </div>
              <div className='container'>
                {b_row}
              </div>
              <div className='container'>
                {c_row}
              </div>
              <div className='container'>
                {d_row}
              </div>            
            </div>
        )
    }
}

export default Netscale;