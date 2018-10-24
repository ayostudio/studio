import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading from './styles';

const Heading = ({
  children, maxWidth, top, bottom,
}) => (
  <StyledHeading top={top} bottom={bottom} maxWidth={maxWidth}>
    {React.Children.toArray(children)}
  </StyledHeading>
);

Heading.defaultProps = {
  maxWidth: '100%',
  top: 0,
  bottom: 0,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
};

export default Heading;
