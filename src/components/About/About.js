import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from './Card'
import Slider from './Slider'

export default function About() {
  return (
    <>
    <Navbar />
    <div className='h-full w-full'>
      <div className='about-page w-full my-0 mx-auto z-10 pt-32 pb-20 bg-gradient-to-br from-white to-gray-300'>
          <div className='text-zone ml-10 w-full mb-10'>
              <h1 className='text-5xl mb-10 left-2 relative'>A propos de moi<br/></h1>
              <p>Je m'appelle Elisa, j'ai 23 ans, je suis actuellement diplômée d'un BAC+2 en développement web et j'ai une expérience de 6 mois en tant que développeuse front-end dans une agence web.</p>
              <p>Je cherche une alternance pour continuer à développer mes compétences dans ce domaine qui me passionne.
                  Je suis toujours en veille des nouvelles technologies et j'aime apprendre.</p>
              <p>Je suis curieuse, travaillant perpétuellement sur différents projets.</p>
          </div>
          <Card />
      </div>
      <div className=''>
        <h2 className='text-center text-4xl mb-0'>Mes réalisations</h2>
        <Slider />
      </div>
    </div>
    </>
    

  )
}
