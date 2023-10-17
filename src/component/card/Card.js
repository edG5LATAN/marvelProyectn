import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

function Card({data}) {
  return (
    <div className="card">
      <div className="card-contenedor-img">
        <Link to={`/home2/${data.id}`}>
         <img className="card-img" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="card" />
        </Link>
      </div>
      <p className="card-p">{data.name}</p>
      <div className="card-contenedor-p">
       <h6 className="card-h6">modify:{data.modified}</h6>
      </div>
    </div>
  );
}

export default Card;
