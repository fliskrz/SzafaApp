import React from 'react';
import '../App.css';
import Row from './Row';

class Segment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: <div onClick={this.handleClick} className='segment'><h2>{this.props.name}</h2></div>
        }

    }


    //this function pops out slots screen (24 slot buttons)
    handleClick = () => {
        this.setState({
            result: <>
                        {/* <div className='cover'></div> */}
                        <div className='segment'><h2>{this.props.name}</h2></div>
                        <div>
                            <Row file={this.props.file} name={this.props.name} nr={this.props.nr}/>
                        </div>
                    </>
        })          

    }

    render() {
        return (
            <>
            {this.state.result}
            </>
        )
    }
}

export default Segment;