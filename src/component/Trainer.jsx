import React from 'react'
import Card from '../UI/Card'


// pass the porp children and map through to the socials
// import the re-used Card 
const Trainer = ({image, socials, job, name}) => {
  return (
    <Card className="trainer"> 
    <div className='trainer__image'>
        <img src={image} alt={name}/>
    </div>
    <h3>{name}</h3>
    <p>{job}</p>
    <div className='trainer__socials'>
        {
            socials.map(({icon, link} , index)=>{
                return<a key={index} href={link} target="_blank" rel='noreffer noopener'>{icon}</a>

            })
        }
    </div>
    </Card> 
  )
}

export default Trainer