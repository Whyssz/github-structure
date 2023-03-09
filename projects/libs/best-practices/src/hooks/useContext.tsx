// 1
import { FC, PropsWithChildren, createContext, useContext } from "react";

import { TypeComponentAuthFields } from "@/shared/types/auth.types";

export const useAuthContext = () => useContext(AuthContext);

export const AuthContext = createContext<TypeComponentAuthFields>(
  {} as TypeComponentAuthFields
);

type AuthContextComponent = TypeComponentAuthFields & TypeComponentAuthFields;

export const AuthProvider: FC<PropsWithChildren<AuthContextComponent>> = ({
  Component,
  children,
}) => {
  return (
    <AuthContext.Provider value={{ Component }}>
      {children}
    </AuthContext.Provider>
  );
};

/* 2 change function in context
import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};
*/ 
