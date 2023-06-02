import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';

import FireBase from '../assets/firebase.png';
import Giticon from '../assets/gitIcon.png';
import Tailwind from '../assets/tailwind.png';
import './style/Skills.css'
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#064663] text-gray-200 relative'>
            <div className='box max-[768px]:hidden'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-4'>
                    <p className='text-4xl font-bold inline border-b-4'>Skills</p>
                    <p className='py-4'>//These are the technologies I'have worked with//</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center text-center py-8'>
                    <div className='shadow-md hover:shadow-xl shadow-[#e08f8f] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md hover:shadow-xl shadow-[#77b7f3] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-xl shadow-[#f5ff88] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center text-center pb-8'>
                    <div className='shadow-md hover:shadow-xl shadow-[#54fffc] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={ReactImg} alt="ReactImg icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md hover:shadow-xl shadow-[#7cffb5] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md hover:shadow-xl shadow-[#ffd280] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={FireBase} alt="FireBase icon" />
                        <p className='my-4'>FireBase</p>
                    </div>
                    <div className='shadow-md hover:shadow-xl shadow-[#ffffff] hover:scale-110 duration-500 rounded-lg'>
                        <img className='w-20 mx-auto p-1' src={Giticon} alt="GitHub icon" />
                        <p className='my-4'>Git</p>
                    </div>
                </div>
            </div>
            <div className='wave3 z-10 max-[768px]:hidden'></div>
        </div>
    )
}

export default Skills