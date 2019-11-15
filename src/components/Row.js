import React, { useState, useEffect } from 'react';
import '../App.css';
import Division from './Division';
import axios from 'axios';

export default function Row(props) {

    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/szafa/`)
            .then((res) => {
                setData(res.data);
            })
    },[])

    let top = [],
        bot = [];
    for(let i=1; i<=12; i++){
        top.push(<Division data={data} index={props.index} row={'top'} id={props.id+i} file={props.file} segment_nr={props.nr} nr={i} key={i}/>);
        bot.push(<Division data={data} index={props.index} row={'bot'} id={12+props.id+i} file={props.file} segment_nr={props.nr} nr={i+12} key={i+12}/>);
    }

    return (
        <div>
            <div className='row'>
                <h2 style={{width:'1010px', height:'auto'}}>{props.name}</h2>
                {top}
                {bot}
            </div>
        </div>
    
    );
}