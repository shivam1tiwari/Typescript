import React, { ReactNode } from "react";
import './Card.css'

const Card = (props: any): ReactNode => {
  return (
    <div className="card__container">
      <div className="card__content">
        <div className="card__img"><img src="/images/top-brands/kurta.webp" alt="" /></div>
        <div className="card__text">
          <p>PUMA</p>
          <p>20% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
