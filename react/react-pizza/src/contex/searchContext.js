import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const SearchContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <DataContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const useSearch = () => useContext(DataContext);
