import React from "react";
import { Link } from "react-router-dom";

export default function Button({ client, i }) {
  return (
    <div className="button-wrapper">
      <button className="back">
        <span className="fake-anchor">
          <img src={client.img} alt={`${client.text} favicon`} />
          <h3>{client.text}</h3>
        </span>
      </button>
      <button
        className={
          i % 3 === 0
            ? "front blue"
            : i % 3 === 1
            ? "front yellow"
            : "front pink"
        }
      >
        {client.link ? (
          <Link to={`/${client.link}`}>
            <img src={client.img} alt={`${client.text} favicon`} />
            <h3>{client.text}</h3>
          </Link>
        ) : (
          <span className="fake-anchor">
            <img src={client.img} alt={`${client.text} favicon`} />
            <h3>{client.text}</h3>
          </span>
        )}
      </button>
    </div>
  );
}
