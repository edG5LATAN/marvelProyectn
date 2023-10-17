import React from 'react'
import './Card2.css'

function Card2({data}) {
  
  return (
    <div className='card2'>
      <div className="card2-contenedor">
      <div className="card2-contenedor-img">
         <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="card2" />
      </div>
      <div className='card2-informacion'>
        <h2>{data.title}</h2>
        <h6>modify:{data.modified}</h6>
        <p>{data.description}</p>
      </div>
      
    </div>
  </div>
  )
}

export default Card2
