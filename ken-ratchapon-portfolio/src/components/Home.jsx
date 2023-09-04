import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi'
import {BiArrowToBottom} from 'react-icons/bi'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
import Resume from '../assets/resume/Ratchapon_Resume.pdf'
import { FaGithub } from 'react-icons/fa'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#5f36a5] flex relative m-0 p-0'>
            {/* container */}
            <div className='max-w-[1500px] mx-auto px-8 flex flex-row justify-center h-full'>
                <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
                    <p className='text-[#de7dff]'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-black'>Ken Ratchapon</h1>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#bfbfbf]'>I'm Front-End Developer</h2>
                    <p className='text-[#de7dff] py-4 max-w-[800px]'>
                        Hi, My name is Ratchapon Pukkham, but you can call me Ken. I am a passionate and dedicated <br />
                        frontend developer, striving to create visually appealing and user-friendly websites.<br />
                        This is my portfolio, where I showcase my skills, experience, and projects.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4'>
                        <a href={Resume} download="Ratchapon_Resume.pdf">
                            <button className='text-black border-2 px-6 py-3 my-2 flex items-center rounded-3xl bg-white'>
                                Download Resume
                                <BiArrowToBottom/>
                            </button>
                        </a>
                        <a href="https://github.com/kenratchapon">
                            <button className='text-black border-2 px-6 py-3 my-2 flex items-center rounded-3xl bg-white'>Github<FaGithub className=' ml-2 h-4 w-4'/></button>
                        </a>
                        <Link to="about" spy={true} smooth={true} duration={500}>
                            <button className='text-black border-2 px-6 py-3 my-2 flex items-center rounded-lg bg-pink-300 hover:bg-yellow-400 duration-300'>
                                Get start!
                                <span>
                                    <HiArrowNarrowDown className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </div>
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