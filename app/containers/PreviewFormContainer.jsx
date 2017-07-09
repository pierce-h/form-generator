import { connect } from 'react-redux';
import PreviewForm from '../components/PreviewForm';

const mapStateToProps = state => {
    return {
        formControls: state.customForm.controls
    };
};

const PreviewFormContainer = connect(mapStateToProps)(PreviewForm);

export default PreviewFormContainer;
