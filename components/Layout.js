import Navbar from './Navbar'
import React from 'react'
import Footer from './Footer'
import { CssBaseline } from '@mui/material'

export default function Layout({ children }) {
  return (
    <div>
      <CssBaseline>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </CssBaseline>
    </div>
  )
}