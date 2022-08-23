import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <p>Page Not Found</p>
        <Link to='/'>Go to Home Page</Link>
    </div>
  )
}

export default NotFound