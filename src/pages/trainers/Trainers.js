import React from 'react'
import Header from '../../component/Header';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import HeaderImage from '../../photos/header_bg_5.jpg'
import { trainers } from '../../data';
import './Trainers.css'
import Trainer from '../../component/Trainer';





const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage} >
    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,

    </Header>
    <section className='trainers'>
      <div className='container trainers__container'>
        {
          // map through the trainers data from data.js
          // import the Trainer file and pass through the props
          
          trainers.map(({id, image, name, job, socials})=>{
            return<Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: < FaLinkedin/>, link: socials[3]},
              
              ]
            }>
              
            </Trainer>
          })
        }

      </div>
    </section>
    </>
  )
}

export default Trainers