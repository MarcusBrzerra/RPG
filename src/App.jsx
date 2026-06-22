import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Ficha from './pages/Ficha'
import Personagem from './pages/Personagem'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Inicio /> }/>
      <Route path='/ficha' element={ <Ficha /> }/>
      <Route path='/personagem' element={ <Personagem /> }/>
    </Routes>
  )
}

export default App