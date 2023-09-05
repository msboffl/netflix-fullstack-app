import "./EnjoyYourTv.scss";
import { NetflixTv } from "../../Assets/icons";
import { videoTv } from "../../Assets/videos";
import { Divider } from "../../components";

const EnjoyYourTv = () => {
  return (
    <section className="hero__card-row">
      <div className="hero__card">
        <div className="hero__card-text">
          <h2 className="hero__title">Enjoy on your TV</h2>
          <p className="hero__text">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="hero__card-img">
          <div className="hero__card-video">
            <img src={NetflixTv} alt="Netflix Tv" />
            <div className="hero-video">
              <video autoPlay muted playsInline loop>
                <source src={videoTv} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default EnjoyYourTv;
