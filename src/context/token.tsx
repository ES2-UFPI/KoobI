import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext(null);

interface TokenProviterProps {
  children: ReactNode;
}

const UserProvider = (props: TokenProviterProps) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;