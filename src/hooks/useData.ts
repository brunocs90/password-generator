import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

export function useData() {
    const context = useContext(DataContext);
    return context;
}
