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
            open: false
        }

    }

    //this function pops out slots screen (24 slot buttons)
    handleClick = () => {
        this.setState({
            open: !this.state.open
        })          

    }

    render() {
        if(this.state.open){
            return (<>
                        {/* <div className='cover'></div> */}
                        <div onClick={this.handleClick} className='segment'>
                            <h2>CLOSE</h2>
                        </div>
                        <div>
                            <Row index={this.props.index} file={this.props.file} name={this.props.name} nr={this.props.nr}/>
                        </div>
                    </>
            )       
        }else{
            return <div onClick={this.handleClick} className='segment'><h2>{this.props.name}</h2></div>
        }
    }
}

export default Segment;