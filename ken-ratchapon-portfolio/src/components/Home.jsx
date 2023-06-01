import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Logo from '../assets/logo.png'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-gradient-to-b from-[#041C32] to-[#04293A] flex'>
            {/* container */}
            <div className='max-w-[1500px] mx-auto px-8 flex flex-row justify-center h-full'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                    <Fade left>
                        <p className='text-[#de7dff]'>Hi, my name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Ken Ratchapon</h1>
                        <h2 className='text-4xl sm:text-7xl font-bold text-[#bfbfbf]'>I'm Front-End Developer</h2>
                        <p className='text-[#de7dff] py-4 max-w-[700px]'>{`Hello! I recently graduated from Chiang Mai University and I'm eager to pursue a career in frontend development. 
                        With a wide range of skills in HTML, CSS, JavaScript, and popular frameworks like React, 
                        I create visually appealing and interactive web experiences. 
                        I'm dedicated to continuous learning and staying updated with the latest trends in frontend development. 
                        Welcome to my portfolio website!`}</p>
                        <div>
                            <button className='text-[#ffffff] border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-pink-300 hover:border-pink-300 group hover:pr-10 duration-300'>
                                <Link to="about" spy={true} smooth={true} duration={500}>
                                    Get start!
                                </Link>
                                <span className='group-hover:pl-10 duration-300'>
                                    <HiArrowNarrowRight className='ml-3'/>
                                </span>
                                
                            </button>
                        </div>
                    </Fade>
                </div>

                <div className='max-w-[500px] mx-auto px-8 flex flex-col justify-center max-[768px]:hidden relative'>
                    <div className='card ml-6'></div>
                    <img className='absolute' src={Logo} alt="logo img" />
                </div>


            </div>
        </div>
    )
}

export default Home