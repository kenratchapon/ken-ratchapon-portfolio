import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Logo from '../assets/logo.png'
import './style/Home.css'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#041C32] flex relative'>
            {/* container */}
            <div className='max-w-[1500px] mx-auto px-8 flex flex-row justify-center h-full'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                    <Fade left>
                        <p className='text-[#de7dff]'>Hi, my name is</p>
                        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Ken Ratchapon</h1>
                        <h2 className='text-4xl sm:text-7xl font-bold text-[#bfbfbf]'>I'm Front-End Developer</h2>
                        <p className='text-[#de7dff] py-4 max-w-[800px]'>
                            Hi, I'm Ratchapon Pukkham, but you can call me Ken. I am a passionate and dedicated <br/> 
                            frontend developer, striving to create visually appealing and user-friendly websites.<br/>
                             This is my portfolio, where I showcase my skills, experience, and projects.
                        </p>

                        <div>
                            <Link to="about" spy={true} smooth={true} duration={500}>
                                <button className='text-[#ffffff] border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-pink-300 hover:border-pink-300 group hover:pr-10 duration-300'>
                                        Get start!
                                    <span className='group-hover:pl-10 duration-300'>
                                        <HiArrowNarrowRight className='ml-3'/>
                                    </span>
                                    
                                </button>
                            </Link>
                        </div>
                    </Fade>
                </div>

                <div className='max-w-[500px] mx-auto px-8 flex flex-col justify-center max-[768px]:hidden relative'>
                    <div className='card ml-6'></div>
                    <img className='absolute' src={Logo} alt="logo img" />
                </div>


            </div>
            <div className='wave1 z-10 max-[768px]:hidden'></div>
        </div>
    )
}

export default Home