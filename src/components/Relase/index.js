import React from "react";
import "./style.css";

export default ({ title, artists, ranking, image }) => {
  return (
    <div className="relase">
      <h1 className="title"> {title ? title : "Título"} </h1>
      <p>Artistas</p>
      <ul>
        {artists && artists.map((a, index) => <li key={index}> {a.name} </li>)}
      </ul>
      <p>Popularidad</p>
      <p> {ranking ? ranking : 0} / 100 </p>
      <img src={image} alt={title} />
    </div>
  );
};
