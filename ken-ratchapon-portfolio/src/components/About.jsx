import React from 'react'
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Mypic from '../assets/mypic.png'
import './style/About.css'
const textAboutMe = `I am Ratchapon Pukkham, also known as Ken, a recent Computer Science graduate from Chiang Mai University. 
                    With a passion for frontend development, I have experience in a software house through a six-month cooperative education program. 
                    I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in frontend frameworks like React. 
                    I strive for intuitive user experiences and continuously stay updated with the latest industry trends. 
                    Explore my portfolio website for examples of my work. Thank you for visiting!`

export const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#6441a5] text-gray-300 relative'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <Fade right>
                    <div>
                        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                            <div className='sm:text-right pb-8'>
                                <p className='text-4xl font-bold inline border-b-4'>About me</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                            <div className='sm:text-right text-3xl font-bold'>
                                <p>Hi. I'am Ken, nice to meet you</p>
                            </div>
                            <div >
                                <p>{textAboutMe}</p>
                            </div>
                        </div>
                        
                    </div>
                </Fade>
                <Jump>
                    <img className='max-w-sm max-[768px]:hidden m-4' src={Mypic} alt="mypic" />
                </Jump>
            
            </div>
            <div className='wave2 z-10 max-[768px]:hidden'></div>
        </div>
    )
}
