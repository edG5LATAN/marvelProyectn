import axios from "axios";


export const seriesId=(id,setdata)=>{
    const urlc=`http://gateway.marvel.com/v1/public/characters/${id}/series?apikey=2b47561ad110f7c9f98eb60beb13685b&hash=134f9effb44638621e33997188d79e93&ts=1`
    try {
        axios.get(urlc)
       .then(res=>{
        setdata(res.data.data.results)
       })
       .catch(error=>console.log(error))
      } catch (error) {
        console.log(error)
      }
}