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

    handleClick = () => {
        window.location.reload(true);
    }
    
    render() {
        if(this.state.closed){
            return null
        }else{
        return (
            <div>
                <div className='row'>
                    <p style={{width:'1034px', height:'120px'}}>{this.props.name}</p>
                    <div onClick={this.handleClick} style={styles}>X</div>
                    <Division nr={1}/>
                    <Division nr={2}/>
                    <Division nr={3}/>
                    <Division nr={4}/>
                    <Division nr={5}/>
                    <Division nr={6}/>
                    <Division nr={7}/>
                    <Division nr={8}/>
                    <Division nr={9}/>
                    <Division nr={10}/>
                    <Division nr={11}/>
                    <Division nr={12}/>
                    <Division nr={1}/>
                    <Division nr={2}/>
                    <Division nr={3}/>
                    <Division nr={4}/>
                    <Division nr={5}/>
                    <Division nr={6}/>
                    <Division nr={7}/>
                    <Division nr={8}/>
                    <Division nr={9}/>
                    <Division nr={10}/>
                    <Division nr={11}/>
                    <Division nr={12}/>
                </div>
            </div>
        
        )}
    }
}

export default Row;