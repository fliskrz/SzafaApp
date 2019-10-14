import React from 'react';
import '../App.css';
import Division from './Division';

let styles = {
    width: '70px',
    height: '70px',
    fontSize: '40px'
}

class Row extends React.Component {

    state ={
        closed: false
    }


    //closing the row view (reloads the page)
    handleClick = () => {
        window.location.reload(true);
    }
    
    render() {
        let top = [],
            bot = [];
        for(let i=1; i<=12; i++){
            top.push(<Division row={'top'} file={this.props.file} segment_nr={this.props.nr} nr={i} key={i}/>);
            bot.push(<Division row={'bot'} file={this.props.file} segment_nr={this.props.nr} nr={i+12} key={i+12}/>);
        }

        if(this.state.closed){
            return null
        }else{
        return (
            <div>
                <div className='row'>
                    <div style={{width:'1034px', height:'170px'}}></div>
                    <h2 style={{width:'1034px', height:'auto'}}>{this.props.name}</h2>
                    <div onClick={this.handleClick} style={styles}>X</div>
                    {top}
                    {bot}
                </div>
            </div>
        
        )}
    }
}

export default Row;