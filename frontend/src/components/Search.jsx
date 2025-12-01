import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Search fresh produce..." }) => {
const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Icon (Left) */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="block w-full bg-white border border-gray-300 rounded-full py-3 pl-12 pr-28 leading-5 placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 
                   shadow-sm transition-shadow duration-200"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Search Button (Right - Inside Input) */}
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <button
          onClick={handleSearch}
          type="button"
          className="inline-flex items-center px-6 border border-transparent font-medium rounded-full shadow-sm text-white 
                     bg-green-600 hover:bg-green-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
                     transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar