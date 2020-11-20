import React from "react";

const SearchBar = () => {
  return (
    <section>
      <div>
        <span>Categori</span>
      </div>
      <input type="search" name="searchMovies" placeholder="Search Movie" />
      <style jsx>{`
        section {
          width: 100%;
          height: 50px;
          padding: 0 1em;
          background-color: var(--main-color);
          border-bottom: 2px solid var(--dark-main-color);
          margin-bottom: 2em;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        input {
          padding: 0.5em;
          border: 2px solid var(--dark-main-color);
        }
      `}</style>
    </section>
  );
};

export default SearchBar;
