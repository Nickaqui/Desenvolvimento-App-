import { useContext } from 'react';
import { CepContext } from '../contexts/Cepcontext';

export const useCep = () => useContext(CepContext);
