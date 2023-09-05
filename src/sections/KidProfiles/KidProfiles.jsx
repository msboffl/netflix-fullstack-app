import React from "react";
import "./KidProfiles.scss";
import { KidProfileBanner } from "../../Assets/images";

const KidProfiles = () => {
  return (
    <section className="hero__card-row">
      <div className="hero__card row__reverse">
        <div className="hero__card-text">
          <h2 className="hero__title">Create profiles for kids</h2>
          <p className="hero__text">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div className="hero__card-img">
          <img src={KidProfileBanner} alt="Kid Profile" />
        </div>
      </div>
      <div className="hero__card-divider"></div>
    </section>
  );
};

export default KidProfiles;
