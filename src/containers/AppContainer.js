import {connect} from "react-redux";
import App from '../components/App';
import * as SliderActions from "../store/actions/SliderActions";

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => {
        dispatch(SliderActions.getSlides());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);