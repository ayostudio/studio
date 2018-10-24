import React from 'react';
import PropTypes from 'prop-types';

import StyledStats from './styles';

const Stats = ({ items, hasBorder }) => (
  <StyledStats hasBorder={hasBorder}>
    {items.map(({
      title, value, name, role, desc, key,
    }) => (
      <li key={key}>
        {title && <div className="title">{title}</div>}
        {value && <div className="value">{value}</div>}
        {name && <div className="name">{name}</div>}
        {role && <div className="role">{role}</div>}
        {desc && <div className="desc">{desc}</div>}
      </li>
    ))}
  </StyledStats>
);

Stats.defaultProps = {
  items: [],
  hasBorder: true,
};

Stats.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  hasBorder: PropTypes.bool,
};

export default Stats;
