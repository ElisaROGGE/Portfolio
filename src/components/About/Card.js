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
    <><div className='text-center ml-10 grid xl:grid-cols-4 xl:grid-rows-2 w-full gap-y-10 xs:grid-cols-1 xs:grid-rows-1 md:grid-rows-2 md:grid-cols-2'>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className=' absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={html} alt="html" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">HTML</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={css} alt="css" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">CSS</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={javascript} alt="javascript" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">JavaScript</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={react} alt="react" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">React</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={php} alt="php" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">PHP</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={mysql} alt="mysql" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">MySQL</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute backface-hidden w-full h-full'>
                <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={nodejs} alt="nodejs" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">NodeJS</h5>
              </div>
            </div>
          </div>
          <div className="container-card bg-transparent cursor-pointer group perspective w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
              <div className='absolute w-full h-full'>
                <img className="image-card object-cover h-full w-full xs:w-full md:w-full rounded-lg bg-gray-900 shadow-2xl" src={mongodb} alt="" />
              </div>
              <div className="flex justify-center items-center absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100"> 
                  <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">MongoDB</h5>
              </div>
            </div>
          </div>  
      </div>
    </>
  )
}
