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


