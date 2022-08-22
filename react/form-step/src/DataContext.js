import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataProvider.Provider values={{ data, setValues }}>
      {children}
    </DataProvider.Provider>
  );
};

export const useData = () => useContext(DataContext);
