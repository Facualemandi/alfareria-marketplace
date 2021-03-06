import React from "react";
import { BsSearch } from "react-icons/bs";
import "./AlfareriaSearch.css";

const AlfareriaSearch = ({ handleSearch, search }) => {
  return (
    <>
      <section className="container_nav">
        <section className="section_search">
          <input
            type={"text"}
            placeholder="Tazas, Plato, Bowls...etc"
            className="input"
            onChange={handleSearch}
            value={search}
          />
          <BsSearch />
        </section>
      </section>
    </>
  );
};

export default AlfareriaSearch;
