import React, {Component} from 'react';
import PropTypes from "prop-types";

import arrowBack from "../assets/back.svg"
import arrowNext from "../assets/next.svg"
import '../style.css';

class App extends Component {

    state = {
        currentSlideIndex: 0
    };

    startAutoplay = () => {
        this.autoplay = setInterval(() => {
            this.showNextSlide()
        }, 10000)
    };

    stopAutoplay = () => {
        clearInterval(this.autoplay);
    };

    componentDidMount() {
        this.props.onLoad();
        this.startAutoplay()
    }

    showPrevSlide = () => {
        const prevSlideIndex = (this.state.currentSlideIndex > 0)
            ? this.state.currentSlideIndex - 1
            : this.props.slider.length - 1;
        this.setState({
            currentSlideIndex: prevSlideIndex
        });
    };

    showNextSlide = () => {
        this.setState({
            currentSlideIndex: (this.state.currentSlideIndex+1) % this.props.slider.length
        });
    };

    renderSlider = () => {
        const currentSlide = this.props.slider[this.state.currentSlideIndex];
        return (
            <div
                className="main-slide"
            >
                <h3>{currentSlide.text}</h3>
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
        this.props.slider.map((item, index) => {
            return (
                <div
                    className="slider-overlay__item"
                    key={index}
                    onClick={() => this.setState({currentSlideIndex: index})}
                >
                    <img src={`${item.image}`} alt=""/>
                    <p>{item.text}</p>
                </div>
            )
        })
    );

    render() {
        return (
            <div className='slider__wrapper'>
                <h2>Slider</h2>
                {this.props.slider.length > 0 && this.renderSlider()}
                <div
                    className="slider-overlay"
                >
                    <img
                        className="arrow-icon"
                        onClick={this.showPrevSlide}
                        src={arrowBack}
                        alt="arrow"
                    />

                    <div className="slider-overlay__imgs">
                        {this.props.slider.length > 0 && this.renderSliderOverlay()}
                    </div>
                    <img
                        className="arrow-icon"
                        onClick={this.showNextSlide}
                        src={arrowNext}
                        alt="arrow"
                    />
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.stopAutoplay();
    }
}

App.propTypes = {
    slider: PropTypes.array.isRequired,
};

export default App;
