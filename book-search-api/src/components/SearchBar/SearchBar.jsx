import style from "./SearchBar.module.scss";
import { useState } from "react";
import searchIcon from "../../assets/search-icon.svg";

const SearchBar = ({ handleSubmit }) => {
  const [searchString, setSearchString] = useState("");

  const onSearchStringChange = (e) => {
    setSearchString(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(searchString);
  };

  return (
    <form className={style.searchBar} onSubmit={onSubmit}>
      <div className={style.field}>
        <input
          type="text"
          name="bookSearch"
          id="bookSearch"
          value={searchString}
          onChange={onSearchStringChange}
        />
        <button>
          <img src={searchIcon} alt="Search button" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
