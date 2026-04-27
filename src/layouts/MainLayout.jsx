import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='bg-[#0a0a0a] min-h-screen text-white flex flex-col'>
      <Navbar/>
      <main className='flex-1'><Outlet/> </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
