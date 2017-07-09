import * as actions from '../actions';

describe('actions', () => {
    it('should create default form', () => {
        let defaultFormAction = {
            type: actions.SET_DEFAULT_FORM
        };
        expect(actions.setDefaultForm()).toEqual(defaultFormAction);
    });

    it('should empty form', () => {
        let emptyFormAction = {
            type: actions.EMPTY_FORM
        };
        expect(actions.emptyForm()).toEqual(emptyFormAction);
    });

    it('should add input form', () => {
        let data = 'test';
        let addInputControlAction = {
            type: actions.ADD_INPUT_CONTROL,
            data
        };
        expect(actions.addInputControl(data)).toEqual(addInputControlAction);
    });

    it('should change attribute', () => {
        let {id, attr, value} = {id: 1, attr: 'type', value: 'checkbox'};
        let changeAttributeAction = {
            type: actions.ATTR_CHANGE,
            id,
            attr,
            value
        };
        expect(actions.attrChange(attr, id, value)).toEqual(changeAttributeAction);
    });

    it('should move control', () => {
        let {direction, id} = {direction: 'up', id: 1};
        let moveControlAction = {
            type: actions.MOVE_CONTROL,
            direction,
            id
        };
        expect(actions.moveControl(direction, id)).toEqual(moveControlAction);
    });

    it('should remove control', () => {
        let id = 1;
        let removeControlAction = {
            type: actions.REMOVE_CONTROL,
            id
        };
        expect(actions.removeControl(id)).toEqual(removeControlAction);
    });
});
