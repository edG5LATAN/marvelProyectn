import React, { useEffect, useState } from 'react'
import './Comic.css'
import { Link, useParams } from 'react-router-dom';
import Card2 from '../cardSerie.js/Card2.js';
import Cargando from '../cargando/Cargando.js';
import { comicId } from '../../service/apiMarvel';

function Comic() {

  const { id } = useParams();
  const[data,setdata]=useState([])
  
  useEffect(() => {
    comicId(id,setdata)
  },[id])

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

export default Comic
