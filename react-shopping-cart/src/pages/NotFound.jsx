import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section id='not-found'>
        <h1>Error <span>404</span></h1>
        <p>Seems like you got lost</p>
        <Link to='/'>Go to Home Page</Link>
    </section>
  )
}

export default NotFound