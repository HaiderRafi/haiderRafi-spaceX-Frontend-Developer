import React from 'react'
import Header from './Header'
import Body from './Body'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import MainPageImg from './MainPageImg'


const AppLayout = () => {
  return (
    <div>
        <Header/>
        {/* body should be in outlet */}
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
        

    </div>
  )
}

export default AppLayout