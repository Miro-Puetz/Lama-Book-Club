import react, { useState } from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import Modal from "../../../UI/Modal/Modal";
import styles from "./AddBook.module.css";

import { collection, addDoc } from "@firebase/firestore";
import db from "../../../database/firebase";
import BookSearch from "../BookSearch/BookSearch";

const AddBook = (props) => {
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
  });

  const changeHandler = (event) => {
    setBook((prevBook) => ({
      ...prevBook,
      id: Math.random(),
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Card className={styles.card}>
        <h2>Add a new book</h2>
        <form className={styles.form}>
          <label className={styles.inputTitle} htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            onChange={changeHandler}
            value={book.title}
            name="title"
          ></input>
          <label className={styles.inputTitle} htmlFor="author">
            Author
          </label>

          <input
            id="author"
            type="text"
            onChange={changeHandler}
            value={book.author}
            name="author"
          ></input>
          <BookSearch
            onSubmitBook={props.onNewBook}
            title={book.title}
            author={book.author}
          />
        </form>
      </Card>
    </div>
  );
};

export default AddBook;
