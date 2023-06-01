import React from 'react'
import Fade from 'react-reveal/Fade';

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-[#04293A] to-[#064663] text-gray-300'>
            <Fade top>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8'>
                        <p className='text-4xl font-bold inline border-b-4'>About</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'am Ken, nice to meet you</p>
                    </div>
                    <div>
                        <p>Hello! I recently graduated from Chiang Mai University and I am eager 
                            to pursue a career in frontend development. I possess a wide range of 
                            skills in this field and I am excited to showcase them through 
                            my portfolio website. With a strong foundation in HTML, CSS, and JavaScript, 
                            I am capable of creating visually appealing and interactive web experiences. 
                            Additionally, I have experience with popular frontend frameworks such as 
                            React. I am dedicated to continuous learning and 
                            staying up-to-date with the latest trends and technologies in frontend 
                            development. I look forward to the opportunity to contribute my skills
                             and creativity to the industry. Welcome to my portfolio website!</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}
