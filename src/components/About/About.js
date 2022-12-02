import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from './Card'
import Slider from './Slider'

export default function About() {
  return (
    <>
    <Navbar />
    <div className='h-full w-full overflow-hidden'>
      <div className='about-page w-full my-0 mx-auto z-10 pt-32 pb-20'>
          <div className='text-zone w-full pb-10 px-10 text-center'>
              <h1 className='text-5xl mb-10 left-2 relative text-dark text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]'>À propos de moi</h1>
              <p className='text-2xl'>Je m'appelle Élisa, j'ai 23 ans, et suis actuellement diplômée d'un BAC+2 en développement web. Celui-ci m'a permis d'acquérir une expérience de 6 mois en tant que développeuse front-end dans une agence web.</p>
              <p className='text-2xl'>Étant toujours en veille des nouvelles technologies, j'aimerais trouver une alternance afin de
                  continuer à développer mes compétences dans ce domaine qui me passionne.</p>
              <p className='text-2xl'>Cela permettrait de satisfaire ma curiosité en travaillant sur divers projets ; mais
                également d'approfondir mes capacités en parallèle de mes recherches en autodidacte.</p>
          </div>
          <Card />
      </div>
      <div className=''>
        <h2 className='text-center text-4xl mb-0 text-dark text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px]'>Mes réalisations</h2>
        <h3 className='text-center text-2xl mt-5'>Durant mon expérience professionnelle, j'ai pu réaliser de nombreux sites, vitrine ou e-commerce.</h3>
        <Slider />
      </div>
    </div>
    </>
    

  )
}
