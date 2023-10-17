import React from 'react'
import './Page.css'

function Page({page,setpage}) {

const suma=()=>{
  if(page>1500){
    return
  }
  setpage(page=page+20)
}
const resta=()=>{
  if(page<=0){
    return
  }
  setpage(page=page-20)
}

  return (
    <div className='page'>
      <button onClick={()=>resta()}>after</button>
      <input type="number" readOnly value={page}/>
      <button onClick={()=>suma()}>next</button>
    </div>
  )
}

export default Page
