export type Crypto = {
  logo:string;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply?: number|undefined;
  maxSupply?: number;
  chart7d?: string;
  chart7dData?: { value: number }[];
};

const cryptoData: Crypto[] = [
  {
    logo: '/bitcoin.jpg',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 64250.12,
    change1h: 0.5,
    change24h: 2.1,
    change7d: 5.3,
    marketCap: 1250000000000,
    volume24h: 35000000000,
    circulatingSupply: 19400000,
    maxSupply: 21000000,
    chart7d: '',
    chart7dData: [
      { value: 0 }, { value: 48200 }, { value: 53150 }, { value: 49000 },
      { value: 55000 }, { value: 64320 }, { value: 58600 }, { value: 60600 },
      { value: 67800 }, { value: 64200 }, { value: 72200 }, { value: 75600 },
      { value: 70800 }, { value: 79900 }, { value: 124150 }
    ]
    
  },
  {
    logo: '/Ethereum.png',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3142.87,
    change1h: -0.3,
    change24h: 1.7,
    change7d: -2.1,
    marketCap: 375000000000,
    volume24h: 15600000000,
    circulatingSupply: 120000000,
    maxSupply: 120000000,
    chart7d: '',
    chart7dData: [
      { value: 2100 }, { value: 2350 }, { value: 2600 }, { value: 2300 },
      { value: 2900 }, { value: 3142 }, { value: 2980 }, { value: 3200 },
      { value: 3420 }, { value: 3270 }, { value: 3580 }, { value: 3750 },
      { value: 3610 }, { value: 3880 }, { value: 4020 }
    ]
    
  },
  {
    logo: '/Ripple.jpeg',
    name: 'Ripple',
    symbol: 'XRP',
    price: 0.53,
    change1h: 1.2,
    change24h: -3.4,
    change7d: -8.2,
    marketCap: 28500000000,
    volume24h: 1420000000,
    circulatingSupply: 53800000000,
    maxSupply: 100000000000,
    chart7d: '',
    chart7dData: [
      { value: 0.43 }, { value: 0.47 }, { value: 0.52 }, { value: 0.49 },
      { value: 0.55 }, { value: 0.53 }, { value: 0.50 }, { value: 0.58 },
      { value: 0.61 }, { value: 0.59 }, { value: 0.56 }, { value: 0.63 },
      { value: 0.60 }, { value: 0.64 }, { value: 0.67 }
    ]
    
  },
  {
    logo: '/solana.jpeg',
    name: 'Solana',
    symbol: 'SOL',
    price: 142.75,
    change1h: 1.8,
    change24h: 4.9,
    change7d: 12.6,
    marketCap: 62500000000,
    volume24h: 3850000000,
    circulatingSupply: 436000000,
    maxSupply: 550000000,
    chart7d: '',
    chart7dData: [
      { value: 88 }, { value: 95 }, { value: 112 }, { value: 130 },
      { value: 142 }, { value: 125 }, { value: 139 }, { value: 150 },
      { value: 162 }, { value: 158 }, { value: 170 }, { value: 165 },
      { value: 180 }, { value: 172 }, { value: 185 }
    ]
    
  },
  {
    logo: '/dogecoin.svg',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.124,
    change1h: -0.8,
    change24h: -5.2,
    change7d: 3.7,
    marketCap: 17000000000,
    volume24h: 850000000,
    circulatingSupply: 141500000000,
    maxSupply: 200000000000,
    chart7d: '',
    chart7dData: [
      { value: 88 }, { value: 95 }, { value: 112 }, { value: 130 },
      { value: 142 }, { value: 125 }, { value: 139 }, { value: 150 },
      { value: 162 }, { value: 158 }, { value: 170 }, { value: 165 },
      { value: 180 }, { value: 172 }, { value: 185 }
    ]
    
  },
  {
    logo: '/cardano.png',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.437,
    change1h: 0.2,
    change24h: -1.8,
    change7d: -4.9,
    marketCap: 15200000000,
    volume24h: 390000000,
    circulatingSupply: 35400000000,
    maxSupply: 45000000000,
    chart7d: '',
    chart7dData: [
      { value: 0.075 }, { value: 0.083 }, { value: 0.093 }, { value: 0.089 },
      { value: 0.101 }, { value: 0.110 }, { value: 0.124 }, { value: 0.12 },
      { value: 0.135 }, { value: 0.13 }, { value: 0.14 }, { value: 0.145 },
      { value: 0.13 }, { value: 0.119 }, { value: 0.125 }
    ]
    
  },
  {
    logo: '/Tether.png',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change1h: 0.01,
    change24h: 0.02,
    change7d: -0.05,
    marketCap: 86500000000,
    volume24h: 42000000000,
    circulatingSupply: 86500000000,
    maxSupply: 100000000000,
    chart7d: '',
    chart7dData: [
      { value: 0.30 }, { value: 0.36 }, { value: 0.40 }, { value: 0.43 },
      { value: 0.47 }, { value: 0.44 }, { value: 0.49 }, { value: 0.52 },
      { value: 0.50 }, { value: 0.55 }, { value: 0.53 }, { value: 0.59 },
      { value: 0.56 }, { value: 0.61 }, { value: 0.65 }
    ]
    
  }
];

export default cryptoData;
