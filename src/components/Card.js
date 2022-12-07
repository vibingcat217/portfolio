import React from "react";
import "./Card.css";

export default function Card({ title, img, caption, link, more }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={"Project screenshot"} />
        <div className="text-container">
          <h3>{title}</h3>
          <p className="caption">{caption}</p>
        </div>
      </a>
      <a href={more}>
        <button>Read more</button>
      </a>
    </div>
  );
}
