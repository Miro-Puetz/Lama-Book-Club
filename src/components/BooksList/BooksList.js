import react from "react";
import Card from "../../UI/Card/Card";
import Book from "./Book/Book";

import styles from "./BooksList.module.css";

const BooksList = (props) => {
  const clickHandler = (id) => {
    props.onClick(id);
  };

  const books = props.items.map((item) => (
    <Book key={item.id} id={item.id} onClick={clickHandler} data={item} />
  ));

  return (
    <Card className={styles.card}>
      <h2>Books</h2>
      <ul>{books}</ul>
    </Card>
  );
};

export default BooksList;
