import React from 'react';
import PropTypes from 'prop-types';
import { Button,
         Grid,
         Row,
         Col,
         Glyphicon,
         FormGroup,
         FormControl,
         HelpBlock,
         ButtonToolbar,
         ControlLabel } from 'react-bootstrap';

import TooltipWrapper from '../containers/Tooltip';

require('../styles/editForm.scss');

const EditForm = ({formControls,
                   isEmpty,
                   onDefaultClick,
                   emptyFormClick,
                   addInputControlClick,
                   onAttrChange,
                   moveControlClick,
                   removeControlClick}) => {
    return (
        <div>
            <div>
                <ul className="list-unstyled">
                    {formControls.map((control, index) => {
                         return (<li className="input-section" key={index}>
                                 <div className="input-section-content">
                                     {
                                      <div>
                                        <FormGroup>
                                            <ControlLabel>
                                                Control Name
                                            </ControlLabel>
                                            <FormControl onChange={(event) => {onAttrChange('name', control.id, event.target.value);}}
                                                name={control.name}
                                                placeholder='Input control name'
                                                value={control.name || ''}/>
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>
                                                Control Label
                                            </ControlLabel>
                                            <FormControl onChange={(event) => {onAttrChange('label', control.id, event.target.value);}}
                                                name={control.label}
                                                placeholder='Input control label'
                                                value={control.label || ''}/>
                                        </FormGroup>
                                        {control.type === 'text' &&
                                            <FormGroup>
                                                <ControlLabel>
                                                    Control Placeholder
                                                </ControlLabel>
                                                <FormControl onChange={(event) => {onAttrChange('placeholder', control.id, event.target.value);}}
                                                    name={control.placeholder}
                                                    placeholder='Input control placeholder'
                                                    value={control.placeholder || ''}/>
                                            </FormGroup>
                                        }
                                        <FormGroup>
                                            <ControlLabel>
                                                Control Type
                                            </ControlLabel>
                                            <FormControl componentClass="select"
                                                         onChange={(event) => {onAttrChange('type', control.id, event.target.value);}}
                                                         name={control.type}
                                                         value={control.type || ''}>
                                                <option value="text">text</option>
                                                <option value="checkbox">checkbox</option>
                                            </FormControl>
                                        </FormGroup>
                                    </div>
                                    }
                                 </div>
                                 <div className="input-section-controls">
                                     { index !== 0 &&
                                        <TooltipWrapper message="Move current control up" id="tooltip-move-up">
                                            <Button className="button-up" onClick={() => {moveControlClick('up', control.id);}}>
                                                <Glyphicon glyph="triangle-top" />
                                            </Button>
                                        </TooltipWrapper>
                                     }
                                    { index !== formControls.length - 1 &&
                                        <TooltipWrapper message="Move current control down" id="tooltip-move-down">
                                            <Button className="button-down" onClick={() => {moveControlClick('down', control.id);}}>
                                                <Glyphicon glyph="triangle-bottom" />
                                            </Button>
                                        </TooltipWrapper>
                                    }
                                    <TooltipWrapper message="Remove current control" id="tooltip-remove-control">
                                        <Button className="button-remove" onClick={() => {removeControlClick(control.id);}}>
                                            <Glyphicon glyph="remove" />
                                        </Button>
                                    </TooltipWrapper>
                                 </div>
                             </li>
                         );
                     })}
                </ul>
            </div>
            <div className={!isEmpty ? 'form-manipulation-controls non-empty': 'form-manipulation-controls'}>
                <ButtonToolbar>
                    <TooltipWrapper message="Set default form controls" id="tooltip-default">
                        <Button className="default" onClick={onDefaultClick}>
                            <Glyphicon glyph="star" /> Set Default Form
                        </Button>
                    </TooltipWrapper>

                    <TooltipWrapper message="Clear all data related to form" id="tooltip-delete">
                        <Button href="#" onClick={emptyFormClick}>
                            <Glyphicon glyph="remove-circle" /> Delete All Fields
                        </Button>
                    </TooltipWrapper>
                    <TooltipWrapper message="Add new control field" id="tooltip-add-field">
                        <Button href="#" onClick={addInputControlClick}>
                            <Glyphicon glyph="plus" /> Add Field
                        </Button>
                    </TooltipWrapper>
                </ButtonToolbar>
            </div>
        </div>
    );
};

EditForm.propTypes = {
    onDefaultClick: PropTypes.func.isRequired,
    emptyFormClick: PropTypes.func.isRequired,
    addInputControlClick: PropTypes.func.isRequired,
    onAttrChange: PropTypes.func.isRequired,
    moveControlClick: PropTypes.func.isRequired,
    removeControlClick: PropTypes.func.isRequired,

    isEmpty: PropTypes.bool.isRequired,
    formControls: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.string
    }))
};

export default EditForm;
