import React from "react";
import "./Card.css";

export default function Card({ title, img, caption, link, desc }) {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={"Project screenshot"} />
        <div className="text-container">
          <h2>{title}</h2>
          <p className="caption">{caption}</p>
          {desc}
        </div>
      </a>
      {/* <a href={more}>
        <button>Read more</button>
      </a> */}
    </div>
  );
}
