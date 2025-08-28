import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { ScaleLoader } from "react-spinners";
const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  const { text, setText, searchBook, loading } = useContext(BookContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader color="#1f4cd1" />
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 bg-white p-2 shadow-md">
        <form onSubmit={handleSearch} className="flex justify-center mt-5">
          <input
            type="text"
            placeholder="Search books..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-blue-400 hover:border-blue-800 rounded-l-lg px-4 py-2 w-64 outline-none"
          />
          <button
            type="submit"
            onClick={() => searchBook(text)}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 cursor-pointer">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
