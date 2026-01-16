import { createContext, useContext, useState } from "react";
import { tenants } from "../tenants.js";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [tenant, setTenant] = useState("A");
  const [role, setRole] = useState("Admin");
  const [data, setData] = useState(tenants["A"]);

  const switchTenant = (org) => {
    setTenant(org);
    setData(tenants[org]);
  };

  return (
    <AppContext.Provider value={{ tenant, role, setRole, data, setData, switchTenant }}>
      {children}
    </AppContext.Provider>
  );
};
