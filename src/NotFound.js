import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="home center">
      <h1 className="fw-400">
        Sorry, but the page you are looking for doesn't exist.
      </h1>
      <h3 className="muted fw-400 m-0">
        please{" "}
        <Link className="muted fw-700" to="/">
          select your project
        </Link>
        ,
      </h3>
      <h3 className="muted fw-400">
        or{" "}
        <a className="muted fw-700" href="https://jackgeorge.xyz">
          go back
        </a>{" "}
        to jackgeorge.xyz.
      </h3>
    </div>
  );
}
