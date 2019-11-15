import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import { resolve } from 'q';

export default function Division(props) {

    const [switch_case, setSwitch_case] = useState('switch_case');
    const [big_data, setBig_data] = useState('big_data');
    const [file, setFile] = useState(props.file);
    const [slot, setSlot] = useState('slot');
    const [hover, setHover] = useState('hover');
    const [id, setId] = useState(props.id);
    const [data, setData] = useState('');

    let styles = {
        width: '70px',
        height: '70px',
        fontSize: '40px',
        position: 'absolute',
        left: 'calc(100% - 70px)',
        cursor: 'pointer'
    }

    let segment_nr = props.segment_nr-1;


    useEffect(() => {
        axios.get(`http://localhost:3002/szafa/1/`)
            .then((res) => {
                setData(res.data);  //to jest dobra ścieżka do elementu
                
                console.log(res.data);
                
                
                if(res.data.data[props.id-1][0].style.fill.fgColor.rgb === "00FF00"){
                    setSlot('slot green');
                }else if(res.data.data[props.id-1][0].style.fill.fgColor.rgb === "FF0000"){
                    setSlot('slot red');
                }else{
                    setSlot('slot yellow');
                }
            }) 
    },[])

    //showing the data popup
    const handleClick = (e) => {   
        setBig_data('big_data visible');
        e.currentTarget.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = true);        
    }


    //closing data popup
    const handleClose = (e) => {
        setBig_data('big_data');
        e.currentTarget.parentElement.parentElement.parentElement.querySelectorAll('.slot').forEach(e => e.disabled = false);
    }


    //closing data popup with ESC button
    const handleCloseKey = (e) => {
        if(e.keyCode === 27){
            setBig_data('big_data');
            document.querySelectorAll('.slot').forEach(e => e.disabled = false);
        }
    }


    //changing slot color to green
    const makeGreen = (e) => {
        for(let i=0; i<10; i++){
            data.data[props.id-1][i].style.fill.fgColor.rgb = "00FF00";
        }

        axios.put(`http://localhost:3002/szafa/1/`, data)
            .then((res) => {
                resolve(res.data)
            })

        setSlot('slot green');
    }


    //changing slot color to red
    const makeRed = (e) => {
        for(let i=0; i<10; i++){
            data.data[props.id-1][i].style.fill.fgColor.rgb = "FF0000";
        }

        axios.put(`http://localhost:3002/szafa/1/`, data)
            .then((res) => {
                resolve(res.data)
            })
        
        setSlot('slot red');
    }


    const makeYellow = (e) => {
        for(let i=0; i<10; i++){
            data.data[props.id-1][i].style.fill.fgColor.rgb = "FFFF00";
        }

        axios.put(`http://localhost:3002/szafa/1/`, data)
            .then((res) => {
                resolve(res.data)
            })

        setSlot('slot yellow');
    }

    //editing the data in data popup and sending them to API
    const handleEdit = (e) => {
        // let new_data = data;
        // let wykorzystanie = document.createElement('input');
        // let usługa = document.createElement('input');
        // let uwagi = document.createElement('input');
        // let submit = document.createElement('button');
        // submit.innerText = 'Submit';
        // let form = document.createElement('form');
        // form.className = 'form';
        // let label1 = document.createElement('label');
        // label1.innerText = 'Wykorzystanie';
        // let label2 = document.createElement('label');
        // label2.innerText = 'Usługa';
        // let label3 = document.createElement('label');
        // label3.innerText = 'Uwagi';
        // form.appendChild(label1);
        // form.appendChild(wykorzystanie);
        // form.appendChild(label2);
        // form.appendChild(usługa);
        // form.appendChild(label3);
        // form.appendChild(uwagi);
        // form.appendChild(submit);
        // wykorzystanie.value = data.wykorzystanie;
        // usługa.value = data.usługa;
        // uwagi.value = data.uwagi;
        // let edit = e.currentTarget;
        // edit.parentElement.removeChild(edit.previousElementSibling);
        // edit.parentElement.insertBefore(form, edit);
        // edit.parentElement.removeChild(edit);
        // form.addEventListener('submit', (e)=>{
        //     e.preventDefault();
        //     let p = document.createElement('p');
        //     p.className = 'form';
        //     let wykorzystanie_edit = document.createElement('p');
        //     let usługa_edit = document.createElement('p');
        //     let uwagi_edit = document.createElement('p');
        //     wykorzystanie_edit.innerText = wykorzystanie.value;
        //     usługa_edit.innerText = usługa.value;
        //     uwagi_edit.innerText = uwagi.value;
        //     new_data.wykorzystanie = wykorzystanie.value;
        //     new_data.usługa = usługa.value;
        //     new_data.uwagi = uwagi.value;
        //     e.currentTarget.parentElement.appendChild(p);
        //     e.currentTarget.nextElementSibling.appendChild(wykorzystanie_edit);
        //     e.currentTarget.nextElementSibling.appendChild(usługa_edit);
        //     e.currentTarget.nextElementSibling.appendChild(uwagi_edit);
        //     e.currentTarget.parentElement.appendChild(edit);
        //     e.currentTarget.parentElement.removeChild(e.currentTarget);
        //     axios.put(`http://localhost:3001/szafa/${props.id}/`, new_data)
        //     .then((res) => {
        //         resolve(res.data)
        //     })
        // })
    }

    //editing slot name in data popup and sending it to API
    const handleNameEdit = (e) => {
        let edit = e.currentTarget;
        let input = document.createElement('input');
        let confirm = document.createElement('button');
        let new_file = file;
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
            new_file[props.index].netscale[props.segment_nr-1].segment[props.nr-1].name = span.innerText;
            span.className = 'name';
            e.currentTarget.parentElement.removeChild(e.currentTarget.previousElementSibling);
            e.currentTarget.parentElement.insertBefore(span, e.currentTarget);
            e.currentTarget.parentElement.appendChild(edit);
            e.currentTarget.parentElement.removeChild(e.currentTarget);
            setFile(new_file);
            axios.put(`http://localhost:3000/szafa/${this.props.index + 1}/`, new_file)
            .then((res) => {
                resolve(res.data)
            })
        })
    }

    const handleHover = () => {
        setHover('hover visible')
    }

    const handleOut = () => {
        setHover('hover')
    }

    if(data){

        return (
            <>
                <button data-segment={props.segment_nr} data-row={props.row} data-slot={props.nr} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleOut} className={slot}>
                    {props.nr <= 12 ? props.nr : props.nr - 12}
                    <div className={hover}>{file[props.index].netscale[segment_nr].segment[props.nr-1].name}</div>
                </button>
                <div className={big_data}>
                    <div onClick={handleClose} style={styles}>X</div>
                    <p style={{backgroundColor: 'rgb(223, 226, 226)'}}>
                        {props.nr <= 12 ? props.nr : props.nr - 12}{'.'}
                        <span className='name'>&nbsp;{file[props.index].netscale[segment_nr].segment[props.nr-1].name}&nbsp;</span>
                        <button onClick={handleNameEdit} className='edit edit_name'></button>
                    </p>
                    <div className='data'>
                        {/* <p>{this.state.file[this.props.index].netscale[segment_nr].segment[this.props.nr-1].data}</p> */}
                        <div className='form'>
                            <p>{data.wykorzystanie}</p>                     
                            <p>{data.usługa}</p>
                            <p>{data.uwagi}</p>
                        </div>
                        <button onClick={handleEdit} className='edit'></button>
                    </div>
                    <div className={switch_case}>
                        <div>
                            <button onClick={makeGreen} className='switch green'>Wolny</button>
                            <button onClick={makeRed} className='switch red'>Zajęty</button>
                            <button onClick={makeYellow} className='switch yellow'>Rezerwacja</button>
                        </div>
                        <button onClick={handleClose} className='switch ok'>OK</button>
                    </div>              
                </div>
                </>
        )
    }else{
        return <h1>dupa</h1>
    }
}