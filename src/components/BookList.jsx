import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ScaleLoader } from "react-spinners";

const BookList = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader color="#1f4cd1" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-5 font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img
              src={
                book.cover_id || book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${
                      book.cover_id || book.cover_i
                    }-M.jpg`
                  : "https://via.placeholder.com/150x200?text=No+Cover"
              }
              alt={book.title}
              className="w-32 h-48 object-cover rounded mb-2 border"
            />
            <h3 className="mt-2 font-bold text-lg text-center">{book.title}</h3>
            <p className="text-xs text-gray-500">
              Publish Year: {book.first_publish_year || "N/A"}
            </p>
            <p className="font-bold text-center">
              Author:
              {
                book.authors
                  ? book.authors.map((a) => a.name).join(", ") // history.json
                  : book.author_name?.join(", ") // search.json
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
