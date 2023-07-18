import React from 'react';
import '../App.css';
import certificate from '../images/certificate.png';
import { Link } from 'react-router-dom';

export function Certificate () {

return (
    <div>
        <div className='back-home'>
        <Link className='back-home-link' to='/home'>Take Me Back Home!</Link>
        </div>
        <div className='certificate'>
        <img alt="Certificate Copy"  src={certificate}/>
        </div>
    </div>
)
}