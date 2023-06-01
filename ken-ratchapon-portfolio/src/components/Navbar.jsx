import React, { useState } from 'react'
import {FaBars, FaTimes,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../assets/resume/resume_620510660.pdf'
const logo = '<KenRatchapon />'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick =()=>{
        setNav(!nav)
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#041C32] text-[#ECB365] z-10'> 

            <div>
                <h1 className='font-bold text-3xl font-[Satisfy] text-[#ebebeb]'>{logo}</h1>
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" spy={true} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" spy={true} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>



            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/>:<FaTimes/>}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#434343] rounded-r-lg'>
                        <a className='flex justify-between items-center w-full text-gray-200' 
                        href="https://github.com/kenratchapon">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#06b39f] rounded-r-lg'>
                        <a className='flex justify-between items-center w-full text-gray-200' 
                        href={Resume} download="resume.pdf">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#eeb805] rounded-r-lg'>
                        <Link className='flex justify-between items-center w-full text-gray-200' to="contact" spy={true} smooth={true} duration={500}>
                            Contact
                            <HiOutlineMail size={30}/>
                        </Link> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar