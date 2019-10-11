import React from 'react';
import '../App.css';
import Row from './Row';

class Segment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: <div onClick={this.handleClick} className='segment'>{this.props.name}</div>
        }

    }

    handleClick = () => {
        this.setState({
            result: <>
                        {/* <div className='cover'></div> */}
                        <div className='segment'>{this.props.name}</div>
                        <div>
                            <Row file={this.props.file} name={this.props.name}/>
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