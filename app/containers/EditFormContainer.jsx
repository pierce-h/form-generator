import { connect } from 'react-redux';
import { setDefaultForm,
         emptyForm,
         addInputControl,
         removeControl,
         moveControl,
         attrChange } from '../actions';
import EditForm from '../components/EditForm';

const mapStateToProps = state => {
    return {
        formControls: state.customForm.controls,
        isEmpty: state.customForm.isEmpty
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDefaultClick: () => {
            dispatch(setDefaultForm());
        },
        emptyFormClick: () => {
            dispatch(emptyForm());
        },
        addInputControlClick: () => {
            dispatch(addInputControl());
        },
        onAttrChange: (attr, id, type) => {
            dispatch(attrChange(attr, id, type));
        },
        removeControlClick: id => {
            dispatch(removeControl(id));
        },
        moveControlClick: (direction, id) => {
            dispatch(moveControl(direction, id));
        }
    };
};

const EditFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditForm);

export default EditFormContainer;
