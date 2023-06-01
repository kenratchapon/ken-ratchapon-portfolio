import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#A0D8B3] text-black flex justify-center items-center'>
            <div className='max-w-[1000px] grid grid-cols-2 gap-4 px-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                    <p className='pt-4'>// Submit the form below or shoot me an email - ratchapon.pk@outlook.com //</p>
                </div>
                <div>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
                        <p className='pt-4'>// Submit the form below or shoot me an email - ratchapon.pk@outlook.com //</p>
                    </div>
                    <form method='POST' action='https://getform.io/f/865f4b0f-af0b-43d8-a251-113eb981f8ff' className='max-w-[600px] w-full mx-auto flex flex-col'>
                        <div className='flex flex-col gap-4'>
                            <input className='p-2'  type='text' name='name' placeholder='name'/>
                            <input className='p-2'  type='email' name='email' placeholder='Email'/>
                            <textarea className='p-2' name='message' rows={10} placeholder='Message'/>
                            <button className='border-2 border-black rounded-lg px-4 py-3 mx-auto hover:bg-[#9356c8] hover:border-[#9356c8] hover:text-gray-200'>Send</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact