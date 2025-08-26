import React, { createContext, useState } from 'react';
import { CepData } from '../types/ceptypes';

interface CepContextType {
  data: CepData | null;
  setData: (cep: CepData) => void;
}

export const CepContext = createContext<CepContextType>({
  data: null,
  setData: () => {},
});

export const CepProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CepData | null>(null);

  return (
    <CepContext.Provider value={{ data, setData }}>
      {children}
    </CepContext.Provider>
  );
};
