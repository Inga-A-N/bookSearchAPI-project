import React, { useEffect, useState } from "react";
import pic from "../../assets/no-image-available-icon.webp";
import style from "./Book.module.scss";

const Book = ({ title, author, description, imageLinks }) => {
  return (
    <div className={style.book}>
      {imageLinks ? (
        <img src={imageLinks.smallThumbnail} alt="Book image" />
      ) : (
        <img src={pic} />
      )}
      <h3>Book title: {title}</h3>
      {author ? (
        <h3>Authors: {author.join(", ")}</h3>
      ) : (
        <h3>Authors: no authors</h3>
      )}
      {description ? (
        <p>Description: {description}</p>
      ) : (
        <p>Description: no description</p>
      )}
    </div>
  );
};
export default Book;
