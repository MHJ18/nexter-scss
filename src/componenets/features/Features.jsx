import React from "react";
import "./feature.scss";
const Features = () => {
  return (
    <div className="feature-grid">
      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-global"></use>
        </svg>
        <h4>World's best luxury homes</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-trophy"></use>
        </svg>
        <h4>Only the best properties</h4>
        <p>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>

      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-key"></use>
        </svg>

        <h4>All homes in top location</h4>
        <p>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>

      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-map-pin"></use>
        </svg>
        <h4>New home in one week</h4>
        <p>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-presentation"></use>
        </svg>
        <h4>World's best luxury homes</h4>
        <p>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className="feature">
        <svg className="svg">
          <use xlinkHref="sprite.svg#icon-lock"></use>
        </svg>
        <h4>Secure payments on nexter</h4>
        <p>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </div>
  );
};

export default Features;
