import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Componies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import Display from './components/Display Box/Display'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div className='App relative overflow-x-clip '>
    <div className="head-hero bg-[#131110]">
      <div className="white-gradient absolute bg-[#8e8d8d] w-[20rem] h-[20rem] blur-[100px] rounded-full"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Display/>
      <Footer/>
    </div>
    </>
  )
}

export default App
