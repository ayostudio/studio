import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styles';

const Container = ({ children }) => (
  <StyledContainer>{React.Children.toArray(children)}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
