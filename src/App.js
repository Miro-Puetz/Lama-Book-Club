import "./App.css";

import { useState, useEffect } from "react";
import AddBook from "./components/NewBook/AddBook/AddBook";
import BooksList from "./components/BooksList/BooksList";
import Header from "./components/Header/Header";
import db from "./database/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function App() {
  const [books, setBooks] = useState([]);
  const BooksCollectionRef = collection(db, "books");

  const fetchBooks = async () => {
    const q = query(BooksCollectionRef, orderBy("score", "desc"));
    const data = await getDocs(q);

    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookHandler = (id) => {
    setBooks((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <Header>Lama Book Club</Header>
      <AddBook onNewBook={fetchBooks} />
      <BooksList onClick={deleteBookHandler} items={books}></BooksList>
    </div>
  );
}

export default App;
