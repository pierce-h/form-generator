import { combineReducers } from 'redux';
import {
    SET_DEFAULT_FORM,
    ADD_INPUT_CONTROL,
    EMPTY_FORM,

    ATTR_CHANGE,

    REMOVE_CONTROL,
    MOVE_CONTROL

} from './actions';

let currentControlId = 1;

export function createEmptyField(type='text', label='', placeholder) {
    return {
        id: currentControlId,
        type,
        label,
        name: `field-${currentControlId++}`,
        placeholder
    };
}

export const DEFAULT_CONTROLS = [
    {
        id: 1,
        type: 'text',
        label: 'Example field 1',
        placeholder: 'Put here some value',
        name: 'field-1'
    },
    {
        id: 2,
        type: 'text',
        label: 'Example field 2',
        placeholder: 'Put here another value',
        name: 'field-2'
    },
    {
        id: 3,
        type: 'checkbox',
        label: 'Example field 3',
        placeholder: '',
        name: 'field-3'
    }
];

export const EMPTY_FORM_STATE = {
    isDefault: false,
    isEmpty: true,
    controls: []
};

export const DEFAULT_FORM = {
    isDefault: true,
    isEmpty: false,
    controls: DEFAULT_CONTROLS
};

function customForm(state=EMPTY_FORM_STATE, action) {
    let controls;
    let tmp;
    let indexToPut;


    switch (action.type) {

        case SET_DEFAULT_FORM:
            {
                currentControlId = DEFAULT_CONTROLS.length + 1;
                return Object.assign({}, state, DEFAULT_FORM);
            }

        case EMPTY_FORM:
            {
                currentControlId = 1;
                return Object.assign({}, state, EMPTY_FORM_STATE);
            }

        case ADD_INPUT_CONTROL:
            return Object.assign({}, state, {
                controls: [...state.controls, createEmptyField('text')],
                isDefault: false,
                isEmpty: false
            });

        case ATTR_CHANGE:
            return Object.assign({}, state, {
                controls: state.controls.map(item => {
                    if (item.id === action.id) {
                        item[action.attr] = action.value;
                    }
                    return item;
                })
            });

        case REMOVE_CONTROL:
            controls = state.controls.filter(item => {
                return item.id !== action.id;
            });

            return Object.assign({}, state, {
                controls,
                isEmpty: !controls.length,
                isDefault: false
            });

        case MOVE_CONTROL:
            controls = state.controls.map((item, index) => {
                if (item.id === action.id) {
                    if (action.direction === 'up') {
                        if (index === 0) return item;
                        tmp = state.controls[index];
                        indexToPut = index - 1;
                        return state.controls[index - 1];
                    }
                    if (action.direction === 'down') {
                        if (index === state.controls.length - 1) return item;
                        tmp = state.controls[index];
                        indexToPut = index + 1;
                        return state.controls[index + 1];
                    }
                }
                return item;
            });

            controls[indexToPut] = tmp;
            tmp = indexToPut = null;

            return Object.assign({}, state, {
                controls
            });

        default:
            return state;
        }
}

const formApp = combineReducers({
    customForm
});

export default formApp;
