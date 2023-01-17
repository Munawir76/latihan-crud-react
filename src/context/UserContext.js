import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext([
  {
    name: true,
  },
]);

export const UserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState();
  useEffect(() => {
    const controler = new AbortController();
    axios
      .get(`http://localhost:3000/users`, {
        signal: controler.signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`, //Add this line
        },
      })
      .then((res) => {
        setDataUser(res);
      });
    return () => {
      controler.abort();
    };
  }, []);

  return (
    <UserContext.Provider value={dataUser}>{children}</UserContext.Provider>
  );
};
