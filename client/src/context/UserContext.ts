import React, { createContext } from "react";

interface UserProps {
  user: {
    token: string | null;
    user: {
      id: string;
      username: string;
      balance: number;
    } | null;
  };
  setUser: React.SetStateAction<any>;
}

export default createContext<UserProps | null>(null);
