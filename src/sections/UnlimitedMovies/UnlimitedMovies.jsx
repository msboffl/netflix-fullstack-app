import React from "react";
import "./UnlimitesMovies.scss";
import { NetflixBgImg } from "../../Assets/images/images";

const UnlimitedMovies = () => {
  return (
    <section className="nf__row card-hero">
      <div className="nf__card-bg">
        <div className="card-hero__background">
          <img src={NetflixBgImg} className="nf__bg-img" alt="Netflix Hero" />
          <div className="card__hero-gradient"></div>
        </div>
      </div>
      <div className="nf__card-text">
        <div className="title-and-desc">
          <h1 className="title">Unlimited movies, TV shows and more</h1>
          <p className="desc">Watch anywhere. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default UnlimitedMovies;
