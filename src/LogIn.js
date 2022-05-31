import React from "react";
import Button from "./Button";

export default function LogIn({ client }) {
  return (
    <div className="home">
      <h1>
        Log into{" "}
        <a
          className="fw-700"
          href={`https://${client.text}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {client.text}
        </a>
      </h1>
      <h3 className="muted m-0">
        or email{" "}
        <a className="muted fw-700" href="mailto:jack@jackgeorge.xyz">
          jack@jackgeorge.xyz
        </a>{" "}
        if you need assistance,
      </h3>
      <h3 className="muted">
        or{" "}
        <a className="muted fw-700" href="jackgeorge.xyz">
          go back
        </a>{" "}
        to jackgeorge.xyz.
      </h3>
      <form action="">
        <div className="form-section">
          <label htmlFor="email">
            <h2>email:</h2>
          </label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div className="form-section">
          <label htmlFor="password">
            <h2>password:</h2>
          </label>
          <input type="password" name="password" placeholder="password" />
        </div>
        <Button
          client={{ img: client.img, text: "log in", link: undefined }}
          i={["blue", "yellow", "pink"][Math.floor(Math.random() * 3)]}
        />
      </form>
    </div>
  );
}
