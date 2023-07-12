import React, { useEffect, useState } from "react";
import { getBooksBySearchTerm } from "../services/book-service";
import BookGrid from "../components/BookGrid/BookGrid";

const BookLoader = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setError(null);
      setLoading(true);
      setBooks([]);

      getBooksBySearchTerm(searchTerm)
        .then((books) => setBooks(books))
        .catch((error) => {
          console.error(error);
          setError(error);
        })
        .finally(() => setLoading(false));
    }
  }, [searchTerm]);

  return (
    <>
      {loading && <p>...Loading</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && books.length > 0 && <BookGrid books={books} />}
    </>
  );
};

export default BookLoader;
