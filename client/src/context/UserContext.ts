import React, { createContext } from "react";

interface UserProps {
  user: {
    token: string | null;
    user: {
      id: string | undefined;
      username: string | undefined;
    } | null;
  };
  setUser: React.SetStateAction<any>;
}

export default createContext<UserProps | null>(null);
