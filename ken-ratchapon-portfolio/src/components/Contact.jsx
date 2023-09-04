import React, { useEffect, useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall,BiMailSend} from 'react-icons/bi'
const Contact = () => {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [message, setMessage] =useState('')
    const [status,setStatus] = useState(false);
    useEffect(()=>{
        if(name==='' || email==='' || message===''){
            setStatus(true)
        }else{
            setStatus(false)
        }
    },[name,email,message])
    return (
        <div name='contact' className='w-full h-screen bg-gray-50 bg-opacity-75 text-black flex flex-col justify-center relative'>
      <div className="bg-[#80a2ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#f8ff37] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline-block border-b-4 border-yellow-400'>Contact</p>
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
                        <div className='text-[#000000] text-center text-xs md:text-lg md:flex justify-between border-black border-2 px-6 py-3 my-2 rounded-lg hover:p-10 hover:text-xl duration-300'>
                            Tel: 098-589-6210
                            <BiPhoneCall className='max-[768px]:hidden' size={30}/>
                        </div>
                    </div>
                    <div>
                        <form method='POST' action='https://getform.io/f/fec7d24d-c34c-4884-97dc-d7fe68af9b73' className=' w-full mx-auto flex flex-col'>
                            <div className='flex flex-col gap-4'>
                                <input value={name} onChange={(e)=>setName(e.target.value)} className='p-2 border-2 border-black rounded-md'  type='text' name='name' placeholder='name'/>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='p-2 border-2 border-black rounded-md'  type='email' name='email' placeholder='Email'/>
                                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className='p-2 border-2 border-black rounded-md' name='message' rows={10} placeholder='Message'/>
                                <button disabled={status} className={status === true ? 'border-2 text-gray-400 border-gray-400 text-lg flex justify-between rounded-lg px-4 py-3 mx-auto' : 'border-2 border-black text-lg flex justify-between rounded-lg px-4 py-3 mx-auto hover:p-8 hover:text-xl duration-300'}>Send <BiMailSend className='max-[768px]:hidden' size={24}/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact