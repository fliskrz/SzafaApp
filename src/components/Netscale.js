import React from 'react';
import '../App.css';
import Segment from './Segment';
import axios from 'axios';
import { resolve } from 'q';


class Netscale extends React.Component {

  state = {
    file: '',
    test: ''
  }

  componentDidMount () {

    axios.get(`http://localhost:3001/szafa/1/`)
      .then((res) => {
        this.setState({
          test: res.data
        })
      })
  }



    render() {

      if(this.state.test){
        let a_row = [],
            b_row = [],
            c_row = [],
            d_row = [];
            
        for(let i=0; i<5; i++){
          a_row.push(<Segment key={i} id={i*24} file={this.state.test} name={this.state.test.data[i*24][3].value}/>);
          b_row.push(<Segment key={i+5} id={(i+5)*24} file={this.state.test} name={this.state.test.data[(i+5)*24][3].value}/>);
          c_row.push(<Segment key={i+10} id={(i+10)*24} file={this.state.test} name={this.state.test.data[(i+10)*24][3].value}/>);
          d_row.push(<Segment key={i+15} id={(i+15)*24} file={this.state.test} name={this.state.test.data[(i+15)*24][3].value}/>);
        }

        return (
          <div className="netscale">
            <h2>Netscale</h2>
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
        return <h1>dadsadssfsdfsdgdgdfgdf</h1>
      }


      // if(this.state.file){
      //   let a_row = [],
      //       b_row = [],
      //       c_row = [],
      //       d_row = [];
        
      //   for(let i=0; i<5; i++){
      //       a_row.push(<Segment index={0} key={i} id={i*24} file={this.state.file} name={this.state.file[0].netscale[i].name} nr={this.state.file[0].netscale[i].nr}/>);
      //       b_row.push(<Segment index={0} key={i+5} id={(i+5)*24} file={this.state.file} name={this.state.file[0].netscale[i+5].name} nr={this.state.file[0].netscale[i+5].nr}/>);
      //       c_row.push(<Segment index={0} key={i+10} id={(i+10)*24} file={this.state.file} name={this.state.file[0].netscale[i+10].name} nr={this.state.file[0].netscale[i+10].nr}/>);
      //       d_row.push(<Segment index={0} key={i+15} id={(i+15)*24} file={this.state.file} name={this.state.file[0].netscale[i+15].name} nr={this.state.file[0].netscale[i+15].nr}/>);
      //   }
        

      //   return (
      //       <div className="netscale">
      //         <h2>Netscale</h2>
      //         <div className='container'>
      //           {a_row}
      //         </div>
      //         <div className='container'>
      //           {b_row}
      //         </div>
      //         <div className='container'>
      //           {c_row}
      //         </div>
      //         <div className='container'>
      //           {d_row}
      //         </div>            
      //       </div>
      //   )
      // }else{
      //   return <h2>Loading...</h2>
      // }
    }
}

export default Netscale;