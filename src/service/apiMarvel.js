import axios from "axios"

export const mostrarLista=(page,setdata)=>{
  const urlmarvel =`https://gateway.marvel.com/v1/public/characters?offset=${page}&ts=1&apikey=2b47561ad110f7c9f98eb60beb13685b&hash=134f9effb44638621e33997188d79e93`

  try {
    axios.get(urlmarvel)
   .then(res=>{
    setdata(res.data.data.results)
   })
   .catch(error=>console.log(error))
  } catch (error) {
    
  }
   
}
export const mostraPorId=(id,setdata)=>{
  const urlmarvel=`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=2b47561ad110f7c9f98eb60beb13685b&hash=134f9effb44638621e33997188d79e93`
  try {
    axios.get(urlmarvel)
   .then(res=>{
    setdata(res.data.data.results)
   })
   .catch(error=>console.log(error))
  } catch (error) {
    console.log(error)
  }
  
}

