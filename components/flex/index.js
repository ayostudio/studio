import React from 'react';
import PropTypes from 'prop-types';
import StyledFlex from './styles';

const Container = ({
  align,
  justify,
  direction,
  wrap,
  className,
  children,
  mobileAlign,
  mobileDirection,
  mobileJustify,
  tabletAlign,
  tabletDirection,
  tabletJustify,
}) => (
  <StyledFlex.Container
    align={align}
    justify={justify}
    direction={direction}
    wrap={wrap}
    className={className}
    mobileAlign={mobileAlign}
    mobileDirection={mobileDirection}
    mobileJustify={mobileJustify}
    tabletAlign={tabletAlign}
    tabletJustify={tabletJustify}
    tabletDirection={tabletDirection}
  >
    {React.Children.toArray(children)}
  </StyledFlex.Container>
);

Container.defaultProps = {
  align: 'center',
  justify: 'space-between',
  direction: 'row',
  className: '',
  children: null,
  wrap: 'no-wrap',
  mobileAlign: 'flex-start',
  tabletAlign: 'flex-start',
  mobileJustify: 'flex-start',
  tabletJustify: 'flex-start',
  mobileDirection: 'column',
  tabletDirection: 'column',
};

Container.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  wrap: PropTypes.string,
  mobileAlign: PropTypes.string,
  mobileJustify: PropTypes.string,
  tabletAlign: PropTypes.string,
  tabletJustify: PropTypes.string,
  mobileDirection: PropTypes.string,
  tabletDirection: PropTypes.string,
};

const Item = ({
  align,
  className,
  maxWidth,
  display,
  textAlign,
  children,
  mobileWidth,
  tabletWidth,
  mobileAlign,
  tabletAlign,
  justify,
  mobileJustify,
  tabletJustify,
  flex,
  tabletFlex,
  mobileFlex,
  left,
  right,
  mobileLeft,
  mobileRight,
  tabletLeft,
  tabletRight,
}) => (
  <StyledFlex.Item
    align={align}
    className={className}
    maxWidth={maxWidth}
    display={display}
    textAlign={textAlign}
    mobileWidth={mobileWidth}
    tabletWidth={tabletWidth}
    mobileAlign={mobileAlign}
    tabletAlign={tabletAlign}
    justify={justify}
    mobileJustify={mobileJustify}
    tabletJustify={tabletJustify}
    flex={flex}
    tabletFlex={tabletFlex}
    mobileFlex={mobileFlex}
    left={left}
    right={right}
    mobileLeft={mobileLeft}
    mobileRight={mobileRight}
    tabletLeft={tabletLeft}
    tabletRight={tabletRight}
  >
    {React.Children.toArray(children)}
  </StyledFlex.Item>
);

Item.defaultProps = {
  align: 'auto',
  className: '',
  maxWidth: '100%',
  display: 'block',
  children: null,
  textAlign: 'left',
  mobileAlign: 'flex-start',
  mobileWidth: '100$',
  tabletAlign: 'flex-start',
  tabletWidth: '100%',
  justify: 'flex-start',
  mobileJustify: 'flex-start',
  tabletJustify: 'flex-start',
  flex: 0,
  tabletFlex: 0,
  mobileFlex: 0,
  left: 0,
  right: 0,
  mobileLeft: 0,
  mobileRight: 0,
  tabletLeft: 0,
  tabletRight: 0,
};

Item.propTypes = {
  align: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  maxWidth: PropTypes.string,
  display: PropTypes.string,
  textAlign: PropTypes.string,
  mobileAlign: PropTypes.string,
  tabletAlign: PropTypes.string,
  mobileWidth: PropTypes.string,
  tabletWidth: PropTypes.string,
  justify: PropTypes.string,
  mobileJustify: PropTypes.string,
  tabletJustify: PropTypes.string,
  flex: PropTypes.number,
  tabletFlex: PropTypes.number,
  mobileFlex: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  mobileLeft: PropTypes.number,
  mobileRight: PropTypes.number,
  tabletLeft: PropTypes.number,
  tabletRight: PropTypes.number,
};

export default {
  Container,
  Item,
};
