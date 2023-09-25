import React from 'react'
import Header from './Header'
import Body from './Body'
// import MainPageImg from './MainPageImg'


const AppLayout = () => {
  return (
    <div>
        <Header/>
        {/* body should be in outlet */}
        <Body/>
        

    </div>
  )
}

export default AppLayout