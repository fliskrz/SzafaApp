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
            file: this.props.file,          //data from the API call
            slot: 'slot',                   //class with styles for the one cable slot button
            hover: 'hover',                 //class with styles for hover popup
            id: this.props.id,
            data: this.props.data
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
        let data = this.state.data;
        data.zajety = 'green';

        axios.put(`http://localhost:3001/szafa/${this.props.id}/`, data)
            .then((res) => {
                resolve(res.data)
            })

        this.setState({
            slot: 'slot green'
        })
    }


    //changing slot color to red
    makeRed = (e) => {
        let data = this.state.data;
        data.zajety = 'red';

        axios.put(`http://localhost:3001/szafa/${this.props.id}/`, data)
            .then((res) => {
                resolve(res.data)
            })

        this.setState({
            slot: 'slot red'
        })
    }


    makeYellow = (e) => {
        let data = this.state.data;
        data.zajety = 'yellow';

        axios.put(`http://localhost:3001/szafa/${this.props.id}/`, data)
            .then((res) => {
                resolve(res.data)
            })

        this.setState({
            slot: 'slot yellow'
        })
    }


    handleEditTest = (e) => {
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');
        let input3 = document.createElement('input');
        let submit = document.createElement('button');
        submit.innerText = 'Submit';
        let form = document.createElement('form');
        form.className = 'form';
        let label1 = document.createElement('label');
        label1.innerText = 'editable1';
        let label2 = document.createElement('label');
        label2.innerText = 'editable2';
        let label3 = document.createElement('label');
        label3.innerText = 'editable3';
        form.appendChild(label1);
        form.appendChild(input1);
        form.appendChild(label2);
        form.appendChild(input2);
        form.appendChild(label3);
        form.appendChild(input3);
        form.appendChild(submit);
        let edit = e.currentTarget;
        edit.parentElement.parentElement.removeChild(edit.parentElement.previousElementSibling);
        edit.parentElement.parentElement.insertBefore(form, edit.parentElement);
        edit.parentElement.removeChild(edit);
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            let editable1 = document.createElement('p');
            let editable2 = document.createElement('p');
            let editable3 = document.createElement('p');
            editable1.innerText = input1.value;
            editable2.innerText = input2.value;
            editable3.innerText = input3.value;
            e.currentTarget.parentElement.appendChild(editable1);
            e.currentTarget.parentElement.appendChild(editable2);
            e.currentTarget.parentElement.appendChild(editable3);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
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
        input.value = this.state.file[this.props.index].netscale[this.props.segment_nr-1].segment[this.props.nr-1].data;
        edit.parentElement.parentElement.removeChild(edit.parentElement.previousElementSibling);
        edit.parentElement.parentElement.insertBefore(input, edit.parentElement);
        edit.parentElement.insertBefore(confirm, edit.nextElementSiblign);
        edit.parentElement.removeChild(edit);
        confirm.addEventListener('click', (e) => {
            let p = document.createElement('p');
            p.innerHTML = e.currentTarget.parentElement.previousElementSibling.value;
            file[this.props.index].netscale[this.props.segment_nr-1].segment[this.props.nr-1].data = e.currentTarget.parentElement.previousElementSibling.value;
            p.className = 'data';
            e.currentTarget.parentElement.parentElement.removeChild(e.currentTarget.parentElement.previousElementSibling);
            e.currentTarget.parentElement.parentElement.insertBefore(p, e.currentTarget.parentElement);
            e.currentTarget.parentElement.appendChild(edit);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
            this.setState({
                file: file
            })
            axios.put(`http://localhost:3000/szafa/${this.props.index + 1}/`, file)
            .then((res) => {
                resolve(res.data)
            })
            axios.put(`http://localhost:3001/szafa/${this.state.id}/`, {"dasdasd":"sadasd"}) // to o dziwo dziala
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
            file[this.props.index].netscale[this.props.segment_nr-1].segment[this.props.nr-1].name = span.innerText;
            span.className = 'name';
            e.currentTarget.parentElement.removeChild(e.currentTarget.previousElementSibling);
            e.currentTarget.parentElement.insertBefore(span, e.currentTarget);
            e.currentTarget.parentElement.appendChild(edit);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
            this.setState({
                file: file
            })
            axios.put(`http://localhost:3000/szafa/${this.props.index + 1}/`, file)
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
        this.assignColors = (() => {
            this.setState({
                slot: 'slot ' + this.props.data[this.props.id-1].zajety
            })
        })()    
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
                {this.props.nr <= 12 ? this.props.nr : this.props.nr - 12}
                <div className={this.state.hover}>{this.state.file[this.props.index].netscale[segment_nr].segment[this.props.nr-1].name}</div>
            </button>
            <div className={this.state.big_data}>
                <div onClick={this.handleClose} style={styles}>X</div>
                <p style={{backgroundColor: 'rgb(223, 226, 226)'}}>
                    {this.props.nr <= 12 ? this.props.nr : this.props.nr - 12}{'.'}
                    <span className='name'>&nbsp;{this.state.file[this.props.index].netscale[segment_nr].segment[this.props.nr-1].name}&nbsp;</span>
                    <button onClick={this.handleNameEdit} className='edit edit_name'></button>
                </p>
                <div className='data'>
                    {/* <p>{this.state.file[this.props.index].netscale[segment_nr].segment[this.props.nr-1].data}</p> */}
                    <div className='form'>
                        <p>{this.props.data[this.props.id-1].wykorzystanie}</p>
                        <p>{this.props.data[this.props.id-1].usługa}</p>
                        <p>{this.props.data[this.props.id-1].uwagi}</p>
                    </div>
                <div style={{backgroundColor: 'rgb(223, 226, 226)'}}>
                    <button onClick={this.handleEditTest} className='edit'></button>
                </div>
                </div>
                <div className={this.state.switch_case}>
                    <div>
                        <button onClick={this.makeGreen} className='switch green'>Wolny</button>
                        <button onClick={this.makeRed} className='switch red'>Zajęty</button>
                        <button onClick={this.makeYellow} className='switch yellow'>Rezerwacja</button>
                    </div>
                    <button onClick={this.handleClose} className='switch ok'>OK</button>
                </div>              
            </div>
            </>
        )
    }
}

export default Division;