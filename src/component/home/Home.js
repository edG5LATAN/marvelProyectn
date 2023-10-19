import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from '../card/Card'
import { mostrarLista, searchName } from '../../service/apiMarvel'
import Page from '../page/Page'
import Cargando from '../cargando/Cargando'
import Name from '../name/Name'

function Home() {

  const [data, setdata] = useState([])
  const [page,setpage]=useState(0)
  const [name,setname]=useState('')

  useEffect(() => {
    mostrarLista(page,setdata)
  }, [page])
  
  useEffect(()=>{
     searchName(name,setdata)
  },[name])



  return (
    <div className='home'>
      <Name name={name} setname={setname} />
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
      <Page page={page} setpage={setpage} />
    </div>
  )
}

export default Home
