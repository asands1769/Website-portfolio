import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Rally from '../images/Rally.png'
import MovieQuiz from '../images/MovieQuiz.png'
export function Projects () {
    return (
        <div>
            <Link to='/home'>Take Me Back Home!</Link>
            <div className='certificate'>
                <div className='title'>
                    <Link target="_blank" to='https://home-5013300400.app-ionos.space/'>Rally!</Link>
                </div>
                <h1  className='home-content'>
                    I am presenting a personal project that showcases my proficiency in building applications using Spring Boot,
                    Java, Typescript, SQL,  AWS, Angular, HTML5 and BootStrap.  This project highlights my ability to use Restful APIs.  
                </h1>
            </div>
            <div className='certificate'>
                <img className='rally' src={Rally}/>
                <br></br>
                <div className='title'>
                    <Link target="_blank" to='https://home-5012146743.app-ionos.space/'>Take a Movie Quiz!</Link>
                </div>
                <br></br>
                <h1 className='home-content'>
                I am presenting a personal project that showcases my proficiency in building applications using various technologies including Javascript, Typescript, Angular, HTML5, and Bootstrap. The project highlights my ability to integrate APIs seamlessly and display data effectively.
                </h1>
                <img className='rally' src={MovieQuiz}/>
            </div>
        </div>
    )
    }