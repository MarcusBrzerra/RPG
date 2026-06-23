import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
import Ficha from './pages/Ficha'
import Personagem from './pages/Personagem'
import Layout from './components/Layout'
import Error from './pages/Error'

function App() {

  return (
    <Routes>
      <Route element={ <Layout />}>
        <Route path='/' element={ <Inicio /> }/>
        <Route path='/ficha' element={ <Ficha /> }/>
        <Route path='/personagem' element={ <Personagem /> }/>
      </Route>
      <Route path='*' element={ <Error /> } />
    </Routes>
  )
}

export default App