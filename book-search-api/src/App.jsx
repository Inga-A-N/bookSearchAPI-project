// import style from "./appStyle.scss";
import "./App.css";
// import style from "./global.scss";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Heading from "./components/Heading/Heading";

import BookLoader from "./containers/BookLoader";

function App() {
  const [search, setSearch] = useState(null);
  const handleSubmit = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <>
      <div className="headerSearch">
        <Heading />
        <SearchBar handleSubmit={handleSubmit} />
      </div>
      <BookLoader searchTerm={search} />
    </>
  );
}

export default App;
