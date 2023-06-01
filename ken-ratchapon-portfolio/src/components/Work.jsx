import React from 'react'
import ImgWork from '../assets/projects/workImg.jpeg'
import app1 from '../assets/projects/app1.png'
import app2 from '../assets/projects/app2.jpg'
import app4 from '../assets/projects/app4.jpg'
import app5 from '../assets/projects/app5.png'
import app6 from '../assets/projects/app6.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-gradient-to-b from-[#02838c] to-[#A0D8B3] to-90% text-gray-200'>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4'>Work</p>
                    <p className='pt-4'>//check out some of my recent work</p>
                </div>

                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>

                    {/* grid item 1*/}
                    <div style={{backgroundImage:`url(${app1})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div col-span-3'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Manao Meals Web Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item 2*/}
                    <div style={{backgroundImage:`url(${app2})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div col-span-1'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                TodoList with Firebase
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item 3*/}
                    <div style={{backgroundImage:`url(${ImgWork})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div col-span-2'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React Js App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item 4*/}
                    <div style={{backgroundImage:`url(${app4})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div col-span-2'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React Js App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item 5*/}
                    <div style={{backgroundImage:`url(${app5})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React Js App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* grid item 6*/}
                    <div style={{backgroundImage:`url(${app6})`}} className='shadow-lg shadow-[black] group container rounded-lg flex justify-center items-center mx-auto content-div col-span-3'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 duration-300'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                React Js App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#3c0b6a] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work