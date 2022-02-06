import react, { useState } from "react";

import styles from "./Book.module.css";
import { collection, updateDoc, doc } from "@firebase/firestore";
import db from "./../../../database/firebase";

const Book = (props) => {
  const [score, setScore] = useState(props.data.score);

  const updateRating = async (id, rating) => {
    const bookDoc = doc(db, "books", id);
    const newFields = { score: rating };
    await updateDoc(bookDoc, newFields);
  };
  const clickHandler = () => {
    // props.onClick(props.id);
  };

  const changeScoreHandler = (event) => {
    let target = event.target.getAttribute("name");

    if (target === "up") {
      updateRating(props.id, score + 1);
      setScore((prevScore) => prevScore + 1);
    }
    if (target === "down") {
      updateRating(props.id, score - 1);
      setScore((prevScore) => prevScore - 1);
    }
  };

  return (
    <li className={styles.book}>
      <div className={styles.stats}>
        <a href={props.data.link}>
          <h4 className={styles.title}>{props.data.title}</h4>
        </a>
        <label className={styles.author}>{props.data.author}</label>
      </div>
      <a href={props.data.link}>
        <img src={props.data.thumbnail} />
      </a>
      <div className={styles.controls}>
        <div className={styles["rating-buttons"]}>
          <div
            name="up"
            className={styles.up}
            onClick={changeScoreHandler}
          ></div>
          <div
            name="down"
            className={styles.down}
            onClick={changeScoreHandler}
          ></div>
        </div>
        <label>{score}</label>
      </div>
    </li>
  );
};

export default Book;
