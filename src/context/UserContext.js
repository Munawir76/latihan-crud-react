import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { appConfig } from "../config/app";

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
      .get(`${appConfig.baseUrl}/users`, {
        signal: controler.signal,
        headers: {
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
