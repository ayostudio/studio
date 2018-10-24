import React from 'react';
import PropTypes from 'prop-types';
import StyledParagraph from './styles';

const Paragraph = ({ children, maxWidth, large }) => (
  <StyledParagraph large={large} maxWidth={maxWidth}>
    {React.Children.toArray(children)}
  </StyledParagraph>
);

Paragraph.defaultProps = {
  maxWidth: '100%',
  large: false,
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  large: PropTypes.bool,
};

export default Paragraph;
