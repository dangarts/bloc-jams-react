import React from "react";

const Landing = () => (
  <section className="landing">
    {/* <h1 className="hero-title">Turn the music up!</h1> */}

    <section className="selling-points">
      <div className="point point-one landing-hero">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">
          The world is full of music; why should you listen to music curated by
          the radio?
        </p>
      </div>

      <div className="point point-two landing-card">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p>
          <span className="icon ion-md-infinite" />
        </p>
        <p className="point-description">
          No arbitrary limits. No distractions.
        </p>
      </div>

      <div className="point point-three landing-card">
        <h2 className="point-title">Mobile enabled</h2>
        <p>
          <span className="icon ion-md-checkmark-circle-outline" />
        </p>

        <p className="point-description">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
