import { FaBitcoin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <span className="bg-amber-500 rounded-full p-2 flex items-center justify-center">
          <FaBitcoin className="text-white text-2xl" />
        </span>
        <span className="text-white text-xl font-bold tracking-wide">
          CryptoTracker
        </span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
          Markets
        </a>
        <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
          About
        </a>
        <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
          Contact
        </a>
      </div>
      {/* Profile/CTA */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/namanxdev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-4 py-2 rounded transition-colors shadow"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;