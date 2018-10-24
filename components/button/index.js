import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import StyledButton from './styles';

const Button = ({
  href, onClick, children, color, size,
}) => (
  <StyledButton.Container color={color} size={size}>
    {href ? (
      <Link href={href} prefetch>
        <StyledButton.Link href={href}>{React.Children.toArray(children)}</StyledButton.Link>
      </Link>
    ) : (
      <StyledButton.Button onClick={onClick}>
        {React.Children.toArray(children)}
      </StyledButton.Button>
    )}
  </StyledButton.Container>
);

Button.defaultProps = {
  href: false,
  onClick: false,
  color: 'normal',
  size: 'normal',
};

Button.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
