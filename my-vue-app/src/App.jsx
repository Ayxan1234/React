import React from 'react'
import Header from './components/Header/Header'
import OneSection from './components/Main/Onesection/OneSection'
import TwoSection from './components/Main/Twosection/TwoSection'
import ThreeSection from './components/Main/Threesection/ThreeSection'
import FourSection from './components/Main/Foursection/FourSection'
import FiveSection from './components/Main/Fivesection/FiveSection'
import SixSection from './components/Main/Sixsection/SixSection'
import SevenSection from './components/Main/Sevensection/SevenSection'
import EightSection from './components/Main/Eightsection/EightSection'
import Footer from './components/Footer/Footer'



const App = () => {
  return (
    <>
      <Header/>
      <main>
        <OneSection/>
        <TwoSection/>
        <ThreeSection/>
        <FourSection/>
        <FiveSection/>
        <SixSection/> 
        <SevenSection/> 
        <EightSection/> 
      </main>
      <Footer/>
  
    </>
  )
}

export default App