import react from "react";
import styles from "./SearchItem.module.css";

const SearchItem = (props) => {
  const selectHandler = () => {
    props.onClick(props.data);
  };

  return (
    <li onClick={selectHandler} className={styles.book}>
      <div className={styles.stats}>
        <h4 className={styles.title}>{props.data.title}</h4>
        <label className={styles.author}>{props.data.authors}</label>
      </div>
      <div className={styles.image}>
        <img src={props.data.thumbnail}></img>
        <label className={styles.published}>{props.data.publishedDate}</label>
      </div>
    </li>
  );
};

export default SearchItem;
