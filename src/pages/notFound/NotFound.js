import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'


const NotFound = () => {
  return (
    <article>
        <div className='container notfound__container'>
            <h2>Page Not Found!😑😥</h2>
            <Link to="/" className='btn' style={{
                padding:"1.1rem 1rem",
                background:"var(--color-primary)",
                borderRadius:"1rem",
                fontSize:"1.2rem",
                // color:"black"
            }}>Go back home🥰</Link>
        </div>
    </article>
  )
}

export default NotFound