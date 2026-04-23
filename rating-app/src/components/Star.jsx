import React from 'react'

function Star({ star, rating, hover, setRating, setHover }) {
  return (
    <span 
      className={`star ${rating >= star || hover >= star ? 'active' :''}`}
      onClick={() => setRating(star)}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
    >
        {'\u2605'}
    </span>
  )
}

export default Star
