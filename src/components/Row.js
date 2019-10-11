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
                    <h2 style={{width:'1034px', height:'120px'}}>{this.props.name}</h2>
                    <div onClick={this.handleClick} style={styles}>X</div>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={1}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={2}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={3}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={4}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={5}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={6}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={7}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={8}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={9}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={10}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={11}/>
                    <Division row={"top"} file={this.props.file} name={this.props.name} nr={12}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={13}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={14}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={15}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={16}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={17}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={18}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={19}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={20}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={21}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={22}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={23}/>
                    <Division row={"bot"} file={this.props.file} name={this.props.name} nr={24}/>
                </div>
            </div>
        
        )}
    }
}

export default Row;