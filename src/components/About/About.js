import React from 'react'
import Card from './Card'
import php from '../../assets/img/php.png'

export default function About() {
  return (
    <div className='about-page w-full flex justify-end absolute my-0 mx-auto z-10 top-1/4'>
        <div className='text-zone absolute left-20 w-1/3'>
            <h1 className='text-5xl mb-10 left-2 relative'><span className='balise text-purple font-bold text-lg absolute -mt-10'>{`<h1>`}</span>A propos de moi<br/><span className='balise text-purple font-bold text-lg absolute mt-5'>{`</h1>`}</span></h1>
            <p>Je m'appelle Elisa, j'ai 23 ans, je suis actuellement diplômée d'un BAC+2 en développement web et j'ai une expérience de 6 mois en tant que développeuse front-end dans une agence web.</p>
            <p>Je cherche une alternance pour continuer à développer mes compétences dans ce domaine qui me passionne.
                Je suis toujours en veille des nouvelles technologies et j'aime apprendre.</p>
            <p>Je suis curieuse, travaillant perpétuellement sur différents projets.</p>
        </div>
        <Card />
    </div>
  )
}
