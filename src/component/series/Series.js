import React, { useEffect, useState } from 'react'
import './Series.css'
import { Link, useParams } from 'react-router-dom';
import Card2 from '../cardSerie.js/Card2.js';
import Cargando from '../cargando/Cargando.js';
import { seriesId } from '../../service/apiMarvel';

function Series() {

  const { id } = useParams();
  const[data,setdata]=useState([])

  
  useEffect(() => {
   seriesId(id,setdata)
  }, [id])

  console.log(data)
  return (
    <div className='comic'>
      <Link to={`/home2/${id}`}>
        <button className='comic-btn'>Return</button>
      </Link>
      <div className='contenedor-comic'>
      {
         data.length>0 ?
         <>
         {
          data.map((res,index)=>{
            return <Card2 key={index} data={res} />
          })
         }
         </>
         :<Cargando />
 
       }
      </div>
    </div>
  )
}

export default Series
