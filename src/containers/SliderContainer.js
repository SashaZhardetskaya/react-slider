import {connect} from 'react-redux';
import Slider from '../components/Slider';
import * as SliderActions from '../store/actions/SliderActions';

const mapStateToProps = (state) => ({
    ...state.slider,
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(SliderActions.getSlides());
    },
    setCurrentSlide: (index) => {
        dispatch(SliderActions.setCurrentSlide(index));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);