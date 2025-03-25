import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'


const Defaultlayout = () => {
  return (
    <div>
        <NavBar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Defaultlayout