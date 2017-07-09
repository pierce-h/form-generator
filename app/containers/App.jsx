import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

import TooltipWrapper from './Tooltip';

require('../styles/base.scss');

const App = ({isDefault, isEmpty, children}) => {
    return (
      <Grid>
        <Row>
            <Col md={8} mdOffset={2}>
                <div className="main-content-wrapper">
                    {isDefault &&
                        <Label bsStyle="info">Default Form...</Label>
                    }
                    {isEmpty &&
                        <Label bsStyle="info">Fill form with some fields...</Label>
                    }
                    <div className={isEmpty ? 'child-content-wrapper' : 'child-content-wrapper non-empty'}>
                        {children}
                    </div>
                    {!isEmpty &&
                        <TooltipWrapper message="Preview generated form" id="tooltip-link-generate">
                            <div className="main-navigation main-navigation-next">
                                <Link to={'/custom-form/preview'}
                                    className="nav-link"
                                    activeClassName="active">
                                    <Glyphicon glyph="menu-right" />
                                </Link>
                            </div>
                        </TooltipWrapper>
                    }
                    <TooltipWrapper message="Go back to edit form" id="tooltip-link-edit">
                        <div className="main-navigation main-navigation-before">
                            <Link to={'/custom-form/edit'}
                                className="nav-link"
                                activeClassName="active">
                                <Glyphicon glyph="menu-left" />
                            </Link>
                        </div>
                    </TooltipWrapper>
                </div>
            </Col>
        </Row>
      </Grid>
    );
};

App.propTypes = {
  isDefault: PropTypes.bool.isRequired,
  isEmpty: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { customForm } = state;
  const {
    isDefault, isEmpty
  } = customForm || {
    isDefault: false,
    isEmpty: true
  };

  return {
    isDefault,
    isEmpty
  };
}

export default connect(mapStateToProps)(App);
