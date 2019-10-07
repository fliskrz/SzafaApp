import React from 'react';
import '../App.css';

class Division extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'data',
            big_data: 'big_data'
        }
    }

    handleHover = () => {
        this.setState({
            data: 'data visible'
        })
    }

    handleOut = () => {
        this.setState({
            data: 'data'
        })
    }

    handleClick = () => {
        this.setState({
            big_data: 'big_data visible'
        })
    }

    handleClose = () => {
        this.setState({
            big_data: 'big_data'
        })
    }

    render() {
        return (
            <>
            <div onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleOut} className="slot">
                <p>{this.props.nr}</p>
                <div className={this.state.data}>DATA</div>
            </div>
            <div onClick={this.handleClose} className={this.state.big_data}>tu big data</div>
            </>
        )
    }
}

export default Division;