import "./WatchEvery.scss";
import { Divider } from "../../components";
import { DivicesImg } from "../../Assets/icons";
import { diviceVideo } from "../../Assets/videos";

const WatchEvery = () => {
  return (
    <section className="hero__card-row">
      <div className="hero__card">
        <div className="div hero__card-text">
          <h2 className="hero__title">Watch everywhere</h2>
          <p className="hero__text">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="hero__card-img">
          <div className="hero__card-video">
            <img src={DivicesImg} alt="" />
            <div className="hero-video watchEvery">
              <video autoPlay playsInline muted loop>
                <source src={diviceVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default WatchEvery;
