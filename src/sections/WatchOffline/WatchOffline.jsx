import React from "react";
import "./WatchOffline.scss";
import { Divider } from "../../components";
import { MobileImg } from "../../Assets/icons";
import { StrangerBanner } from "../../Assets/images";

const WatchOffline = () => {
  return (
    <section className="hero__card-row">
      <div className="hero__card row__reverse">
        <div className="hero__card-text">
          <h2 className="hero__title">Download your shows to watch offline</h2>
          <p className="hero__text">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="hero__card-img">
          <div className="hero__card-video">
            <img src={MobileImg} alt="" />
            <div className="hero__download">
              <img src={StrangerBanner} alt="Stranger Things" />
              <div className="download">
                <h4>Stranger Things</h4>
                <p>Downloading...</p>
              </div>
              <div className="download__img"></div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default WatchOffline;
