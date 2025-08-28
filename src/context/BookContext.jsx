import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  //fetch random history books

  const fetchHistoryBooks = async () => {
    setLoading(true);
    const response = await fetch(
      "https://openlibrary.org/subjects/history.json?limit=10"
    );
    const data = await response.json();
    setBooks(data.works || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchHistoryBooks();
  }, []);

  // search books by title

  const searchBook = async () => {
    if (!text.trim()) return; // ignore empty input
    setLoading(true);
    setError(""); // reset error before new search

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${text}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books. Please try again.");
      }

      const data = await response.json();

      setBooks(data.docs || []);

      if (!data.docs || data.docs.length === 0) {
        setBooks([]);
        setError("No books found for your search.");
      } else {
        setBooks(data.docs);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setBooks([]);
    } finally {
      setLoading(false);
      setText("");
    }
  };

  return (
    <BookContext.Provider
      value={{ books, loading, text, setText, searchBook, error }}>
      {children}
    </BookContext.Provider>
  );
};
