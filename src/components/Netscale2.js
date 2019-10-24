import React from 'react';
import '../App.css';
import Segment from './Segment';
import axios from 'axios';


class Netscale extends React.Component {

  state = {
    file: ''
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/szafa/2`)
      .then((res) => {
        this.setState({
          file:res.data
        })
      })
  }

    render() {

      if(this.state.file){
        let a_row = [],
            b_row = [],
            c_row = [],
            d_row = [];
        
        for(let i=0; i<5; i++){
            a_row.push(<Segment index={1} key={i} file={this.state.file} name={this.state.file[1].netscale[i].name} nr={this.state.file[1].netscale[i].nr}/>);
            b_row.push(<Segment index={1} key={i+5} file={this.state.file} name={this.state.file[1].netscale[i+5].name} nr={this.state.file[1].netscale[i+5].nr}/>);
            c_row.push(<Segment index={1} key={i+10} file={this.state.file} name={this.state.file[1].netscale[i+10].name} nr={this.state.file[1].netscale[i+10].nr}/>);
            d_row.push(<Segment index={1} key={i+15} file={this.state.file} name={this.state.file[1].netscale[i+15].name} nr={this.state.file[1].netscale[i+15].nr}/>);
        }
        

        return (
            <div className="netscale">
              <h2>Netscale 2</h2>
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
      }else{
        return <h2>Loading...</h2>
      }
    }
}

export default Netscale;