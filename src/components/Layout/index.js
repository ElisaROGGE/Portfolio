import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
// import Home from '../Home'

export default function Layout() {
  return (
    <div className='App w-full h-full absolute bg-gradient'>
        <Navbar />
        <div className="page w-full h-full">
            <span className="balise top-tags bottom-auto top-20 text-purple font-bold opacity-60 absolute left-10 text-sm">&lt;body&gt;</span>
            <Outlet />
            <span className="balise bottom-tags text-pink font-bold opacity-60 absolute bottom-0 left-10 text-sm">
                &lt;body&gt;
                <br />
                <span className="balise bottom-tag-html text-pink font-bold opacity-60 absolute bottom-0 -m-5 text-sm">&lt;/html&gt;</span>
            </span>
        </div>
    </div>
  )
}
