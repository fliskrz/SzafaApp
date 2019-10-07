import React from 'react';
import '../App.css';
import Division from './Division';

class Row extends React.Component {
    
    render() {
        return (
            <div className='row'>
                <Division nr={1}/>
                <Division nr={2}/>
                <Division nr={3}/>
                <Division nr={4}/>
                <Division nr={5}/>
                <Division nr={6}/>
                <Division nr={7}/>
                <Division nr={8}/>
                <Division nr={9}/>
                <Division nr={10}/>
                <Division nr={11}/>
                <Division nr={12}/>
            </div>
        )
    }
}

export default Row;