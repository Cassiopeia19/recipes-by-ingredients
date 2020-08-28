import React from "react";
import FavoritesContext from '../../context/favoritesContext'
import './FavoritesItem.css'

export default function FavoritesItem({label,image,url,ingredients}) {
  //favorites context
  return (
    <article className="favorites-item">
      <div>
        <h4>{label}</h4>
        <img src={image} alt="" />
        <h5>{url}</h5>
        <h5>{ingredients}</h5>
        <button type="button" className="favorites-btn remote-btn">remove</button>
      </div>
    </article>
  );
}
