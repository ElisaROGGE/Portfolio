import React from 'react'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {AiFillHome, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

export default function Navbar() {
  return (
    <section>
        <nav className='bg-purple h-16 w-full fixed top-0 z-10 min-h-500 border-r-2 border-b-white border-r-solid shadow'>
        <ul className='flex justify-around h-full'>
          <li>
            <Link to='/'>
              <img className='h-16 w-16' src={logo} alt="" />
            </Link>
          </li>
          <li>
            <div className='nav-links flex items-center text-center w-full h-full top-3'>
              <li>
                 <NavLink exact="true" activeclassname="active" to="/">
                  <AiFillHome className='text-3xl mx-5 relative transition hover:scale-125 hover:text-white active:text-white'/>
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" activeclassname="active" to="/about">
                  <FaUserAlt className='text-3xl mx-5 relative transition hover:scale-125 hover:text-white'/>
                </NavLink>
              </li>
            <li>
              <NavLink exact="true" className="active transition hover:scale-125" to="/contact">
                <BsFillEnvelopeFill className='text-3xl mx-5 relative transition hover:scale-125 hover:text-white'/>
              </NavLink>
            </li>
          </div>
          </li>
          <li>
          <div className='w-full h-full flex items-center'>
              <a className='text-2xl mr-5' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elisa-rogge-216b77159/">
                <AiFillLinkedin className='hover:text-white'/>
              </a>
              <a className='text-2xl' target="_blank" rel="noreferrer" href="https://github.com/ElisaROGGE">
                <AiFillGithub className='hover:text-white'/>
              </a>
          </div>
            </li>
          </ul>
        </nav>
    </section>
  )
}
