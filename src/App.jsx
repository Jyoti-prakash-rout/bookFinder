import React from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { BookProvider } from "./context/BookContext";

const App = () => {
  return (
    <BookProvider>
      <div className="font-mono">
        <SearchBar />
        <BookList />
      </div>
    </BookProvider>
  );
};

export default App;


/*
Commit message:
Initial commit: BookFinder React App

Description:
BookFinder is a modern React application that allows users to search for books and view curated lists. It features a clean, responsive UI built with Tailwind CSS, a context-based state management for handling book data, and modular components for scalability. This project serves as a foundation for exploring book APIs, implementing search functionality, and building user-friendly interfaces for book discovery.
*/