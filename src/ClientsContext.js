import React, { createContext } from "react";

export const ClientContext = createContext([]);

export const ClientProvider = (props) => {
  const clients = [
    {
      img: "https://9vtbackslash5.com/icons/icon-512x512.png?v=4f0253e8404268a2f7210ab7b3a0116e",
      text: "9vtbackslash5.com",
      link: "9vtbackslash5",
    },
    {
      img: "https://becketcerny.com/icons/icon-512x512.png?v=c0779451316903e276772f69c579b1fa",
      text: "becketcerny.com",
      link: "becketcerny",
    },
    {
      img: "https://evatellier.com/icons/icon-512x512.png?v=c13969da4d6f77a59f20749ee1083a67",
      text: "evatellier.com",
      link: "evatellier",
    },
    {
      img: "https://courtdesignsinc.com/cd-favicon.png",
      text: "courtdesignsinc.com",
      link: "courtdesignsinc",
    },
  ];

  return (
    <ClientContext.Provider value={clients}>
      {props.children}
    </ClientContext.Provider>
  );
};
