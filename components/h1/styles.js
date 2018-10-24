import styled from 'styled-components';
import variables from '../../common/variables';

const Heading = styled.h1`
  font-weight: 600;
  color: ${variables.colors.darkest};
  max-width: ${props => props.maxWidth};
  font-size: 120px;
  letter-spacing: 0;
  line-height: auto;
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;

  @media (max-width: ${variables.breakpoints.tablet}px) {
    font-size: 70px;
  }
`;

export default Heading;
