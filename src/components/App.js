import React, {Component} from 'react';

import {slider} from "../data/feed";

import '../style.css';

class App extends Component {

    state = {
        currentSlideIndex: 0
    };

    componentDidMount() {
        this.props.onLoad();
    }

    renderSlider = () => {
        const currentSlide = slider[this.state.currentSlideIndex];
        return (
            <div>
                <img src={`${currentSlide.hero}`} alt=""/>
            </div>
        )
    };

    renderSliderOverlay = () => (
        slider.map((item, index) => {
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
        console.log('-----------slider,feed', slider);
        return (
            <div>
                <h2>Slider</h2>
                {this.renderSlider()}
                <h2>SliderOverlay</h2>
                <div className="slider__overlay">
                    {this.renderSliderOverlay()}
                </div>


            </div>
        );
    }
}

export default App;
