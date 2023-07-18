import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Rally from '../images/Rally.png'
import MovieQuiz from '../images/MovieQuiz.png'
export function Projects () {
    return (
        <div>
            <div className='back-home'>
            <Link className='back-home-link' to='/home'>Take Me Back Home!</Link>
            </div>
            <br></br>
            <div className='container'>
                <div className='row border'>
                    <div className='col-lg-2'>
                            <Link className='title2' target="_blank" to='https://home-5013300400.app-ionos.space/'>Rally!</Link>
                    </div>
                    <div className='col-lg-4'>
                        <h1  className='home-content2'>
                        I am presenting a personal project that showcases my proficiency in building applications using Spring Boot,
                        Java, Typescript, SQL,  AWS, Angular, HTML5 and BootStrap.  This project highlights my ability to use Restful APIs.  
                        </h1>
                    </div>
                    <div className='col-lg-6'>
                        <img className='rally' src={Rally}/>
                    </div>
                </div>
            
                <br></br>
            <div className='row border'>
                <div className='col-lg-2'>
                    <Link className='title2' target="_blank" to='https://home-5012146743.app-ionos.space/'>Movie Quiz!</Link>
                </div>
                <div className='col-lg-4'>
                <h1 className='home-content2'>
                I am presenting a personal project that showcases my proficiency in building applications using various technologies including Javascript, Typescript, Angular, HTML5, and Bootstrap. The project highlights my ability to integrate APIs seamlessly and display data effectively.
                </h1>
                </div>
                <div className='col-lg-6'>
                <img className='rally' src={MovieQuiz}/>
                </div>
            </div>
            </div>
        </div>
    )
    }