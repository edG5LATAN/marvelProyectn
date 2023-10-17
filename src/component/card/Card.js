import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

function Card({data}) {
  return (
    <div className="card">
      <div className="card-contenedor-img">
        <Link to={`/home2/${data.id}`}>
         <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="card" />
        </Link>
      </div>
      <p>{data.name}</p>
      <h6 className="card-h">modify:{data.modified}</h6>
      {/* <p>{data.description}</p> */}
    </div>
  );
}

export default Card;
