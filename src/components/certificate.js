import React from 'react';
import '../App.css';
import certificate from '../images/certificate.png';
import { Link } from 'react-router-dom';

export function Certificate () {

return (
    <div className='certificate'>
        <div>
        <Link to='/home'>Back home!</Link>
        </div>
        <img src={certificate}/>
    </div>
)
}