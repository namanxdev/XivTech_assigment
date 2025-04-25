# ⚡ Real-Time Crypto Tracker

A React app that simulates live cryptocurrency tracking with filtering, sorting, and persistent preferences.

## 🔥 Features
- ✅ Live-updating prices (simulated)
- ✅ Table view with market data
- ✅ Sort by any column (price, market cap, etc.)
- ✅ Filter by All / Top Gainers / Top Losers
- ✅ Red/green indicators for gain/loss
- ✅ 7-day trend chart for each coin
- ✅ Preferences saved in localStorage via Zustand

## 🛠️ Tech Stack
- React
- Redux Toolkit (optional if Zustand used)
- Zustand for state management
- Recharts.js or sparkline for mini-charts
- Tailwind CSS for UI

## 💾 Local Storage
- User filter/sort preferences are saved using Zustand's `persist` middleware
- App restores the previous session state automatically

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 📊 Usage
- View all cryptocurrencies in the main table
- Use the filter buttons to show All coins, Top Gainers, or Top Losers
- Sort by any column using the dropdown menu
- Toggle ascending/descending sort with the arrow button
- Hover over information icons for metric explanations


## 📱 Responsive Design
- Optimized for desktop and mobile viewing
- Adapts to different screen sizes

## 🔮 Future Enhancements
- API integration for real market data
- User authentication and saved preferences
- Detailed view for individual cryptocurrencies
- Price alerts and notifications

