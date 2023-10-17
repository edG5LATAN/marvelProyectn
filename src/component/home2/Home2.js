import React, { useEffect, useState } from 'react'
import './Home2.css'
import Cargando from '../cargando/Cargando'
import { mostraPorId } from '../../service/apiMarvel'
import { Link, useParams } from 'react-router-dom'

function Home2() {

  const { id } = useParams();
  const [data, setdata] = useState([])



  useEffect(() => {
    mostraPorId(id, setdata)
  }, [id])



  return (
    <>
      {
        data.length>0 ? <>{
          data.map((res, index) => {
            return <div className='home2' key={index}>
              <div className='home2'>
                <div className='home2-contenedor-card'>
                  <img src={`${res.thumbnail.path}.${res.thumbnail.extension}`} alt='prueba' />
                  <div className='home2-contenedor2-card'>
                    <h2>{res.name}</h2>
                    <p>{res.description}</p>

                    <div className='home2-botones'>
                      <Link to={`/comic/${res.id}`}>
                        <button>Comics</button>
                      </Link>
                      <Link to={`/series/${res.id}`}>
                        <button>series</button>
                      </Link>
                      
                    </div>
                  </div>
                </div>

              </div>
            </div>
          }
          )
        
        }
        
       
      </> :<Cargando />
    }
    </>
    )
}

      export default Home2
