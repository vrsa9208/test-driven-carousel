import React, { PureComponent } from "react";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";
import PropTypes from "prop-types";
import HasIndex from "./HasIndex";
import AutoAdvances from "./AutoAdvances";

export class Carousel extends PureComponent {
  static propTypes = {
    defaultImg: CarouselSlide.propTypes.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slideIndex: PropTypes.number.isRequired,
    slideIndexIncrement: PropTypes.func.isRequired,
    slideIndexDecrement: PropTypes.func.isRequired,
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
      .isRequired
  };

  static defaultProps = {
    defaultImg: CarouselSlide.defaultProps.defaultImg,
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight
  };

  handlePrevClick = () => {
    const { slideIndexDecrement, slides } = this.props;
    slideIndexDecrement(slides.length);
  };

  handleNextClick = () => {
    const { slideIndexIncrement, slides } = this.props;
    slideIndexIncrement(slides.length);
  };

  render() {
    const {
      defaultImg,
      defaultImgHeight,
      slides,
      slideIndex,
      slideIndexDecrement: _slideIndexDecrement,
      slideIndexIncrement: _slideIndexIncrement,
      ...rest
    } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide
          Img={defaultImg}
          imgHeight={defaultImgHeight}
          {...slides[slideIndex]}
        />
        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default HasIndex(
  AutoAdvances(Carousel, "slideIndex", "slides"),
  "slideIndex"
);
