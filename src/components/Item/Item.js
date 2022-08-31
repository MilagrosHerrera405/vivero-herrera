import "./Item.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ info }) => {
  return (
    <div className="film">
      <div className="card text-center">
        <p className="title">{info.title}</p>
        <img className="card-img-top" src={info.image} alt="" />
        <div className="card-body text light">
          <a href={"#"} className="btn btn-outline-success">
            Ver detalle del producto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
