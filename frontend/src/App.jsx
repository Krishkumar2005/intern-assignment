import { use, useEffect, useState } from 'react'
import BusinessDataProvider from "./context/businessDataProvider"

import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  // useEffect(() => {
  //   fetchBusinessData()
  // }, [])



  return (
    <>
      <BusinessDataProvider>
        <Header />
        <Outlet />
      </BusinessDataProvider>
    </>
  )
}

export default App
