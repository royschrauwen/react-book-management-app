import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import BookList from "../components/BookList";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <BookList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
            <Route
              render={(props) => (
                <EditBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
