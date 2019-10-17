import React from 'react';
import '../App.css';
import axios from 'axios';
import { resolve } from 'q';


//styles for the close button on the data popup
let styles = {
    width: '70px',
    height: '70px',
    fontSize: '40px',
    position: 'absolute',
    left: 'calc(100% - 70px)',
    cursor: 'pointer'
}

class Division extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch_case: 'switch_case',     //class with styles for change color buttons
            big_data: 'big_data',           //class with styles for data popup
            free: 'free',                   
            busy: 'busy',
            file: this.props.file,          //data from the API call
            slot: 'slot',                   //class with styles for the one cable slot button
            hover: 'hover'                  //class with styles for hover popup
        }
        
    }


    //showing the data popup
    handleClick = (e) => {   
        this.setState({
            big_data: 'big_data visible'
        })
        e.currentTarget.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = true);        
    }


    //closing data popup
    handleClose = (e) => {
        this.setState({
            big_data: 'big_data'
        })
        e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = false);
    }


    //closing data popup with ESC button
    handleCloseKey = (e) => {
        if(e.keyCode === 27){
            this.setState({
                big_data: 'big_data'
            })
            document.querySelectorAll('.slot').forEach(e => e.disabled = false);
        }
    }


    //changing slot color to green
    makeGreen = (e) => {
        let file = this.state.file;
        file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].color = 'green';

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


    //changing slot color to red
    makeRed = (e) => {
        let file = this.state.file;
        file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].color = 'red';

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


    //editing the data in data popup and sending them to API
    handleEdit = (e) => {
        let input = document.createElement('textarea');
        let confirm = document.createElement('button');
        let edit = e.currentTarget;
        confirm.className = 'confirm';
        input.className = 'input';
        let file = this.state.file;
        input.value = this.state.file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].data;
        edit.parentElement.parentElement.removeChild(edit.parentElement.previousElementSibling);
        edit.parentElement.parentElement.insertBefore(input, edit.parentElement);
        edit.parentElement.insertBefore(confirm, edit.nextElementSiblign);
        edit.parentElement.removeChild(edit);
        confirm.addEventListener('click', (e) => {
            let p = document.createElement('p');
            p.innerHTML = e.currentTarget.parentElement.previousElementSibling.value;
            file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].data = e.currentTarget.parentElement.previousElementSibling.value;
            p.className = 'data';
            e.currentTarget.parentElement.parentElement.removeChild(e.currentTarget.parentElement.previousElementSibling);
            e.currentTarget.parentElement.parentElement.insertBefore(p, e.currentTarget.parentElement);
            e.currentTarget.parentElement.appendChild(edit);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
            this.setState({
                file: file
            })
            axios.put(`http://localhost:3000/szafa/1/`, file)
            .then((res) => {
                resolve(res.data)
            })
        });
    }


    //editing slot name in data popup and sending it to API
    handleNameEdit = (e) => {
        let edit = e.currentTarget;
        let input = document.createElement('input');
        let confirm = document.createElement('button');
        let file = this.state.file;
        confirm.className = 'confirm edit_name';
        input.type = 'text';
        input.className = 'name';
        input.value = edit.previousElementSibling.innerText;
        edit.parentElement.removeChild(edit.previousElementSibling);
        edit.parentElement.insertBefore(input, edit);
        edit.parentElement.appendChild(confirm);
        edit.parentElement.removeChild(edit);
        confirm.addEventListener('click', (e) => {
            let span = document.createElement('span');
            span.innerText =e.currentTarget.previousElementSibling.value;
            file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].name = span.innerText;
            span.className = 'name';
            e.currentTarget.parentElement.removeChild(e.currentTarget.previousElementSibling);
            e.currentTarget.parentElement.insertBefore(span, e.currentTarget);
            e.currentTarget.parentElement.appendChild(edit);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
            this.setState({
                file: file
            })
            axios.put(`http://localhost:3000/szafa/1/`, file)
            .then((res) => {
                resolve(res.data)
            })
        })
    }

    handleHover = () => {
        this.setState({
            hover: 'hover visible'
        })
    }

    handleOut = () => {
        this.setState({
            hover: 'hover'
        })
    }

    //assigning correct colors from the API to correct slot buttons
    //adding listener for ESC key
    componentDidMount() {
        document.addEventListener("keydown", this.handleCloseKey);
        this.assignColors = (() =>
            this.setState({
                slot:  'slot ' + this.state.file[0].netscale[this.props.segment_nr-1].segment[this.props.nr-1].color
        }))()       
    }


    //removing listener for ESC key
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleCloseKey);
    }



    render() {
        let segment_nr = this.props.segment_nr-1;

        return (
            <>
            <button data-segment={this.props.segment_nr} data-row={this.props.row} data-slot={this.props.nr} onClick={this.handleClick} onMouseOver={this.handleHover} onMouseOut={this.handleOut} className={this.state.slot}>
                <span>{this.props.nr <= 12 ? this.props.nr : this.props.nr - 12}</span>
                <div className={this.state.hover}>{this.state.file[0].netscale[segment_nr].segment[this.props.nr-1].name}</div>
            </button>
            <div className={this.state.big_data}>
                <div onClick={this.handleClose} style={styles}>X</div>
                <p style={{backgroundColor: 'rgb(223, 226, 226)'}}>
                    {this.props.nr <= 12 ? this.props.nr : this.props.nr - 12}{'.'}
                    <span className='name'>&nbsp;{this.state.file[0].netscale[segment_nr].segment[this.props.nr-1].name}&nbsp;</span>
                    <button onClick={this.handleNameEdit} className='edit edit_name'></button>
                </p>
                <p className='data'>{this.state.file[0].netscale[segment_nr].segment[this.props.nr-1].data}</p>
                <div style={{backgroundColor: 'rgb(223, 226, 226)'}}>
                    <button onClick={this.handleEdit} className='edit'></button>
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