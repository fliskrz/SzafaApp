import React from 'react';
import '../App.css';

let styles = {
    width: '70px',
    height: '70px',
    fontSize: '40px',
    position: 'absolute',
    left: 'calc(100% - 70px)'
}

class Division extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch_case: 'switch_case',
            big_data: 'big_data',
            slot: 'slot green',
            free: 'free',
            busy: 'busy'
        }
    }

    // handleHover = () => {
    //     this.setState({
    //         switch_case: 'switch_case visible'
    //     })
    // }

    // handleOut = () => {
    //     this.setState({
    //         switch_case: 'switch_case'
    //     })
    // }

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

    makeGreen = (e) => {
        this.setState({
            slot: 'slot green',
            free: 'Done',
            busy: 'busy'
        })
    }

    makeRed = () => {
        this.setState({
            slot: 'slot red',
            busy: 'Done',
            free: 'free'
        })
    }


    render() {
        return (
            <>
            <div onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleOut} className={this.state.slot}>
                <p>{this.props.nr}</p>
                {/* <div className={this.state.switch_case}>
                    <div onClick={this.makeGreen} className='switch green'>free</div>
                    <div onClick={this.makeRed} className='switch red'>busy</div>
                </div> */}
            </div>
            <div className={this.state.big_data}>
                <div onClick={this.handleClose} style={styles}>X</div>
                <p>{this.props.nr}</p>
                <div className={this.state.switch_case}>
                    <button onClick={this.makeGreen} className='switch green'>{this.state.free}</button>
                    <button onClick={this.makeRed} className='switch red'>{this.state.busy}</button>
                </div>              
            </div>
            </>
        )
    }
}

export default Division;