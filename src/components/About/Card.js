import React from 'react'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import javascript from '../../assets/img/js.png'
import php from '../../assets/img/php.png'
import mysql from '../../assets/img/mysql.png'
import react from '../../assets/img/react.png'
import nodejs from '../../assets/img/nodejs.png'
import mongodb from '../../assets/img/mongodb.png'

export default function Card() {
  return (
    <><div className='text-center grid xl:grid-cols-4 xl:grid-rows-4 w-2/4 gap-y-10 xs:grid-cols-1 xs:grid-rows-1 md:grid-rows-2 md:grid-cols-2'>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={html} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">HTML</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={css} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">CSS</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={javascript} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Javascript</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={react} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">React</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={php} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">PHP</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={mysql} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">MySQL</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={nodejs} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">NodeJS</h5>
            </div>
          </div>
          <div className="container-card w-full h-40  mr-8 max-w-sm xs:w-2/4 md:w-3/4 bg-pink border border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="image-card object-cover h-full w-full xs:w-full md:w-full rounded-lg bg-purple" src={mongodb} alt="" />
            <div className="overlay-card pr-5 h-full"> 
                <h5 className="text-card mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">MongoDB</h5>
            </div>
          </div>
      </div>
    </>
  )
}
