import React from "react";
import movieContext from "../../context/Movie/movieContext";
const MoviesGenre = (props) => {
  const context = React.useContext(movieContext);
  const { selectGenre, handleSelectedGenre } = context;

  return (
    <ul class=" list-group mt-4 ">
      <li
        className={
          selectGenre === "All movies"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => handleSelectedGenre("All movies")}
      >
        All Users
      </li>
      <li
        className={
          selectGenre === "Action"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => handleSelectedGenre("Action")}
      >
        Male
      </li>
      <li
        class={
          selectGenre === "Comedy"
            ? "list-group-item active"
            : "list-group-item"
        }
        style={{ cursor: "pointer" }}
        onClick={() => handleSelectedGenre("Comedy")}
      >
        Female
      </li>
    </ul>
  );
};

export default MoviesGenre;
