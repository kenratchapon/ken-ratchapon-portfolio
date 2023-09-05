import React from 'react'
import { skills } from '../lib/data';

const Skills = () => {
    return (
        <div name='skills' className='w-full bg-gray-50 bg-opacity-75 text-black relative pt-20'>
            <div className="bg-[#e1ffaa] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#fffdc6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mt-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
                    <p className='py-4'>These are the technologies I'have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center text-center py-8'>
                    {skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            <div className={`shadow-md hover:shadow-xl bg-gray-50 bg-opacity-75 hover:scale-110 duration-500 rounded-lg`}>
                                <img className='w-20 mx-auto p-1' src={skill.imageUrl} alt="HTML icon" />
                                <p className='my-4'>{skill.title}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills