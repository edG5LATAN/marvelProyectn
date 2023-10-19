import React, { useState } from 'react'
import './Name.css'

function Name({name,setname}) {

  const [dataname,setdataname]=useState('')
  const nombre=()=>{
    setname(dataname)
    setdataname('')
  }

  const buscar=(e)=>{
    e.preventDefault()
    setdataname(e.target.value)
  }


  return (
    <div className='name'>
      <input onChange={(e)=>buscar(e)} className='name-input' type="search" placeholder='seacrh the heroe' value={dataname} />
      <button onClick={nombre} className='name-button'>Search</button>
    </div>
  )
}

export default Name
