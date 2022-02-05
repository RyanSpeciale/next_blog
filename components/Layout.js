import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}