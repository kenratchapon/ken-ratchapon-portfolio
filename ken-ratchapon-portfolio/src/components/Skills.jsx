import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';

import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#1b3dab] text-gray-200'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4'>Skills</p>
                    <p className='py-4'>//These are the technologies I'have worked with//</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={ReactImg} alt="ReactImg icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={FireBase} alt="FireBase icon" />
                        <p className='my-4'>FireBase</p>
                    </div>
                    <div className='shadow-md shadow-[black] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto p-1' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills