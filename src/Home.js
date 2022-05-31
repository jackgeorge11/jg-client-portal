import React, { useContext } from "react";
import Button from "./Button";
import { ClientContext } from "./ClientsContext";

export default function Home() {
  const clients = useContext(ClientContext);

  return (
    <div className="home">
      <h1>Select your project</h1>
      <h3 className="muted m-0">
        or email{" "}
        <a className="muted fw-700" href="mailto:jack@jackgeorge.xyz">
          jack@jackgeorge.xyz
        </a>{" "}
        for assistance,
      </h3>
      <h3 className="muted">
        or{" "}
        <a className="muted fw-700" href="jackgeorge.xyz">
          go back
        </a>{" "}
        to jackgeorge.xyz.
      </h3>
      {clients.map((client, i) => (
        <div
          className={
            i + 1 === clients.length && clients.length > 3
              ? "site center last"
              : "site center"
          }
        >
          <Button client={client}/>
        </div>
      ))}
    </div>
  );
}
