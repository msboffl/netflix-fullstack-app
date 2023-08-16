import React from "react";
import { NetflixBgImg } from "../../Assets/images";
import "./Main.scss";

const Main = () => {
  return (
    <main>
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
      <section className="nf__row card-animation+watchOnTv">
        Enjoy on your TV
      </section>
      <section className="nf__row card-animation+downloadAndWatch">
        Download your shows to watch offline
      </section>
      <section className="nf__row card-animation+watchOnDevice">
        Watch everywhere
      </section>
      <section className="nf__row card-animation+kidsValueProp">
        Create profiles for kids
      </section>
      <section className="nf__row nmhp-card-faq">
        Frequently Asked Questions
      </section>
    </main>
  );
};

export default Main;
