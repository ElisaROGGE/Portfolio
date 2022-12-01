import React from 'react'
import html from '../../assets/img/html5.svg'
import css from '../../assets/img/Css3.svg'
import javascript from '../../assets/img/javascript.svg'
import php from '../../assets/img/php.svg'
import mysql from '../../assets/img/mysql.png'
import react from '../../assets/img/reactsansnom.svg'
import nodejs from '../../assets/img/nodejs.svg'
import mongodb from '../../assets/img/mongodb.png'

export default function Card() {
  return (
    <><div className='text-center ml-10 grid xl:grid-cols-4 xl:grid-rows-2 w-full gap-y-10 xs:flex xs:flex-col xs:items-center xs:ml-0 md:grid-rows-2 md:grid-cols-2'>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className=' absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={html} alt="html" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Structuration de la page ou d'une application, intégration d'HTML dans du JSX </h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>HTML</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={css} alt="css" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Stylisation de la page, maitrise du display (flex, grid), responsive design</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>CSS</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={javascript} alt="javascript" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Création d'évènements avec des algorithmes pour faire des animations</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>Javascript</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={react} alt="react" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Manipulation de composants, utilisation de react redux toolkit et redux persist pour un ajout de panier.</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>ReactJS</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={php} alt="php" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Relation de la base de données avec MySQL, sécurité sur des données entrées en formulaire avec des regex</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>PHP</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={mysql} alt="mysql" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Traitement de la base de données avec des requêtes SQL en PHP, base de données située sur phpmyadmin</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>MySQL</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4  border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={nodejs} alt="nodejs" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                  <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Traitement de la base de données avec des requêtes faites avec mongoose en NoSQL pour la récupération de données</h5>
              </div>
            </div>
            <span className='text-2xl font-bold'>NodeJS</span>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700'>
            <div className='absolute w-full h-full'>
              <img className="image-card object-cover h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={mongodb} alt="" />
            </div>
            <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-900 rounded-lg "> 
                <h5 className="text-card mb-2 text-xl font-bold tracking-tight text-white dark:text-white ">Création d'une base de données en NoSQL avec MongoDB</h5>
            </div>
          </div>
          <span className='text-2xl font-bold'>MongoDB</span>
          </div>  
      </div>
    </>
  )
}
