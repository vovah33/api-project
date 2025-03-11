import React from "react";
import { Link } from "react-router-dom"; // Додаємо Link

const Plate = ({ link, image, alt, description }) => {
  return (
    <div className="plate">
      <Link to={link}>  {/* Використовуємо Link для навігації */}
        <img src={image} alt={alt} />
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Plate;
