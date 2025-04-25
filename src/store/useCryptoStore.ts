import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import cryptoData from '../utils/db';
import { Crypto } from '../utils/db';

type Store = {
  rows: Crypto[];
  selectedFilter: string;
  sortBy: keyof Crypto;
  sortDir: "asc" | "desc";
  //Methods
  simulatePrices: () => void;
  setFilter: (filter: string) => void;
  setSortBy: (column: keyof Crypto) => void; 
  setSortDir: (direction: "asc" | "desc") => void;
};

export const useCryptoStore = create<Store>()(
  persist(
    (set) => ({
      rows: [...cryptoData],
      selectedFilter: 'all',
      sortBy: 'marketCap' as keyof Crypto,
      sortDir: 'desc' as "asc" | "desc",
      
      // Actions
      setFilter: (filter: string) => set({ selectedFilter: filter }),
      setSortBy: (column: keyof Crypto) => set({ sortBy: column }),
      setSortDir: (direction: "asc" | "desc") => set({ sortDir: direction }),
      
      simulatePrices: () => set((state) => {
        const newRows = state.rows.map((coin) => {
          const change = parseFloat((Math.random() * 2 - 1).toFixed(3));
          const price = +(coin.price * (1 + change / 100)).toFixed(3);
          
          return {
            ...coin,
            price,
            change1h: change,
            change24h: parseFloat((Math.random() * 5 - 2.5).toFixed(3)),
            change7d: parseFloat((Math.random() * 10 - 5).toFixed(3)),
          };
        });
        return { rows: newRows };
      }),
    }),
    {
      name: 'crypto-storage',
      partialize: (state) => ({ 
        selectedFilter: state.selectedFilter,
        sortBy: state.sortBy,
        sortDir: state.sortDir
      }),
    }
  )
);
