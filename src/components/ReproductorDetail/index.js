import React from "react";
import "./style.css";

export default ({ image, title, artists, album }) => {
  return (
    <div
      className="reproductor-detail"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={image} alt={title} className="image" />
      <div className="detail">
        <p>Título: {title} </p>
        <p>Artistas:</p>
        <ul>{artists.map(a => <li>{a.name}</li>)}</ul>
        <p>Albúm: {album}</p>
      </div>
    </div>
  );
};
