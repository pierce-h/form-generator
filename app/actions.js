export const SET_DEFAULT_FORM = 'DEFAULT_FORM';
export const ADD_INPUT_CONTROL = 'ADD_INPUT_CONTROL';
export const EMPTY_FORM = 'EMPTY_FORM';
export const ATTR_CHANGE = 'ATTR_CHANGE';
export const REMOVE_CONTROL = 'REMOVE_CONTROL';
export const MOVE_CONTROL = 'MOVE_CONTROL';

export function setDefaultForm() {
    return {
        type: SET_DEFAULT_FORM
    };
}

export function emptyForm() {
    return {
        type: EMPTY_FORM
    };
}

export function addInputControl(data) {
    return {
        type: ADD_INPUT_CONTROL,
        data
    };
}

export function attrChange(attr, id, value) {
    return {
        type: ATTR_CHANGE,
        attr,
        id,
        value
    };
}

export function moveControl(direction, id) {
    return {
        type: MOVE_CONTROL,
        id,
        direction
    };
}

export function removeControl(id) {
    return {
        type: REMOVE_CONTROL,
        id
    };
}
