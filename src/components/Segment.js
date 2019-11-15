 import React from 'react';
import '../App.css';
import Row from './Row';

let styles = {
    width: '70px',
    height: '70px',
    fontSize: '40px',
    zIndex:10
}

class Segment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            disabled: false
        }

    }

    //this function pops out slots screen (24 slot buttons)
    handleClick = (e) => {
        let segments = e.currentTarget.parentElement.parentElement.querySelectorAll('.segment');
        segments.forEach((e) => {
            e.disabled = !this.state.disabled;
        })
        e.currentTarget.disabled = false;
        this.setState({
            open: !this.state.open,
            disabled: !this.state.disabled
        })          

    }

    render() {
        if(this.state.open){
            return (<>
                        <button onClick={this.handleClick} className='segment'>CLOSE</button>
                        <div>
                            <Row index={this.props.index} id={this.props.id} file={this.props.file} name={this.props.name} nr={this.props.nr}/>
                        </div>
                    </>
            )       
        }else{
            return <button onClick={this.handleClick} className='segment'>{this.props.name}</button>
        }
    }
}

export default Segment;