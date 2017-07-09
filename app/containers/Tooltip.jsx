import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const TooltipWrapper = ({children, id, message}) => {
    let tooltip = <Tooltip id={id}>{message}</Tooltip>;

    return (
        <OverlayTrigger overlay={tooltip} placement="top">
            {children}
        </OverlayTrigger>
    );
};

TooltipWrapper.propTypes = {
    id: PropTypes.string,
    message: PropTypes.string
};

export default TooltipWrapper;
