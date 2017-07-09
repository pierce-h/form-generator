import * as actions from '../actions';
import formApp, {createEmptyField,
                 DEFAULT_CONTROLS,
                 EMPTY_FORM_STATE,
                 DEFAULT_FORM} from '../reducers';

describe('reducers tests', () => {

    afterEach(() => {
        formApp(undefined, {type: actions.EMPTY_FORM});
    });

    it('should return default state', () => {
        expect(formApp(undefined, {}).customForm)
            .toEqual(EMPTY_FORM_STATE);
    });

    it('should set default form state', () => {
        expect(formApp(undefined, {type: actions.SET_DEFAULT_FORM}).customForm)
            .toEqual(DEFAULT_FORM);
    });

    it('should empty form state', () => {
        expect(formApp(undefined, {type: actions.EMPTY_FORM}).customForm)
            .toEqual(EMPTY_FORM_STATE);
    });

    it('should add input form state', () => {
        expect(formApp(undefined, {type: actions.ADD_INPUT_CONTROL}).customForm.controls.length)
            .toBe(1);
    });

    it('should add input control into state with unique ids', () => {
        expect(formApp(undefined, {type: actions.ADD_INPUT_CONTROL}).customForm.controls[0])
            .not.toEqual(createEmptyField('text'));
    });

    it('should change input attribute', () => {
        let state = formApp(undefined, {type: actions.ADD_INPUT_CONTROL});
        expect(formApp(state, {type: actions.ATTR_CHANGE, id: 1, attr: 'name', value: 'test'}).customForm.controls[0].name)
            .toEqual('test');
    });

    it('should remove input controls by id', () => {
        let state = formApp(undefined, {type: actions.ADD_INPUT_CONTROL});
        expect(formApp(state, {type: actions.REMOVE_CONTROL, id: 1}).customForm.controls)
            .toEqual([]);
    });

    it('should move control up/down in the list', () => {
        let state = formApp(undefined, {type: actions.ADD_INPUT_CONTROL});
        let state2 = formApp(state, {type: actions.ADD_INPUT_CONTROL});
        expect(formApp(state2, {type: actions.MOVE_CONTROL, direction: 'down', id: 1}).customForm.controls[0].id).toBe(2);
        expect(formApp(state2, {type: actions.MOVE_CONTROL, direction: 'up', id: 1}).customForm.controls[0].id).toBe(1);
    });

    it('should not move control up/down in the list if it is first/last', () => {
        let state = formApp(undefined, {type: actions.ADD_INPUT_CONTROL});
        let state2 = formApp(state, {type: actions.ADD_INPUT_CONTROL});

        expect(formApp(state2, {type: actions.MOVE_CONTROL, direction: 'up', id: 1}).customForm.controls[0].id).toBe(1);
        expect(formApp(state2, {type: actions.MOVE_CONTROL, direction: 'down', id: 2}).customForm.controls[1].id).toBe(2);
    });

});
