import React, {Component} from 'react';
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import arrowBack from "../assets/back.svg"
import arrowNext from "../assets/next.svg"
import '../style.css';

class App extends Component {

    state = {
        currentSlideIndex: 0
    };

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
        const prevSlideIndex = (this.state.currentSlideIndex > 0)
            ? this.state.currentSlideIndex - 1
            : this.props.slider.length - 1;
        this.setState({
            currentSlideIndex: prevSlideIndex
        });
        this.startAutoplay();
    };

    showNextSlide = () => {
        this.stopAutoplay();
        this.setState({
            currentSlideIndex: (this.state.currentSlideIndex+1) % this.props.slider.length
        });
        this.startAutoplay();
    };

    handleSmallImgClick = (index) => {
        this.stopAutoplay();
        this.setState({
            currentSlideIndex: index
        });
        this.startAutoplay();
    };

    //Lifecycle methods

    componentDidMount() {
        this.props.onLoad();
        this.startAutoplay()
    }

    //Renders

    renderSlider = () => {
        const currentSlide = this.props.slider[this.state.currentSlideIndex];
        return (
            <div
                key={this.state.currentSlideIndex}
                className="main-slide"
            >
                <h2 className="main-slide__title">
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
        this.props.slider.map((item, index) => {
            return (
                <div
                    className="slider-overlay__item"
                    key={index}
                    onClick={() => this.handleSmallImgClick(index)}
                >
                    <img
                        className={`slider-overlay__img ${index === this.state.currentSlideIndex && 'active'}`}
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
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={200}
                    transitionLeave={false}
                >
                    {this.props.slider.length > 0 && this.renderSlider()}
                </ReactCSSTransitionGroup>

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
