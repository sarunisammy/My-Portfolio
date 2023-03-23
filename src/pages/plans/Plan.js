import React from 'react'
import Header from '../../component/Header'
import HeaderImage from '../../photos/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../data'
import './Plan.css'
const Plan = () => {
  return (
    <>
    <Header title="Membership plans" image={HeaderImage}>
    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,

    </Header>
    <section className='plans'>
      <div className='container plans__container'>
        {
          plans.map(({id, name, desc, price,features})=>{
            return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>features</h4>
              {
                features.map(({feature, available}, index)=>{
                  return<p key={index} className={!available? 'disabled' : ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plan