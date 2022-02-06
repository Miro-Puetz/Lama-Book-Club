import react from "react";
import Modal from "../../../../UI/Modal/Modal";
import SearchItem from "./SearchItem/SearchItem";
import styles from "./SearchItems.module.css";

import { collection, addDoc } from "@firebase/firestore";
import db from "../../../../database/firebase";

const SearchItems = (props) => {
  const selectHandler = async (book) => {
    // Replace undefinded with empty string
    for (const key in book) {
      if (book[key] === undefined) {
        book[key] = "";
      }
    }

    await addDoc(collection(db, "books"), {
      score: book.score,
      title: book.title,
      author: book.authors,
      thumbnail: book.thumbnail,
      publishedDate: book.publishedDate,
      link: book.link,
    });
    props.onSubmitBook();
    props.onExit();
    // setBook({ id: "", title: "", author: "" });
  };

  const searchItems = props.items.map((item) => (
    <SearchItem
      id={item.id}
      key={item.id}
      data={item}
      onClick={selectHandler}
    />
  ));

  return (
    <Modal onClick={() => props.onExit()} title="Results" buttonText="Cancel">
      <ul className={styles.ul}>{searchItems}</ul>
    </Modal>
  );
};

export default SearchItems;
