import React, {Component} from 'react';
import PropTypes from "prop-types";

import '../style.css';

class App extends Component {

    state = {
        currentSlideIndex: 0
    };

    startAutoplay = () => {
        this.autoplay = setInterval(() => {
            this.showNextSlide()
        }, 2000)
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
                onMouseEnter={this.stopAutoplay}
                onMouseLeave={this.startAutoplay}
            >
                <img src={`${currentSlide.hero}`} alt=""/>
            </div>
        )
    };

    renderSliderOverlay = () => (
        this.props.slider.map((item, index) => {
            return (
                <div
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
                <h2>SliderOverlay</h2>
                <div
                    className="slider-overlay"
                >
                    <button
                        onClick={this.showPrevSlide}
                    >
                        Prev
                    </button>
                    <div className="slider-overlay__imgs">
                        {this.props.slider.length > 0 && this.renderSliderOverlay()}
                    </div>
                    <button
                        onClick={this.showNextSlide}
                    >
                        Next
                    </button>
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
