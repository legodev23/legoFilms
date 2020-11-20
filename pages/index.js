import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { KEY_API } from "../config";

const index = () => {
  async function getMovies(name) {
    let movies = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY_API}&s=${name}&page=1&plot=full`
    );
    let data = await movies.json();
    console.log(data);
  }

  useEffect(() => {
    getMovies("we+are+your+friends");
  }, []);
  return (
    <div>
      <SearchBar />
      <h1>Hello world! my name is Leonardo.</h1>
    </div>
  );
};

export default index;
