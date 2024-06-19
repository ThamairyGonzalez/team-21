import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container } from '@chakra-ui/react'
import {Header} from './componets/header/Header'
import { Footer } from './componets/footer/Footer'

function App() {


  return (
    <Container>
      <Header/>
      <Footer/>
    </Container>
  )
}

export default App
