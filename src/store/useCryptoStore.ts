import { create } from 'zustand';
import cryptoData from '../utils/db';
import { Crypto } from '../utils/db';


type Store = {
  rows: Crypto[];
  simulatePrices: () => void;
};

export const useCryptoStore = create<Store>((set) => {
  const initRows = [...cryptoData]; 

  const simulatePrices = () => {
    set((state) => {
      const newRows = state.rows.map((coin) => {
        const change = parseFloat((Math.random() * 2 - 1).toFixed(3)); // -1% to +1%
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
    });
  };

  return {
    rows: initRows,
    simulatePrices,
  };
});
