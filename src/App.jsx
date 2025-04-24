import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Layouts/Header/Header'
import { MainContainer } from './Components/Layouts/MainContainer/MainContainer'
import { Footer } from './Components/Layouts/Footer/Footer'

export function App() {

  return (
    <>
    <Header />
    <MainContainer />
    <Footer />
    </>
  )
}

