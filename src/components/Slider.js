import React, {Component} from 'react';
import PropTypes from 'prop-types';

import arrowBack from '../assets/back.svg';
import arrowNext from '../assets/next.svg';
import '../style.css';

class Slider extends Component {

    //Actions

    startAutoplay = () => {
        this.autoplay = setInterval(() => {
            this.showNextSlide()
        }, 10000)
    };

    stopAutoplay = () => {
        clearInterval(this.autoplay);
    };

    showPrevSlide = () => {
        this.stopAutoplay();
        const prevSlideIndex = (this.props.currentSlideIndex > 0)
            ? this.props.currentSlideIndex - 1
            : this.props.slides.length - 1;
        this.props.setCurrentSlide(prevSlideIndex);
        this.startAutoplay();
    };

    showNextSlide = () => {
        this.stopAutoplay();
        const nextSlideIndex = (this.props.currentSlideIndex+1) % this.props.slides.length;
        this.props.setCurrentSlide(nextSlideIndex);
        this.startAutoplay();
    };

    handleSmallImgClick = (index) => {
        this.stopAutoplay();
        this.props.setCurrentSlide(index);
        this.startAutoplay();
    };

    //Lifecycle methods

    componentDidMount() {
        this.props.onLoad();
        this.startAutoplay()
    }

    //Renders

    renderSlider = () => {
        const currentSlide = this.props.slides[this.props.currentSlideIndex];
        return (
            <div
                key={this.props.currentSlideIndex}
                className='main-slide'
            >
                <h2 className='main-slide__title'>
                    {currentSlide.text.replace(/ .*/,'')}
                </h2>
                <img
                    src={`${currentSlide.hero}`}
                    onMouseEnter={this.stopAutoplay}
                    onMouseLeave={this.startAutoplay}
                    alt={`${currentSlide.text}`}
                />
            </div>
        )
    };

    renderSliderOverlay = () => (
        this.props.slides.map((item, index) => {
            return (
                <div
                    className='slider-overlay__item'
                    key={index}
                    onClick={() => this.handleSmallImgClick(index)}
                >
                    <img
                        className={`slider-overlay__img ${index === this.props.currentSlideIndex && 'active'}`}
                        src={`${item.image}`}
                        alt={`${item.text}`}
                    />
                    <p>{item.text}</p>
                </div>
            )
        })
    );

    render() {
        return (
            <div className='slider__wrapper'>
                {this.props.slides.length > 0 && this.renderSlider()}
                <div
                    className='slider-overlay'
                >
                    <img
                        className='arrow-icon'
                        onClick={this.showPrevSlide}
                        src={arrowBack}
                        alt='arrow'
                    />
                    <div className='slider-overlay__imgs'>
                        {this.props.slides.length > 0 && this.renderSliderOverlay()}
                    </div>
                    <img
                        className='arrow-icon'
                        onClick={this.showNextSlide}
                        src={arrowNext}
                        alt='arrow'
                    />
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.stopAutoplay();
    }
}

Slider.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default Slider;
