import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall,BiMailSend} from 'react-icons/bi'
const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#ffe494] text-black flex flex-col justify-center relative'>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline-block border-b-4 border-black'>Contact</p>
                    <p className='pt-4'>.
                        Get in touch with me for inquiries, collaborations, or just to say hello! I'm excited to connect with professionals, 
                        clients, and fellow enthusiasts in the software development field. Feel free to reach out via email, phone, or the contact form below. 
                        Looking forward to hearing from you and creating something amazing together!
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-4 px-4'>
                    <div>
                        <div className='text-[#000000] text-center text-xs md:text-lg md:flex justify-between border-black border-2 px-6 py-3 my-2 rounded-lg hover:p-10 hover:text-xl duration-300'>
                            E-mail: ratchapon.pk@outlook.com
                            <HiOutlineMail className='max-[768px]:hidden' size={30}/>
                        </div>
                        <div className='text-[#000000] text-center text-lg md:flex justify-between border-black border-2 px-6 py-3 my-2 rounded-lg hover:p-10 hover:text-xl duration-300'>
                            Tel: 098-589-6210
                            <BiPhoneCall className='max-[768px]:hidden' size={30}/>
                        </div>
                    </div>
                    <div>
                        <form method='POST' action='https://getform.io/f/865f4b0f-af0b-43d8-a251-113eb981f8ff' className=' w-full mx-auto flex flex-col'>
                            <div className='flex flex-col gap-4'>
                                <input className='p-2'  type='text' name='name' placeholder='name'/>
                                <input className='p-2'  type='email' name='email' placeholder='Email'/>
                                <textarea className='p-2' name='message' rows={10} placeholder='Message'/>
                                <button className='border-2 border-black text-lg flex justify-between rounded-lg px-4 py-3 mx-auto hover:p-8 hover:text-xl duration-300'>Send <BiMailSend className='max-[768px]:hidden' size={24}/></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='pb-8 text-center'>
                    <p>© 2023 KenRatchapon</p>
                </div>
            </div>
        </div>
    )
}

export default Contact