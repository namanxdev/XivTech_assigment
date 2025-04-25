import { useEffect } from "react";
import { useCryptoStore } from "../store/useCryptoStore";
import { Crypto } from "../utils/db";
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdInformationCircleOutline } from "react-icons/io";
import MiniChart from "./MiniChart";

// Helper for colored percent cells
const PercentCell = ({ value }: { value: number }) => (
  <span className={`flex items-center ${value < 0 ? "text-red-500" : "text-green-500"} font-semibold`}>
    {value > 0 ? <IoMdArrowDropup className="text-lg" /> : <IoMdArrowDropdown className="text-lg" />}
    {Math.abs(value).toFixed(2)}%
  </span>
);

// Helper function
const formatLargeNumber = (num: number) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + 'B';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + 'K';
  }
  return num.toString();
};

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Top Gainers", value: "gainers" },
  { label: "Top Losers", value: "losers" },
];

const SORTABLE_COLUMNS = [
  { label: "Price", value: "price" },
  { label: "1h %", value: "change1h" },
  { label: "24h %", value: "change24h" },
  { label: "7d %", value: "change7d" },
  { label: "Market Cap", value: "marketCap" },
  { label: "Volume", value: "volume24h" },
];

const CryptoTable = () => {
  const rows = useCryptoStore((state) => state.rows);
  const simulatePrices = useCryptoStore((state) => state.simulatePrices);
  
  // Get filter/sort from persisted store instead of local state
  const filter = useCryptoStore((state) => state.selectedFilter);
  const setFilter = useCryptoStore((state) => state.setFilter);
  const sortBy = useCryptoStore((state) => state.sortBy);
  const setSortBy = useCryptoStore((state) => state.setSortBy);
  const sortDir = useCryptoStore((state) => state.sortDir);
  const setSortDir = useCryptoStore((state) => state.setSortDir);

  useEffect(() => {
    const interval = setInterval(simulatePrices, 1500);
    return () => clearInterval(interval);
  }, [simulatePrices]);

  let filteredRows = [...rows];

  if (filter === "gainers") {
    filteredRows = filteredRows
      .filter(r => r.change24h > 0)
      .sort((a, b) => b.change24h - a.change24h)
      .slice(0, 10);
  } else if (filter === "losers") {
    filteredRows = filteredRows
      .filter(r => r.change24h < 0)
      .sort((a, b) => a.change24h - b.change24h)
      .slice(0, 10);
  }

  filteredRows.sort((a, b) => {
    if (sortDir === "asc") {
      return (a[sortBy] as number) - (b[sortBy] as number);
    }
    return (b[sortBy] as number) - (a[sortBy] as number);
  });

  const allRows = filteredRows;

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg p-4 bg-gray-900">
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        {/* Filters */}
        <div className="flex gap-2">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`px-3 py-1 rounded ${filter === f.value ? "bg-amber-500 text-gray-900 font-semibold" : "bg-gray-800 text-gray-300"}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        {/* Sort Dropdown */}
        <div className="flex gap-2 items-center ml-auto">
          <span className="text-gray-400 text-sm">Sort by:</span>
          <select
            className="bg-gray-800 text-gray-200 rounded px-2 py-1"
            value={sortBy}
            onChange={e => setSortBy(e.target.value as keyof Crypto)}
          >
            {SORTABLE_COLUMNS.map(col => (
              <option key={col.value} value={col.value}>{col.label}</option>
            ))}
          </select>
          <button
            className="px-2 py-1 rounded bg-gray-800 text-gray-200"
            onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
            title="Toggle sort direction"
          >
            {sortDir === "asc" ? "↑" : "↓"}
          </button>
        </div>
      </div>
      <table className="table-auto min-w-full text-sm text-left">
        <thead className="bg-gray-800 text-gray-400 text-xs">
          <tr>
            <th className="px-4 py-3 rounded-tl-lg w-8 uppercase">#</th>
            <th className="px-4 py-3 w-32">Name</th>
            <th className="px-4 py-3 w-32">Price</th>
            <th className="px-4 py-3 w-24">1h %</th>
            <th className="px-4 py-3 w-24">24h %</th>
            <th className="px-4 py-3 w-24">7d %</th>
            <th className="px-4 py-3 w-36">
              Market Cap
              <span className="inline-block items-center ml-1 relative group">
                <IoMdInformationCircleOutline className="text-gray-500" size={15} />
                <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded shadow-lg w-70 z-10 -left-32 top-6 normal-case">
                  <p className="text-xs font-normal">Total value of all coins in circulation (price × circulating supply). Shows the overall size of the cryptocurrency.</p>
                </div>
              </span>
            </th>
            <th className="px-4 py-3 w-36">
              24h Volume
              <span className="inline-block ml-1 relative group">
                <IoMdInformationCircleOutline className="text-gray-500" size={15} />
                <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded shadow-lg w-64 z-10 -left-32 top-6 normal-case">
                  <p className="text-xs font-normal">Total value of all transactions in the last 24 hours. Indicates trading activity and liquidity.</p>
                </div>
              </span>
            </th>
            <th className="px-4 py-3 w-36">
              Circulating Supply
              <span className="inline-block ml-1 relative group">
                <IoMdInformationCircleOutline className="text-gray-500" size={15} />
                <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded shadow-lg w-64 z-10 -left-32 top-6 normal-case">
                  <p className="text-xs font-normal">Number of coins currently available and circulating in the public. Maximum potential is shown in Max Supply column.</p>
                </div>
              </span>
            </th>
            <th className="px-4 py-3 w-32">Max Supply</th>
            <th className="px-4 py-3 rounded-tr-lg w-28">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {allRows.map((crypto, idx) => (
            <tr
              key={crypto.symbol + idx}
              className="transition-colors hover:bg-gray-700 border-b border-gray-700"
            >
              <td className="px-4 py-4 font-medium text-gray-300">{idx + 1}</td>
              <td className="px-4 py-4 font-medium text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    {typeof crypto.logo === 'string' && crypto.logo.startsWith('/') ? (
                      <img
                        src={crypto.logo}
                        alt={crypto.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl">{crypto.logo}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-white">{crypto.name}</div>
                    <span className="text-xs text-gray-400">{crypto.symbol}</span>
                  </div>
                </div>
              </td>
              <td className={`px-4 py-4 font-semibold ${
                crypto.change1h < 0 ? "text-red-500" : "text-green-500"
              }`}>
                ${crypto.price.toLocaleString()}
              </td>
              <td className="px-4 py-4"><PercentCell value={crypto.change1h} /></td>
              <td className="px-4 py-4"><PercentCell value={crypto.change24h} /></td>
              <td className="px-4 py-4"><PercentCell value={crypto.change7d} /></td>
              <td className="px-4 py-4 text-gray-300">${formatLargeNumber(crypto.marketCap)}</td>
              <td className="px-4 py-4">
                <div className="flex flex-col items-center">
                  <div className="text-white font-medium">
                    ${formatLargeNumber(crypto.volume24h)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {(crypto.volume24h / crypto.price).toFixed(2)}
                    {(crypto.volume24h / crypto.price) >= 1000 ? 'K' : ''} {crypto.symbol}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-gray-300">
                {formatLargeNumber(crypto.circulatingSupply || 0)}
              </td>
              <td className="px-4 py-4 text-gray-300">{crypto.maxSupply ? formatLargeNumber(crypto.maxSupply) : '-'}</td>
              <td className="px-4 py-4">
                {crypto.chart7dData ? (
                  <MiniChart
                    data={crypto.chart7dData}
                    color={crypto.change7d < 0 ? "#ef4444" : "#22c55e"}
                  />
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;