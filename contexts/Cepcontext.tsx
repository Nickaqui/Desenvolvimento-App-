import React, { createContext, useState } from 'react';
import { CepData } from '../types/ceptypes';

interface CepContextType {
  data: CepData | null;
  setData: (cep: CepData | null) => void;
  historico: CepData[];
  adicionarAoHistorico: (cep: CepData) => void;
}

export const CepContext = createContext<CepContextType>({
  data: null,
  setData: () => {},
  historico: [],
  adicionarAoHistorico: () => {},
});

export const CepProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<CepData | null>(null);
  const [historico, setHistorico] = useState<CepData[]>([]);

  const adicionarAoHistorico = (cep: CepData) => {
    setHistorico(prev => [...prev, cep]);
  };

  return (
    <CepContext.Provider value={{ data, setData, historico, adicionarAoHistorico }}>
      {children}
    </CepContext.Provider>
  );
};
