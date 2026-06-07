import "./Hero.css";
import heroImage from "../assets/church-hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Welcome to KAG Church Kakamega</p>

          <h1>
            EXPERIENCING
            <br />
            GOD'S LOVE
            <br />
            TOGETHER
          </h1>

          <p className="hero-description">
            Join us every Sunday as we worship, grow in faith,
            and build a Christ-centered community that impacts
            lives and transforms generations.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Join Us</button>
            <button className="btn-secondary">Watch Sermons</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Church Worship Service" />
        </div>
      </div>
    </section>
  );
}

export default Hero;