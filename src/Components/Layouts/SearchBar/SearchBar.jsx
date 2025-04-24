import React from 'react'

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
    return (
     <>
     <div className="search-bar p-4 text-center">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded w-1/2"
        />
      </div>
     </>
    )
  }

