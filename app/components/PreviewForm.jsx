import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup,
         Form,
         Button,
         Checkbox,
         ControlLabel,
         ButtonToolbar,
         FormControl,
         Glyphicon,
         Col } from 'react-bootstrap';

import TooltipWrapper from '../containers/Tooltip';

const PreviewForm = ({formControls}) => {
    return (
        <section>
            <Form horizontal>
                {formControls.map(item => {
                    return (
                        <FormGroup controlId={item.id.toString()} key={item.id}>
                            {item.type === 'text' &&
                            <div>
                                <Col componentClass={ControlLabel} sm={4}>
                                    {item.label}
                                </Col>
                                <Col sm={8}>
                                    <FormControl type={item.type} name={item.name} placeholder={item.placeholder} />
                                </Col>
                            </div>
                            }
                            {item.type === 'checkbox' &&
                            <div>
                                <Col smOffset={4} sm={8}>
                                    <Checkbox name={item.name} id={item.id}>{item.label}</Checkbox>
                                </Col>
                            </div>
                            }
                        </FormGroup>
                    );
                })}
                <FormGroup>
                    <Col smOffset={4} sm={8}>
                        <Button className="btn btn-primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
            <div className="form-manipulation-controls non-empty">
                <ButtonToolbar>
                    <TooltipWrapper message="Save current changes" id="tooltip-final-save">
                        <Button className="disabled" disabled>
                            <Glyphicon glyph="ok" /> Save Changes
                        </Button>
                    </TooltipWrapper>
                </ButtonToolbar>
            </div>
        </section>

    );
};

PreviewForm.propTypes = {
    formControls: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.string
    }))
};

export default PreviewForm;
