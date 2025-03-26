import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'


const Defaultlayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Defaultlayout