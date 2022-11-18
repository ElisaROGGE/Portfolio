import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../../App.css'
import elisa from '../../assets/img/elisa.png'

export default function Home() {
  return (
    <>
    <Navbar />
      <main className='px-10 '>
          <div className='home-page w-full absolute my-0 mx-auto z-10 top-1/4'>
            <div className="text-zone absolute left-20 w-11/12">
              <h1 className='text-6xl mb-16'><span className='balise text-purple font-bold text-lg absolute -mt-10'>{`<h1>`}</span>Bonjour, je suis Elisa Rogge<br/><span className='balise text-purple font-bold text-lg absolute mt-5'>{`</h1>`}</span></h1>
              <div className="logo flex justify-end items-center xs:justify-center">
                <img className='absolute w-96 xs:relative xs:w-64' src={elisa} alt='elisa-rogge'></img>
              </div>
              <h2 className='text-gray-800 text-2xl tracking-wider mb-16'>Développeuse web Full-Stack</h2>
              <Link to="/contact" className='contact-home text-purple text-2xl tracking-widest px-4 py-2 border-2 border-solid border-purple float-left hover:bg-purple hover:text-black'>Contactez-moi !</Link>
            </div>
          </div>
      </main>

      
    </>
  )
}
