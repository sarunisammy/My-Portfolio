import React from 'react'
import FAQs from '../../component/FAQs'
import Footer from '../../component/Footer'
import MainHeader from '../../component/MainHeader'
import Programs from '../../component/Programs'
import Testimonials from '../../component/Testimonials'
import Values from '../../component/Values'
import Conduct from '../Conduct/Contact'
import './Home.css'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
  
    {/* <Footer/> */}
   
    </>
   

  )
}

export default Home