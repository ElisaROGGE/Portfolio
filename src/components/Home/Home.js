import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../../App.css'
import elisa from '../../assets/img/elisa.png'

export default function Home() {

  return (
    <>
    <Navbar />
      <main className='w-full h-full'>
          <div className='home-page w-full h-screen my-0 px-10 z-10 top-1/4 pt-32 bg-gradient-to-br from-white to-gray-300'>
            <div className="text-zone left-20 w-11/12">
              <div className='flex w-full xs:flex-col'>
                <div className='w-1/2 xs:w-full'>
                <h1 className='text-6xl mb-16 xs:text-3xl xs:mb-5 xs:text-center text-dark text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]'>Bonjour, je m'appelle Elisa Rogge<br/></h1>
                <h2 className='text-gray-800 text-2xl tracking-wider mb-16 xs:mb-5 xs:text-center'>Développeuse web Full-Stack</h2>
                </div>
                <div className="logo flex w-1/2 xs:w-full justify-end items-center xs:justify-center">
                  <img className='w-96 xs:relative xs:w-64' src={elisa} alt='elisa-rogge'></img>
                </div>
              </div>
              <div className='flex xs:justify-center xs:mt-5'>
              <Link to="/contact" className='contact-home text-black text-2xl tracking-widest px-4 py-2 border-2 border-solid border-black float-left hover:bg-black hover:text-white'>Contactez-moi !</Link>
              </div>
            </div>
             
            </div>
      </main> 
    </>
  )
}
