import React from "react";

const Card = ({ props, onClick }) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img className="img" src={props.img} alt="" />
        </div>
        <h4>{props.title}</h4>
        <div className="features">
          <p>
            <svg>
              <use xlinkHref="sprite.svg#icon-map-pin"></use>
            </svg>
            {props.features.country}
          </p>
          <p>
            <svg>
              <use xlinkHref="sprite.svg#icon-profile-male"></use>
            </svg>
            {props.features.rooms}
          </p>
          <p>
            <svg>
              <use xlinkHref="sprite.svg#icon-expand"></use>
            </svg>
            {props.features.area}
            <sup>2</sup>
          </p>
          <p>
            <svg>
              <use xlinkHref="sprite.svg#icon-key"></use>
            </svg>
            {props.features.price}
          </p>
          <button role="button" onClick={onclick} className="btn">
            contact retailers
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
