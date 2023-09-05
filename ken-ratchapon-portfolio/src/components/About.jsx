import React from 'react'
import Mypic from '../assets/mypic.png'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";

const textAboutMe = `My name is Ratchapon Pukkham, also known as Ken, a recent Computer Science graduate from Chiang Mai University. 
                    With a passion for frontend development, I have experience in a software house through a six-month cooperative education program. 
                    I have a strong foundation in HTML, CSS, and JavaScript, along with expertise in frontend frameworks like React. 
                    I strive for intuitive user experiences and continuously stay updated with the latest industry trends. 
                    Explore my portfolio website for examples of my work. Thank you for visiting!`

export const About = () => {
    return (
        <div name='about' className='w-full bg-gray-50 text-black relative bg-opacity-75 pt-20'>
            <div className="bg-[#ffc2fa] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#1cffe8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div>
                    <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8'>
                            <p className='text-4xl font-bold inline border-b-4 border-purple-700'>About me</p>
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


                <img className='max-w-sm max-[768px]:hidden m-4' src={Mypic} alt="mypic" />


            </div>
            <div>
                <VerticalTimeline lineColor="#5f36af">
                    {experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                contentStyle={{
                                    background: "#ffffff",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid #5f36af",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: "#ffffff",
                                    fontSize: "1.5rem",
                                }}
                            >
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))}
                </VerticalTimeline>
            </div>

        </div>
    )
}
