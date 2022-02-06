import React, { useState } from "react";

import Modal from "../../../UI/Modal/Modal";
import Button from "../../../UI/Button/Button";
import styles from "./BookSearch.module.css";
import SearchItems from "./SearchItems/SearchItems";

const APIKey = process.env.REACT_APP_BOOKS_API;

const BookSearch = (props) => {
  const [books, setBooks] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [error, setError] = useState(false);

  async function fetchBooks() {
    if (!isInputValid()) return;
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${props.title}+intitle:${props.title}&inauthor:${props.author}&key=${APIKey}`
      );
      const data = await response.json();
      if (data.totalItems === 0) {
        setError({ errorMsg: "No Results found." });
        return;
      }
      let fetchedBooks = data.items.map((item) => ({
        id: Math.random(),
        score: 0,
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
        link: item.volumeInfo?.canonicalVolumeLink,
      }));

      fetchedBooks = fetchedBooks.filter(
        (book) => book.title !== undefined && book.authors !== undefined
      );

      setBooks(fetchedBooks);
      setShowSearch(true);
    } catch (error) {
      console.log(error);
    }
  }

  const isInputValid = () => {
    if (props.title.trim().length === 0) {
      setError({ errorMsg: "Please provide a Title." });
      return false;
    }
    return true;
    // if (props.author.trim().length === 0) {
    //   setError({ errorMsg: "Please provide an author." });
    //   return;
    // }
  };

  const errorHandler = () => {
    setError(false);
  };

  const showSearchHandler = () => {
    setBooks([]);
    setShowSearch(false);
  };
  // fetchBooks();

  // });

  return (
    <>
      {error && (
        <Modal onClick={errorHandler} title="Invalid Input" buttonText="Okay">
          {error.errorMsg}
        </Modal>
      )}
      <Button onClick={fetchBooks} type="button" className={styles.button}>
        Search
      </Button>
      {showSearch && (
        <SearchItems
          onSubmitBook={props.onSubmitBook}
          items={books}
          onExit={showSearchHandler}
        />
      )}
    </>
  );
};

export default BookSearch;
