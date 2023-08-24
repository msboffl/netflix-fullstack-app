import React from "react";
import "./UnlimitesMovies.scss";
import { NavBar } from "../index";
import { Divider } from "../../components";

const UnlimitedMovies = () => {
  return (
    <>
      <NavBar />
      <section className="hero__card-row">
        UnlimitedMovies
        <Divider />
      </section>
    </>
  );
};

export default UnlimitedMovies;
