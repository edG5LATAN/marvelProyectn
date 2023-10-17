import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from '../card/Card'
import { mostrarLista } from '../../service/apiMarvel'
import Page from '../page/Page'
import Cargando from '../cargando/Cargando'

function Home() {

  const [data, setdata] = useState([])
  const [page,setpage]=useState(0)

  useEffect(() => {
    mostrarLista(page,setdata)
  }, [page])
  

  return (
    <div className='home'>
      <Page page={page} setpage={setpage} />
      <div className='home-contenedor-cards'>
       {
         data.length>0 ?
         <>
         {
          data.map((res,index)=>{
            return <Card key={index} data={res} />
          })
         }
         </>
         :<Cargando />
         
         
         
       }

      </div>
    </div>
  )
}

export default Home
