import React from 'react';
import '../App.css';
import firebase from 'firebase';
import axios from 'axios';
import { resolve } from 'q';

const config = {
    apiKey: "AIzaSyAPviDuJJnYPFjq09YvQfmKWiUFjZiurp0",
    authDomain: "szafa-da72b.firebaseapp.com",
    databaseURL: "https://szafa-da72b.firebaseio.com",
    projectId: "szafa-da72b",
    storageBucket: "szafa-da72b.appspot.com",
    messagingSenderId: "577330499437",
    appId: "1:577330499437:web:08cfc0404301e6a2c3d464"
}

firebase.initializeApp(config);




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
            free: 'free',
            busy: 'busy',
            file: this.props.file,
            slot: 'slot',
        }
        
    }

    handleClick = (e) => {   
        this.setState({
            big_data: 'big_data visible'
        })
        e.currentTarget.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = true);        
    }

    handleClose = (e) => {
        this.setState({
            big_data: 'big_data'
        })
        e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = false);
    }

    handleCloseKey = (e) => {
        if(e.keyCode == 27){
            this.setState({
                big_data: 'big_data'
            })
            document.querySelectorAll('.slot').forEach(e => e.disabled = false);
        }
    }

    makeGreen = (e) => {

        let segment = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.segment;
        let row = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.row;
        let slot = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.slot;
        let file = this.state.file;
        file[0].netscale[segment-1].segment[slot-1].color = 'green';

        axios.put(`http://localhost:3000/szafa/1/`, file)
            .then((res) => {
                resolve(res.data)
            })

        this.setState({
            slot: 'slot green',
            free: 'Done',
            busy: 'busy',
        })
    }

    makeRed = (e) => {

        let segment = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.segment;
        let row = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.row;
        let slot = e.currentTarget.parentElement.parentElement.previousElementSibling.dataset.slot;
        let file = this.state.file;
        file[0].netscale[segment-1].segment[slot-1].color = 'red';

        axios.put(`http://localhost:3000/szafa/1/`, file)
            .then((res) => {
                resolve(res.data)
            })

        this.setState({
            slot: 'slot red',
            busy: 'Done',
            free: 'free'
        })
    }

    handleEdit = (e) => {
        let input = document.createElement('textarea');
        let confirm = document.createElement('button');
        let file = this.state.file;
        confirm.innerHTML = 'Confirm';
        input.className = 'input';
        input.value = this.state.file[0].netscale[this.props.name-1].segment[this.props.nr-1].data;
        e.currentTarget.parentElement.parentElement.removeChild(e.currentTarget.parentElement.previousElementSibling);
        e.currentTarget.parentElement.parentElement.insertBefore(input, e.currentTarget.parentElement);
        e.currentTarget.parentElement.insertBefore(confirm, e.currentTarget.nextElementSiblign);
        confirm.addEventListener('click', (e) => {
            console.log('fjahfas');
        })        
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleCloseKey);
        this.assignColors = (() =>
            this.setState({
                slot:  'slot ' + this.state.file[0].netscale[this.props.name-1].segment[this.props.nr-1].color
        }))()       
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleCloseKey);
    }

    render() {

        let segment_nr = this.props.name-1;

        return (
            <>
            <button data-segment={this.props.name} data-row={this.props.row} data-slot={this.props.nr} onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleOut} className={this.state.slot}>
                {this.props.nr <= 12 ? this.props.nr : this.props.nr - 12}
                {/* <div className={this.state.switch_case}>
                    <div onClick={this.makeGreen} className='switch green'>free</div>
                    <div onClick={this.makeRed} className='switch red'>busy</div>
                </div> */}
            </button>
            <div className={this.state.big_data}>
                <div onClick={this.handleClose} style={styles}>X</div>
                <p>{this.props.nr}</p>
                <p className='data'>{this.state.file[0].netscale[segment_nr].segment[this.props.nr-1].data}</p>
                <div>
                    <button onClick={this.handleEdit} className='edit'>Edit</button>
                </div>
                <div className={this.state.switch_case}>
                    <div>
                        <button onClick={this.makeGreen} className='switch green'>{this.state.free}</button>
                        <button onClick={this.makeRed} className='switch red'>{this.state.busy}</button>
                    </div>
                    <button onClick={this.handleClose} className='switch ok'>OK</button>
                </div>              
            </div>
            </>
        )
    }
}

export default Division;