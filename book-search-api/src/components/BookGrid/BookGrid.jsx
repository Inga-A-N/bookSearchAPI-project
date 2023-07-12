import React from "react";
import style from "./BookGrid.module.scss";
import Book from "../Book/Book";

const BookGrid = ({ books }) => {
  return (
    <section className={style.grid}>
      {books.map((bookData) => (
        <Book
          key={bookData.id}
          title={bookData.volumeInfo.title}
          imageLinks={bookData.volumeInfo.imageLinks}
          author={bookData.volumeInfo.authors}
          description={bookData.volumeInfo.description}
        />
      ))}
    </section>
  );
};

export default BookGrid;
