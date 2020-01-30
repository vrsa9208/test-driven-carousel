import React from "react";
import PropTypes from "prop-types";

const CarouselSlide = ({ description, attribution, imgUrl }) => (
  <figure>
    <img src={imgUrl} />
    <figcaption>
      <strong>{description}</strong>
      {` ${attribution}`}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired
};

export default CarouselSlide;
