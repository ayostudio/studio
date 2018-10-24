import styled from 'styled-components';
import variables from '../../common/variables';

const P = styled.p`
  font-size: 16px;
  color: ${variables.colors.darkest};
  letter-spacing: 0;
  line-height: 28px;
  max-width: ${props => props.maxWidth};
  padding: 0;
  margin: 0;

  a {
    display: inline-block;
    text-decoration: none;
    color: ${variables.colors.darkest};
    position: relative;

    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background: ${variables.colors.darkest};
      bottom: 2px;
      left: 0px;
      position: absolute;
    }
  }

  ${props =>
    props.large
    && `
    font-size: 22px;
    line-height: 38px;
  `};
`;

export default P;
