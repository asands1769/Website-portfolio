import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export function Home () {
        return (

            <div className='padding'>
                <div className='container-md'>
                    <div className='row'>

                    </div>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <h1 className='welcome'>Welcome</h1>
                            <br></br>
                            <p className='home-content'>&emsp; My name is Adam Sands, and this is my website portfolio.  I am located out of Jacksonville Florida
                            and have developed many projects that feature my abilities as a Full-Stack Web Developer. 
                            I have an always-learning mindset and believe that in this industry, if you stop learning you quickly fall behind.
                            </p>
                            <p className='home-content'>
                            I am passionate about complex problem solving and creating UI that will be simple and seamless for the user to use.  
                            </p>

                        </div>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-2'>
                            <div className='sidebar'>
                                <h2>Explore</h2>
                                <Link className='links'  to='/projects'>Projects</Link>
                                <br></br>
                                <br></br>
                                <Link  className='links' target="_blank" to='https://github.com/asands1769'> Github</Link>
                                <br></br>
                                <br></br>
                                <Link className='links' target="_blank" to='https://www.linkedin.com/in/adam-sands1769/'> LinkedIn</Link>
                                <br></br>
                                <br></br>
                                <Link className='links' to='/certificate'>Web Development Certification</Link>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                        <p className='right'>©2023 Adam Sands</p>
                    </div>
                </div>
            </div>
        )
}