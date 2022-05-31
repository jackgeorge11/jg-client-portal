import React from "react";

export default function LogIn({ client }) {
  return (
    <div className="home">
      <h1>Log In</h1>
      <h3 className="muted m-0">
        email{" "}
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
            <h3>email:</h3>
          </label>
          <input type="email" name="email" />
        </div>
        <div className="form-section">
          <label htmlFor="password">
            <h3>password:</h3>
          </label>
          <input type="password" name="password" />
        </div>
      </form>
    </div>
  );
}
