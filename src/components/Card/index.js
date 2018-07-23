import React from "react";
import "./style.css";
import classnames from "classnames";
import Button from "../Button";

export default ({ imageSrc, title, handleClick, selected, id }) => {
  return (
    <div className={classnames("card", { selected: selected === id })}>
      <img src={imageSrc} alt={title} className="image" />
      <div className="description">
        <p>{title}</p>
        <Button handleClick={handleClick}>
          <span role="img" aria-label="Reproducir">
            🎵
          </span>
        </Button>
      </div>
    </div>
  );
};
